"use client";

import {
  GRADE_KEYS,
  GRADE_LABEL,
  type EnrichedCard,
  type GradeKey,
  type PriceSet,
} from "@/lib/pricing/types";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function priceCell(p: PriceSet | undefined, grade: GradeKey, qty: number) {
  const unit = p?.[grade];
  if (unit === undefined) {
    return <span className="text-muted-foreground">—</span>;
  }
  return (
    <div className="flex flex-col items-end">
      <span className="font-medium tabular-nums">{fmt.format(unit)}</span>
      {qty > 1 && (
        <span className="text-xs text-muted-foreground tabular-nums">
          × {qty} = {fmt.format(unit * qty)}
        </span>
      )}
    </div>
  );
}

function totalFor(
  cards: EnrichedCard[],
  source: "collectr" | "priceCharting",
  grade: GradeKey
): number {
  return cards.reduce((sum, c) => {
    const p = source === "collectr" ? c.collectr : c.priceCharting;
    const v = p?.[grade];
    return v === undefined ? sum : sum + v * c.quantity;
  }, 0);
}

export default function CardPricingTable({
  cards,
  showPriceCharting,
}: {
  cards: EnrichedCard[];
  showPriceCharting: boolean;
}) {
  const sources: { key: "collectr" | "priceCharting"; label: string }[] = [
    { key: "collectr", label: "Collectr" },
  ];
  if (showPriceCharting) {
    sources.push({ key: "priceCharting", label: "PriceCharting" });
  }

  const grandTotals = sources.map((s) => ({
    key: s.key,
    label: s.label,
    perGrade: GRADE_KEYS.map((g) => ({
      grade: g,
      total: totalFor(cards, s.key, g),
    })),
  }));

  return (
    <>
      <div className="md:hidden space-y-3">
        {cards.map((c) => {
          const pcMatchedDifferent =
            showPriceCharting &&
            c.priceChartingMatchedName &&
            c.priceChartingMatchedName.toLowerCase() !== c.name.toLowerCase();
          return (
            <div
              key={`m-${c.id}`}
              className="rounded-lg border border-border bg-card p-3 text-sm"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{c.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {c.set ?? "—"}
                    {c.number ? ` · #${c.number}` : ""}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs tabular-nums">
                  ×{c.quantity}
                </span>
              </div>
              {pcMatchedDifferent && (
                <div className="mt-1 text-xs text-amber-600">
                  PC match: {c.priceChartingMatchedName}
                  {c.priceChartingMatchedSet
                    ? ` · ${c.priceChartingMatchedSet}`
                    : ""}
                </div>
              )}
              {showPriceCharting && c.priceChartingError && (
                <div className="mt-1 text-xs text-destructive">
                  PC: {c.priceChartingError}
                </div>
              )}
              <div className="mt-2 space-y-2">
                {sources.map((s) => (
                  <div key={s.key}>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 grid grid-cols-5 gap-1">
                      {GRADE_KEYS.map((g) => {
                        const unit =
                          s.key === "collectr"
                            ? c.collectr[g]
                            : c.priceCharting?.[g];
                        return (
                          <div
                            key={`${c.id}-${s.key}-${g}`}
                            className="rounded bg-muted/50 px-1 py-1 text-center"
                          >
                            <div className="text-[9px] uppercase text-muted-foreground">
                              {GRADE_LABEL[g]}
                            </div>
                            <div className="text-xs font-semibold tabular-nums">
                              {unit !== undefined ? (
                                fmt.format(unit)
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-lg border-2 border-border bg-muted/40 p-3 text-sm">
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
            Totals
          </div>
          <div className="mt-2 space-y-2">
            {grandTotals.map((s) => (
              <div key={`total-${s.key}`}>
                <div className="text-xs font-semibold">{s.label}</div>
                <div className="mt-1 grid grid-cols-5 gap-1">
                  {s.perGrade.map(({ grade, total }) => (
                    <div
                      key={`total-${s.key}-${grade}`}
                      className="rounded bg-card px-1 py-1 text-center"
                    >
                      <div className="text-[9px] uppercase text-muted-foreground">
                        {GRADE_LABEL[grade]}
                      </div>
                      <div className="text-xs font-semibold tabular-nums">
                        {total > 0 ? (
                          fmt.format(total)
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-sm">
        <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
          <tr>
            <th rowSpan={2} className="px-3 py-2 text-left">
              Card
            </th>
            <th rowSpan={2} className="px-3 py-2 text-left">
              Set
            </th>
            <th rowSpan={2} className="px-3 py-2 text-right">
              Qty
            </th>
            {sources.map((s) => (
              <th
                key={s.key}
                colSpan={GRADE_KEYS.length}
                className="border-l border-border/70 px-3 py-2 text-center"
              >
                {s.label}
              </th>
            ))}
          </tr>
          <tr>
            {sources.flatMap((s) =>
              GRADE_KEYS.map((g, gi) => (
                <th
                  key={`${s.key}-${g}`}
                  className={
                    "px-3 py-1.5 text-right font-medium normal-case " +
                    (gi === 0 ? "border-l border-border/70" : "")
                  }
                >
                  {GRADE_LABEL[g]}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {cards.map((c) => {
            const pcMatchedDifferent =
              showPriceCharting &&
              c.priceChartingMatchedName &&
              c.priceChartingMatchedName.toLowerCase() !== c.name.toLowerCase();
            return (
            <tr key={c.id} className="border-t border-border/60">
              <td className="px-3 py-2 align-top">
                <div className="font-medium">{c.name}</div>
                {c.number && (
                  <div className="text-xs text-muted-foreground">
                    #{c.number}
                  </div>
                )}
                {pcMatchedDifferent && (
                  <div className="mt-1 text-xs text-amber-600">
                    PC match: {c.priceChartingMatchedName}
                    {c.priceChartingMatchedSet
                      ? ` · ${c.priceChartingMatchedSet}`
                      : ""}
                  </div>
                )}
                {showPriceCharting && c.priceChartingError && (
                  <div className="mt-1 text-xs text-destructive">
                    PC: {c.priceChartingError}
                  </div>
                )}
              </td>
              <td className="px-3 py-2 align-top text-muted-foreground">
                {c.set ?? "—"}
              </td>
              <td className="px-3 py-2 text-right align-top tabular-nums">
                {c.quantity}
              </td>
              {sources.flatMap((s) =>
                GRADE_KEYS.map((g, gi) => (
                  <td
                    key={`${c.id}-${s.key}-${g}`}
                    className={
                      "px-3 py-2 text-right align-top " +
                      (gi === 0 ? "border-l border-border/70" : "")
                    }
                  >
                    {priceCell(
                      s.key === "collectr" ? c.collectr : c.priceCharting,
                      g,
                      c.quantity
                    )}
                  </td>
                ))
              )}
            </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-border bg-muted/60 font-semibold">
            <td colSpan={3} className="px-3 py-2 text-right">
              Totals
            </td>
            {sources.flatMap((s) =>
              GRADE_KEYS.map((g, gi) => {
                const total = totalFor(cards, s.key, g);
                return (
                  <td
                    key={`total-${s.key}-${g}`}
                    className={
                      "px-3 py-2 text-right tabular-nums " +
                      (gi === 0 ? "border-l border-border/70" : "")
                    }
                  >
                    {total > 0 ? (
                      fmt.format(total)
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                );
              })
            )}
          </tr>
        </tfoot>
      </table>
      </div>
    </>
  );
}
