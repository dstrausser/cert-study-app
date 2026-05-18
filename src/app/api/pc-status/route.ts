import { isPriceChartingEnabled } from "@/lib/pricing/pricecharting";
import { isPokemonTcgEnabled } from "@/lib/pricing/pokemontcg";

export const dynamic = "force-dynamic";

function preview(token: string): string | null {
  if (!token) return null;
  return `${token.slice(0, 4)}…${token.slice(-4)}`;
}

export async function GET() {
  const pcToken = process.env.PRICECHARTING_API_TOKEN ?? "";
  const ptcgToken =
    process.env.POKEMONTCG_API_KEY ||
    process.env.POKEMON_TCG_API_KEY ||
    process.env.POKEMON_TCG_API ||
    "";
  return Response.json({
    configured: isPriceChartingEnabled(),
    tokenLength: pcToken.length,
    tokenPreview: preview(pcToken),
    pokemonTcgConfigured: isPokemonTcgEnabled(),
    pokemonTcgKeyLength: ptcgToken.length,
    pokemonTcgKeyPreview: preview(ptcgToken),
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV,
  });
}
