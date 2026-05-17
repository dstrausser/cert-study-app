"use client";

import { useState } from "react";
import {
  Upload,
  FileWarning,
  Loader2,
  BadgeCheck,
  Info,
  Download,
} from "lucide-react";
import { parseCollectrCsv } from "@/lib/pricing/collectr-csv";
import { buildCollectionCsv, downloadCsv } from "@/lib/pricing/csv-export";
import type {
  EnrichedCard,
  ParsedCard,
  PricingResponse,
} from "@/lib/pricing/types";
import CardPricingTable from "@/components/CardPricingTable";

type Status =
  | { kind: "idle" }
  | { kind: "parsing" }
  | { kind: "pricing"; done: number; total: number }
  | { kind: "ready" }
  | { kind: "error"; message: string };

const PC_BATCH_SIZE = 20;

export default function CardsPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [cards, setCards] = useState<EnrichedCard[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [pcEnabled, setPcEnabled] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleFile(file: File) {
    setFileName(file.name);
    setCards([]);
    setWarnings([]);
    setStatus({ kind: "parsing" });

    let text: string;
    try {
      text = await file.text();
    } catch (e) {
      setStatus({
        kind: "error",
        message: e instanceof Error ? e.message : "Failed to read file",
      });
      return;
    }

    const { cards: parsed, warnings: parseWarnings } = parseCollectrCsv(text);
    setWarnings(parseWarnings);

    if (parsed.length === 0) {
      setStatus({
        kind: "error",
        message: parseWarnings[0] ?? "No cards found in file",
      });
      return;
    }

    setStatus({ kind: "pricing", done: 0, total: parsed.length });

    const enriched: EnrichedCard[] = [];
    let pcDetected = false;
    try {
      for (let i = 0; i < parsed.length; i += PC_BATCH_SIZE) {
        const batch = parsed.slice(i, i + PC_BATCH_SIZE);
        const res = await fetch("/api/prices", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ cards: batch satisfies ParsedCard[] }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setStatus({
            kind: "error",
            message: body.error ?? `Pricing API returned ${res.status}`,
          });
          setCards([...enriched, ...parsed.slice(i)]);
          setPcEnabled(pcDetected);
          return;
        }
        const data = (await res.json()) as PricingResponse;
        pcDetected = data.priceChartingEnabled;
        enriched.push(...data.cards);
        setCards([...enriched]);
        setPcEnabled(pcDetected);
        setStatus({
          kind: "pricing",
          done: Math.min(i + PC_BATCH_SIZE, parsed.length),
          total: parsed.length,
        });
      }
      setStatus({ kind: "ready" });
    } catch (e) {
      setStatus({
        kind: "error",
        message: e instanceof Error ? e.message : "Pricing request failed",
      });
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <header className="mb-6">
        <p className="text-sm font-medium text-primary">Tools</p>
        <h1 className="mt-1 text-3xl font-semibold">
          Card Collection Pricing
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Upload your Collectr CSV export. Prices in the file are loaded as the
          Collectr column. PSA 7 / 8 / 9 / 10 columns from PriceCharting appear
          once an API token is configured.
        </p>
      </header>

      <section className="mb-6 grid gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <label
            htmlFor="csv"
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-muted/40 px-4 py-4 transition hover:bg-muted"
          >
            <Upload className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">
                {fileName ?? "Choose Collectr CSV export"}
              </div>
              <div className="text-muted-foreground">
                Drag-drop disabled — click to select a .csv file
              </div>
            </div>
            <input
              id="csv"
              type="file"
              accept=".csv,text/csv"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />
          </label>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {pcEnabled ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-medium text-emerald-600">
              <BadgeCheck className="h-3.5 w-3.5" />
              PriceCharting connected
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 font-medium">
              <Info className="h-3.5 w-3.5" />
              PriceCharting not configured
            </span>
          )}
        </div>
      </section>

      {status.kind === "parsing" && (
        <StatusBar>
          <Loader2 className="h-4 w-4 animate-spin" /> Parsing CSV…
        </StatusBar>
      )}
      {status.kind === "pricing" && (
        <StatusBar>
          <Loader2 className="h-4 w-4 animate-spin" /> Pricing cards…{" "}
          {status.done}/{status.total}
        </StatusBar>
      )}
      {status.kind === "error" && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <FileWarning className="h-4 w-4" />
          {status.message}
        </div>
      )}

      {warnings.length > 0 && status.kind !== "error" && (
        <div className="mb-4 space-y-1 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-700">
          {warnings.map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <FileWarning className="h-4 w-4" /> {w}
            </div>
          ))}
        </div>
      )}

      {cards.length > 0 && (
        <>
          <div className="mb-3 flex items-center justify-end">
            <button
              type="button"
              onClick={() => {
                const csv = buildCollectionCsv(cards, pcEnabled);
                const stem = fileName?.replace(/\.csv$/i, "") ?? "collection";
                const stamp = new Date().toISOString().slice(0, 10);
                downloadCsv(`${stem}-priced-${stamp}.csv`, csv);
              }}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium shadow-sm transition hover:bg-muted/70"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </button>
          </div>
          <CardPricingTable cards={cards} showPriceCharting={pcEnabled} />
        </>
      )}

      {status.kind === "idle" && cards.length === 0 && (
        <EmptyState />
      )}
    </main>
  );
}

function StatusBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
      {children}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-border bg-card p-10 text-center">
      <h2 className="text-base font-semibold">No collection loaded yet</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Export your collection from Collectr as a CSV, then upload it above to
        see ungraded and graded totals.
      </p>
      <details className="mx-auto mt-4 max-w-md text-left text-xs text-muted-foreground">
        <summary className="cursor-pointer font-medium text-foreground">
          Enable PriceCharting columns
        </summary>
        <p className="mt-2">
          Set <code className="rounded bg-muted px-1">PRICECHARTING_API_TOKEN</code>{" "}
          in Vercel project env vars. Restart deployment and the PSA tiers will
          populate on the next upload.
        </p>
      </details>
    </div>
  );
}
