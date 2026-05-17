import type { ParsedCard, PriceSet } from "./types";

// PriceCharting product API
//   Endpoint: GET https://www.pricecharting.com/api/product
//   Auth:     ?t=<40-char-token>  (from Subscription -> API/Download)
//   Lookup:   ?id=<pc-product-id> (preferred when known) or ?q=<query> or ?upc=
//   Prices:   integers in pennies (1732 -> $17.32)
//   Status:   { "status": "success" } on success
//
// Trading-card grade field mapping (PriceCharting reuses the video-game schema
// for cards). Confirmed tiers shown on the site for cards are: Ungraded,
// Grade 7, Grade 8, Grade 9, Grade 9.5, PSA 10, BGS 10. The conventional
// JSON-to-grade mapping is:
//
//   loose-price        -> Ungraded
//   cib-price          -> Grade 7
//   new-price          -> Grade 8
//   graded-price       -> Grade 9
//   box-only-price     -> Grade 9.5
//   manual-only-price  -> PSA 10
//   bgs-10-price       -> BGS 10
//
// We only surface ungraded + PSA 7/8/9/10 since that matches the app's columns.
// Verify the mapping on first live call by spot-checking matched-product-name
// and prices against the PriceCharting web UI for the same card.

type PCProduct = {
  status?: string;
  id?: string | number;
  "product-name"?: string;
  "console-name"?: string;
  "loose-price"?: number;
  "cib-price"?: number;
  "new-price"?: number;
  "graded-price"?: number;
  "box-only-price"?: number;
  "manual-only-price"?: number;
  "bgs-10-price"?: number;
};

export type PriceChartingMatch = {
  prices: PriceSet;
  matchedName?: string;
  matchedSet?: string;
  productId?: string;
};

export function isPriceChartingEnabled(): boolean {
  return Boolean(process.env.PRICECHARTING_API_TOKEN);
}

function penniesToDollars(v: number | undefined): number | undefined {
  if (typeof v !== "number" || !Number.isFinite(v) || v <= 0) return undefined;
  return v / 100;
}

function productToPriceSet(p: PCProduct): PriceSet {
  const out: PriceSet = {};
  const ungraded = penniesToDollars(p["loose-price"]);
  const psa7 = penniesToDollars(p["cib-price"]);
  const psa8 = penniesToDollars(p["new-price"]);
  const psa9 = penniesToDollars(p["graded-price"]);
  const psa10 = penniesToDollars(p["manual-only-price"]);
  if (ungraded !== undefined) out.ungraded = ungraded;
  if (psa7 !== undefined) out.psa7 = psa7;
  if (psa8 !== undefined) out.psa8 = psa8;
  if (psa9 !== undefined) out.psa9 = psa9;
  if (psa10 !== undefined) out.psa10 = psa10;
  return out;
}

function buildQuery(card: ParsedCard): string {
  return [card.name, card.set, card.number].filter(Boolean).join(" ");
}

const BROWSER_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  accept: "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchOnce(url: URL): Promise<Response> {
  return fetch(url, { cache: "no-store", headers: BROWSER_HEADERS });
}

export async function fetchPriceChartingPrices(
  card: ParsedCard
): Promise<{ match?: PriceChartingMatch; error?: string }> {
  const token = process.env.PRICECHARTING_API_TOKEN;
  if (!token) return { error: "PriceCharting not configured" };

  const url = new URL("https://www.pricecharting.com/api/product");
  url.searchParams.set("t", token);
  url.searchParams.set("q", buildQuery(card));

  try {
    let res = await fetchOnce(url);

    // PriceCharting throttles bursty traffic with a 403 + host_not_allowed.
    // Back off and retry twice with jittered delay before giving up.
    for (let attempt = 0; res.status === 403 && attempt < 2; attempt++) {
      await sleep(5000 + attempt * 5000 + Math.random() * 1000);
      res = await fetchOnce(url);
    }

    if (!res.ok) return { error: `PriceCharting HTTP ${res.status}` };

    const data = (await res.json()) as PCProduct;
    if (data.status && data.status !== "success") {
      return { error: `PriceCharting: ${data.status}` };
    }

    return {
      match: {
        prices: productToPriceSet(data),
        matchedName: data["product-name"],
        matchedSet: data["console-name"],
        productId: data.id !== undefined ? String(data.id) : undefined,
      },
    };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "PriceCharting request failed",
    };
  }
}
