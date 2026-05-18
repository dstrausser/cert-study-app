"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Camera, ImageIcon, Loader2 } from "lucide-react";
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

const fmt = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

function buildParsedCard(row: Row): ParsedCard {
  return {
    id: row.key,
    name: row.card,
    set: row.set,
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
          pcLoading: true,
        }))
      ),
    [photos]
  );

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [pcEnabled, setPcEnabled] = useState<boolean | null>(null);
  const [progress, setProgress] = useState<{ done: number; total: number }>({
    done: 0,
    total: initialRows.length,
  });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < initialRows.length; i += PC_BATCH_SIZE) {
        if (cancelled) return;
        const batch = initialRows.slice(i, i + PC_BATCH_SIZE);
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
          if (cancelled) return;
          setRows((prev) => {
            const copy = [...prev];
            const message = e instanceof Error ? e.message : "request failed";
            for (const r of batch) {
              const idx = copy.findIndex((x) => x.key === r.key);
              if (idx >= 0) {
                copy[idx] = { ...copy[idx], pcLoading: false, pcError: message };
              }
            }
            return copy;
          });
          setProgress((p) => ({ ...p, done: Math.min(i + batch.length, initialRows.length) }));
          continue;
        }

        if (cancelled || !data) return;
        if (pcEnabled === null) setPcEnabled(data.priceChartingEnabled);

        setRows((prev) => {
          const copy = [...prev];
          for (let j = 0; j < batch.length; j++) {
            const r = batch[j];
            const enriched = data!.cards[j] as EnrichedCard | undefined;
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
        setProgress((p) => ({ ...p, done: Math.min(i + batch.length, initialRows.length) }));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [initialRows, pcEnabled]);

  const totalCollectr = rows.reduce((s, r) => s + (r.price || 0), 0);
  const totalPc = rows.reduce((s, r) => s + (r.pcUngraded ?? 0), 0);
  const pcLoadedCount = rows.filter((r) => !r.pcLoading).length;

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
              : pcLoadedCount === 0
                ? "Loading…"
                : fmt(totalPc)
          }
          emphasis={pcEnabled === false ? "muted" : "emerald"}
          sub={
            pcEnabled !== false && pcLoadedCount < rows.length
              ? `${pcLoadedCount}/${rows.length} priced`
              : undefined
          }
        />
      </section>

      {pcEnabled !== false && progress.done < progress.total && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Pricing from PriceCharting… {progress.done}/{progress.total}
        </div>
      )}

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
