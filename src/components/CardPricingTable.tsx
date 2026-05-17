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

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
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
          {cards.map((c) => (
            <tr key={c.id} className="border-t border-border/60">
              <td className="px-3 py-2 align-top">
                <div className="font-medium">{c.name}</div>
                {c.number && (
                  <div className="text-xs text-muted-foreground">
                    #{c.number}
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
          ))}
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
  );
}
