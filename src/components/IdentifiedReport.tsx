"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Camera,
  ImageIcon,
  Info,
  Loader2,
  RefreshCw,
} from "lucide-react";
import type { Photo, IdentifiedCard } from "@/app/cards/identified/data";
import type {
  EnrichedCard,
  ParsedCard,
  PricingResponse,
} from "@/lib/pricing/types";

const PC_BATCH_SIZE = 20;

type Row = IdentifiedCard & {
  key: string;
  photoImage: string;
  pcUngraded?: number;
  pcMatchedName?: string;
  pcMatchedSet?: string;
  pcError?: string;
  pcLoading: boolean;
};

type PcStatus = {
  configured: boolean;
  tokenLength: number;
  tokenPreview: string | null;
  vercelEnv: string | null;
  nodeEnv: string;
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

const RARITY_SUFFIXES =
  /\b(SAR|SIR|IR|UR|MAR|DR|SSR|SR|AR|HR|Hyper Rare|Secret Rare|Illustration Rare|Special Illustration Rare|Trainer Gallery|Reverse Holo|Holo Rare|Rare BREAK|BREAK|Promo|Common|Uncommon|Rare|Foil|Holofoil|Normal|1st Edition|Holofoil)\b/gi;

function cleanCardName(raw: string): string {
  return raw
    // strip Japanese (hiragana, katakana, CJK ideographs) and CJK punctuation
    .replace(/[　-〿぀-ゟ゠-ヿㇰ-ㇿ一-鿿＀-￯]+/g, "")
    // collapse repeated whitespace and trim
    .replace(/\s+/g, " ")
    .trim();
}

function splitSet(raw: string): { set: string | undefined; number: string | undefined } {
  // Patterns like "Prismatic Evolutions 060/131", "MEGA Dream ex (JP) 240/193 SAR",
  // "Lost Origin Trainer Gallery TG03/TG30", "SV 151 (MEW) 203/165 SIR"
  const match = raw.match(/^(.*?)\s+([A-Z]{1,3}?\d+\/[A-Z]{0,3}\d+|\d+\/\d+|\d+[A-Z]?)\b/);
  let set = match ? match[1] : raw;
  const number = match ? match[2] : undefined;
  set = set
    .replace(RARITY_SUFFIXES, "")
    .replace(/\s+/g, " ")
    .trim();
  return { set: set || undefined, number };
}

function buildParsedCard(row: Row): ParsedCard {
  const cleanedName = cleanCardName(row.card).replace(RARITY_SUFFIXES, "").trim();
  const { set, number } = splitSet(row.set);
  return {
    id: row.key,
    name: cleanedName || row.card,
    set,
    number,
    quantity: 1,
    collectr: row.price > 0 ? { ungraded: row.price } : {},
  };
}

export default function IdentifiedReport({ photos }: { photos: Photo[] }) {
  const initialRows: Row[] = useMemo(
    () =>
      photos.flatMap((p) =>
        p.cards.map((c) => ({
          ...c,
          key: `${p.image}-${c.pos}`,
          photoImage: p.image,
          pcLoading: false,
        }))
      ),
    [photos]
  );

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [pcStatus, setPcStatus] = useState<PcStatus | null>(null);
  const [pcStatusError, setPcStatusError] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [hasSynced, setHasSynced] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number }>({
    done: 0,
    total: 0,
  });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/pc-status")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((s: PcStatus) => {
        if (!cancelled) setPcStatus(s);
      })
      .catch((e) => {
        if (!cancelled) {
          setPcStatusError(e instanceof Error ? e.message : "status check failed");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function sync(targetRows: Row[]) {
    if (syncing || targetRows.length === 0) return;
    setSyncing(true);
    setProgress({ done: 0, total: targetRows.length });
    setRows((prev) =>
      prev.map((r) =>
        targetRows.some((t) => t.key === r.key)
          ? { ...r, pcLoading: true, pcError: undefined }
          : r
      )
    );

    for (let i = 0; i < targetRows.length; i += PC_BATCH_SIZE) {
      const batch = targetRows.slice(i, i + PC_BATCH_SIZE);
      const body = { cards: batch.map(buildParsedCard) };
      let data: PricingResponse | null = null;
      try {
        const res = await fetch("/api/prices", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        data = (await res.json()) as PricingResponse;
      } catch (e) {
        const message = e instanceof Error ? e.message : "request failed";
        setRows((prev) => {
          const copy = [...prev];
          for (const r of batch) {
            const idx = copy.findIndex((x) => x.key === r.key);
            if (idx >= 0) {
              copy[idx] = { ...copy[idx], pcLoading: false, pcError: message };
            }
          }
          return copy;
        });
        setProgress((p) => ({
          ...p,
          done: Math.min(i + batch.length, targetRows.length),
        }));
        continue;
      }

      const enrichedBatch = data.cards;
      setRows((prev) => {
        const copy = [...prev];
        for (let j = 0; j < batch.length; j++) {
          const r = batch[j];
          const enriched = enrichedBatch[j] as EnrichedCard | undefined;
          const idx = copy.findIndex((x) => x.key === r.key);
          if (idx < 0) continue;
          copy[idx] = {
            ...copy[idx],
            pcLoading: false,
            pcUngraded: enriched?.priceCharting?.ungraded,
            pcMatchedName: enriched?.priceChartingMatchedName,
            pcMatchedSet: enriched?.priceChartingMatchedSet,
            pcError: enriched?.priceChartingError,
          };
        }
        return copy;
      });
      setProgress((p) => ({
        ...p,
        done: Math.min(i + batch.length, targetRows.length),
      }));
    }

    setSyncing(false);
    setHasSynced(true);
  }

  const pcEnabled = pcStatus?.configured ?? null;
  const totalCollectr = rows.reduce((s, r) => s + (r.price || 0), 0);
  const totalPc = rows.reduce((s, r) => s + (r.pcUngraded ?? 0), 0);
  const failedRows = rows.filter((r) => r.pcError);
  const pcLoadedCount = rows.filter(
    (r) => r.pcUngraded !== undefined || r.pcError
  ).length;

  const byPhoto: Record<string, Row[]> = {};
  for (const r of rows) {
    (byPhoto[r.photoImage] ||= []).push(r);
  }

  return (
    <>
      <section className="mb-8 grid gap-3 sm:grid-cols-4">
        <Stat label="Cards identified" value={String(rows.length)} />
        <Stat label="Source photos" value={String(photos.length)} />
        <Stat
          label="Collectr total"
          value={fmt(totalCollectr)}
          emphasis="emerald"
        />
        <Stat
          label="PriceCharting total"
          value={
            pcEnabled === false
              ? "Not configured"
              : !hasSynced
                ? "Not synced"
                : fmt(totalPc)
          }
          emphasis={pcEnabled === false ? "muted" : "emerald"}
          sub={
            hasSynced && pcLoadedCount < rows.length
              ? `${pcLoadedCount}/${rows.length} priced`
              : undefined
          }
        />
      </section>

      <section className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-4">
        {pcEnabled === null ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Checking PriceCharting status…
          </span>
        ) : pcEnabled ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
            <BadgeCheck className="h-3.5 w-3.5" />
            PriceCharting connected
            {pcStatus?.vercelEnv ? ` · ${pcStatus.vercelEnv}` : ""}
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-700"
            title={pcStatusError ?? undefined}
          >
            <Info className="h-3.5 w-3.5" />
            PriceCharting not configured
            {pcStatus?.vercelEnv ? ` for ${pcStatus.vercelEnv}` : ""}
          </span>
        )}

        <button
          type="button"
          onClick={() => sync(rows)}
          disabled={!pcEnabled || syncing}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {syncing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          {syncing
            ? `Syncing ${progress.done}/${progress.total}`
            : hasSynced
              ? "Re-sync all"
              : "Sync from PriceCharting"}
        </button>

        {hasSynced && failedRows.length > 0 && !syncing && (
          <button
            type="button"
            onClick={() => sync(failedRows)}
            disabled={!pcEnabled || syncing}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium shadow-sm transition hover:bg-muted/60"
          >
            <RefreshCw className="h-4 w-4" />
            Retry failed ({failedRows.length})
          </button>
        )}

        <span className="text-xs text-muted-foreground">
          {syncing
            ? "PriceCharting rate-limits to ~40 req/min, so this can take a few minutes for a full collection."
            : pcEnabled === false
              ? "Set PRICECHARTING_API_TOKEN in Vercel env vars for the current environment, then redeploy."
              : "Tap to pull live PriceCharting ungraded prices for every card."}
        </span>
      </section>

      <div className="space-y-10">
        {photos.map((photo) => {
          const photoRows = byPhoto[photo.image] ?? [];
          const photoCollectr = photoRows.reduce((s, r) => s + (r.price || 0), 0);
          const photoPc = photoRows.reduce(
            (s, r) => s + (r.pcUngraded ?? 0),
            0
          );
          return (
            <section key={photo.image}>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <Camera className="h-5 w-5 text-primary" />
                  {photo.image}
                  <span className="text-sm font-normal text-muted-foreground">
                    · {photoRows.length} cards
                  </span>
                </h2>
                <div className="flex items-center gap-3 text-sm">
                  <a
                    href={`/cards/identified/originals/${photo.image}.jpeg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <ImageIcon className="h-4 w-4" />
                    View original
                  </a>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-600">
                      {fmt(photoCollectr)}
                    </div>
                    {pcEnabled !== false && (
                      <div className="text-xs text-muted-foreground">
                        PC {photoPc > 0 ? fmt(photoPc) : "—"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:hidden divide-y divide-border/60 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                {photoRows.map((row) => {
                  const pcMatchedDifferent =
                    row.pcMatchedName &&
                    row.pcMatchedName.toLowerCase() !==
                      row.card.toLowerCase();
                  return (
                    <div key={`m-${row.key}`} className="flex gap-3 p-3">
                      <a
                        href={row.thumb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0"
                      >
                        <Image
                          src={row.thumb}
                          alt={row.card}
                          width={84}
                          height={112}
                          className="h-auto w-[84px] rounded border border-border bg-muted object-contain"
                          unoptimized
                        />
                      </a>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs font-medium text-muted-foreground">
                            {row.pos}
                          </span>
                        </div>
                        <div className="mt-0.5 font-medium leading-tight">
                          {row.card}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {row.set}
                        </div>
                        {pcMatchedDifferent && (
                          <div className="mt-1 text-xs text-amber-600">
                            PC match: {row.pcMatchedName}
                            {row.pcMatchedSet ? ` · ${row.pcMatchedSet}` : ""}
                          </div>
                        )}
                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                              Collectr
                            </div>
                            <div className="font-semibold text-emerald-600 tabular-nums">
                              {row.price > 0 ? (
                                fmt(row.price)
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                              PriceCharting
                            </div>
                            <div className="tabular-nums">
                              {row.pcLoading ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                              ) : row.pcUngraded !== undefined ? (
                                <span className="font-semibold text-emerald-600">
                                  {fmt(row.pcUngraded)}
                                </span>
                              ) : (
                                <span
                                  className="text-xs text-muted-foreground"
                                  title={row.pcError}
                                >
                                  —
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:block overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60 text-left text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2 font-medium">Pos</th>
                      <th className="px-3 py-2 font-medium">Thumbnail</th>
                      <th className="px-3 py-2 font-medium">Card</th>
                      <th className="px-3 py-2 font-medium">Set / Number</th>
                      <th className="px-3 py-2 text-right font-medium">
                        Collectr
                      </th>
                      <th className="px-3 py-2 text-right font-medium">
                        PriceCharting
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {photoRows.map((row) => (
                      <tr
                        key={row.key}
                        className="border-t border-border/60 hover:bg-muted/30"
                      >
                        <td className="px-3 py-2 align-middle font-medium text-muted-foreground">
                          {row.pos}
                        </td>
                        <td className="px-3 py-2 align-middle">
                          <a
                            href={row.thumb}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={row.thumb}
                              alt={row.card}
                              width={110}
                              height={150}
                              className="h-auto w-[110px] rounded border border-border bg-muted object-contain"
                              unoptimized
                            />
                          </a>
                        </td>
                        <td className="px-3 py-2 align-middle">
                          <div className="font-medium">{row.card}</div>
                          {row.pcMatchedName &&
                            row.pcMatchedName.toLowerCase() !==
                              row.card.toLowerCase() && (
                              <div className="mt-0.5 text-xs text-amber-600">
                                PC match: {row.pcMatchedName}
                                {row.pcMatchedSet
                                  ? ` · ${row.pcMatchedSet}`
                                  : ""}
                              </div>
                            )}
                        </td>
                        <td className="px-3 py-2 align-middle text-muted-foreground">
                          {row.set}
                        </td>
                        <td className="px-3 py-2 text-right align-middle font-semibold text-emerald-600">
                          {row.price > 0 ? (
                            fmt(row.price)
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="px-3 py-2 text-right align-middle tabular-nums">
                          {row.pcLoading ? (
                            <Loader2 className="ml-auto h-3.5 w-3.5 animate-spin text-muted-foreground" />
                          ) : row.pcUngraded !== undefined ? (
                            <span className="font-semibold text-emerald-600">
                              {fmt(row.pcUngraded)}
                            </span>
                          ) : (
                            <span
                              className="text-xs text-muted-foreground"
                              title={row.pcError}
                            >
                              —
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

function Stat({
  label,
  value,
  sub,
  emphasis,
}: {
  label: string;
  value: string;
  sub?: string;
  emphasis?: "emerald" | "muted";
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </p>
      <p
        className={
          "mt-2 text-2xl font-semibold " +
          (emphasis === "emerald"
            ? "text-emerald-600"
            : emphasis === "muted"
              ? "text-muted-foreground"
              : "")
        }
      >
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}
