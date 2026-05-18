import type { ParsedCard } from "./types";

// Pokemon TCG API (pokemontcg.io)
//   Endpoint:  GET https://api.pokemontcg.io/v2/cards
//   Auth:      X-Api-Key: <key>   (optional; required for non-trivial rate limits)
//   Query:     ?q=name:"Charizard" number:4
//   Free tier: 20k requests/day with a key
//
// Each card response embeds a `tcgplayer.prices` object with per-variant
// market prices in USD. Variants: normal, holofoil, reverseHolofoil,
// 1stEditionHolofoil, 1stEditionNormal. We surface the market price of the
// most likely variant (holofoil > reverseHolofoil > normal > 1st editions)
// as the "Near Mint" price, since TCGplayer's market price is already the
// NM baseline.

type PriceVariant = {
  low?: number;
  mid?: number;
  high?: number;
  market?: number;
  directLow?: number;
};

type TcgPlayerPrices = {
  normal?: PriceVariant;
  holofoil?: PriceVariant;
  reverseHolofoil?: PriceVariant;
  "1stEditionHolofoil"?: PriceVariant;
  "1stEditionNormal"?: PriceVariant;
  unlimitedHolofoil?: PriceVariant;
};

type PtcgCard = {
  id: string;
  name: string;
  number?: string;
  set?: { name?: string; series?: string };
  tcgplayer?: {
    url?: string;
    updatedAt?: string;
    prices?: TcgPlayerPrices;
  };
};

type PtcgSearchResponse = {
  data?: PtcgCard[];
  page?: number;
  pageSize?: number;
  count?: number;
  totalCount?: number;
};

export type PokemonTcgMatch = {
  nmMarket: number;
  variant: string;
  matchedName: string;
  matchedSet?: string;
  productUrl?: string;
};

const VARIANT_PRIORITY: (keyof TcgPlayerPrices)[] = [
  "holofoil",
  "reverseHolofoil",
  "normal",
  "1stEditionHolofoil",
  "1stEditionNormal",
  "unlimitedHolofoil",
];

function getApiKey(): string | undefined {
  return (
    process.env.POKEMONTCG_API_KEY ||
    process.env.POKEMON_TCG_API_KEY ||
    process.env.POKEMON_TCG_API ||
    undefined
  );
}

export function isPokemonTcgEnabled(): boolean {
  return Boolean(getApiKey());
}

function pickMarket(
  prices: TcgPlayerPrices | undefined
): { market: number; variant: string } | undefined {
  if (!prices) return undefined;
  for (const variant of VARIANT_PRIORITY) {
    const v = prices[variant];
    if (v?.market !== undefined && v.market > 0) {
      return { market: v.market, variant };
    }
  }
  return undefined;
}

function buildQuery(card: ParsedCard): string {
  const parts: string[] = [];
  // Strip parenthetical notes (e.g. "Charizard (TG03)") and any
  // remaining non-ASCII so the name is a clean fuzzy match.
  const cleanName = card.name
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[^\x20-\x7e]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (cleanName) parts.push(`name:"${cleanName.replace(/"/g, "")}"`);
  if (card.number) {
    // Pokemon TCG card numbers are usually the printed number, no /total.
    const simple = card.number.split("/")[0].replace(/^0+/, "") || card.number.split("/")[0];
    parts.push(`number:"${simple}"`);
  }
  return parts.join(" ");
}

export async function fetchPokemonTcgPrices(
  card: ParsedCard
): Promise<{ match?: PokemonTcgMatch; error?: string }> {
  const key = getApiKey();
  if (!key) return { error: "Pokemon TCG API not configured" };

  const query = buildQuery(card);
  if (!query) return { error: "No usable query" };

  const url = new URL("https://api.pokemontcg.io/v2/cards");
  url.searchParams.set("q", query);
  url.searchParams.set("pageSize", "10");

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: { "X-Api-Key": key },
    });
    if (!res.ok) return { error: `Pokemon TCG HTTP ${res.status}` };
    const data = (await res.json()) as PtcgSearchResponse;
    const candidates = data.data ?? [];
    if (candidates.length === 0) return { error: "No matching Pokemon TCG card" };

    // Prefer the first candidate that has any tcgplayer market price.
    for (const cand of candidates) {
      const picked = pickMarket(cand.tcgplayer?.prices);
      if (picked) {
        return {
          match: {
            nmMarket: picked.market,
            variant: picked.variant,
            matchedName: cand.name,
            matchedSet: cand.set?.name,
            productUrl: cand.tcgplayer?.url,
          },
        };
      }
    }

    return { error: "Match found but no TCGplayer price" };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Pokemon TCG request failed",
    };
  }
}
