import type { NextRequest } from "next/server";
import type { EnrichedCard, ParsedCard, PricingResponse } from "@/lib/pricing/types";
import {
  fetchPriceChartingPrices,
  isPriceChartingEnabled,
} from "@/lib/pricing/pricecharting";

const MAX_CARDS = 500;

export async function POST(req: NextRequest) {
  let body: { cards?: ParsedCard[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const cards = Array.isArray(body.cards) ? body.cards : [];
  if (cards.length === 0) {
    return Response.json({ error: "No cards provided" }, { status: 400 });
  }
  if (cards.length > MAX_CARDS) {
    return Response.json(
      { error: `Too many cards (max ${MAX_CARDS})` },
      { status: 400 }
    );
  }

  const pcEnabled = isPriceChartingEnabled();

  if (!pcEnabled) {
    const response: PricingResponse = {
      priceChartingEnabled: false,
      cards: cards as EnrichedCard[],
    };
    return Response.json(response);
  }

  const enriched: EnrichedCard[] = await Promise.all(
    cards.map(async (c) => {
      const { match, error } = await fetchPriceChartingPrices(c);
      return {
        ...c,
        priceCharting: match?.prices,
        priceChartingMatchedName: match?.matchedName,
        priceChartingMatchedSet: match?.matchedSet,
        priceChartingProductId: match?.productId,
        priceChartingError: error,
      };
    })
  );

  const response: PricingResponse = {
    priceChartingEnabled: true,
    cards: enriched,
  };
  return Response.json(response);
}
