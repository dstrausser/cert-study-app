import type { ParsedCard, PriceSet } from "./types";

export function isPriceChartingEnabled(): boolean {
  return Boolean(process.env.PRICECHARTING_API_TOKEN);
}

// PriceCharting's product API returns prices in cents. For TCG products the
// commonly observed field-to-grade mapping is:
//   loose-price        -> Ungraded
//   box-only-price     -> PSA 8 equivalent
//   manual-only-price  -> PSA 9 equivalent
//   graded-price       -> PSA 9 (grade 9)
//   new-price          -> PSA 10
// PriceCharting does not publish a dedicated PSA 7 tier, so that column stays
// empty unless the source provides one in the future.
type PCProduct = {
  "product-name"?: string;
  "console-name"?: string;
  "loose-price"?: number;
  "graded-price"?: number;
  "manual-only-price"?: number;
  "box-only-price"?: number;
  "new-price"?: number;
  status?: string;
};

function centsToDollars(v: number | undefined): number | undefined {
  if (typeof v !== "number" || !Number.isFinite(v)) return undefined;
  return v / 100;
}

function productToPriceSet(p: PCProduct): PriceSet {
  const out: PriceSet = {};
  const ungraded = centsToDollars(p["loose-price"]);
  const psa8 = centsToDollars(p["box-only-price"]);
  const psa9 =
    centsToDollars(p["manual-only-price"]) ?? centsToDollars(p["graded-price"]);
  const psa10 = centsToDollars(p["new-price"]);
  if (ungraded !== undefined) out.ungraded = ungraded;
  if (psa8 !== undefined) out.psa8 = psa8;
  if (psa9 !== undefined) out.psa9 = psa9;
  if (psa10 !== undefined) out.psa10 = psa10;
  return out;
}

function buildQuery(card: ParsedCard): string {
  const parts = [card.name, card.set, card.number].filter(Boolean);
  return parts.join(" ");
}

export async function fetchPriceChartingPrices(
  card: ParsedCard
): Promise<{ prices?: PriceSet; error?: string }> {
  const token = process.env.PRICECHARTING_API_TOKEN;
  if (!token) return { error: "PriceCharting not configured" };

  const url = new URL("https://www.pricecharting.com/api/product");
  url.searchParams.set("t", token);
  url.searchParams.set("q", buildQuery(card));

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return { error: `PriceCharting HTTP ${res.status}` };
    }
    const data = (await res.json()) as PCProduct;
    if (data.status && data.status !== "success") {
      return { error: `PriceCharting: ${data.status}` };
    }
    return { prices: productToPriceSet(data) };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "PriceCharting request failed",
    };
  }
}

