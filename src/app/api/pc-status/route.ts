import { isPriceChartingEnabled } from "@/lib/pricing/pricecharting";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.PRICECHARTING_API_TOKEN ?? "";
  return Response.json({
    configured: isPriceChartingEnabled(),
    tokenLength: token.length,
    tokenPreview: token ? `${token.slice(0, 4)}…${token.slice(-4)}` : null,
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV,
  });
}
