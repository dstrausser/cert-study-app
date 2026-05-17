import { GRADE_KEYS, GRADE_LABEL, type EnrichedCard } from "./types";

function csvCell(v: string | number | undefined): string {
  if (v === undefined || v === null) return "";
  const s = String(v);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function row(values: (string | number | undefined)[]): string {
  return values.map(csvCell).join(",");
}

export function buildCollectionCsv(
  cards: EnrichedCard[],
  pcEnabled: boolean
): string {
  const header: string[] = ["Card", "Set", "Number", "Quantity"];
  for (const g of GRADE_KEYS) header.push(`Collectr ${GRADE_LABEL[g]}`);
  for (const g of GRADE_KEYS) header.push(`Collectr ${GRADE_LABEL[g]} Total`);
  if (pcEnabled) {
    for (const g of GRADE_KEYS) header.push(`PriceCharting ${GRADE_LABEL[g]}`);
    for (const g of GRADE_KEYS)
      header.push(`PriceCharting ${GRADE_LABEL[g]} Total`);
    header.push("PC Matched Name", "PC Matched Set", "PC Product ID", "PC Error");
  }

  const lines: string[] = [row(header)];
  for (const c of cards) {
    const cells: (string | number | undefined)[] = [
      c.name,
      c.set,
      c.number,
      c.quantity,
    ];
    for (const g of GRADE_KEYS) cells.push(c.collectr[g]);
    for (const g of GRADE_KEYS) {
      const v = c.collectr[g];
      cells.push(v === undefined ? undefined : +(v * c.quantity).toFixed(2));
    }
    if (pcEnabled) {
      for (const g of GRADE_KEYS) cells.push(c.priceCharting?.[g]);
      for (const g of GRADE_KEYS) {
        const v = c.priceCharting?.[g];
        cells.push(v === undefined ? undefined : +(v * c.quantity).toFixed(2));
      }
      cells.push(
        c.priceChartingMatchedName,
        c.priceChartingMatchedSet,
        c.priceChartingProductId,
        c.priceChartingError
      );
    }
    lines.push(row(cells));
  }

  const totals: (string | number | undefined)[] = ["TOTAL", "", "", ""];
  for (let i = 0; i < GRADE_KEYS.length; i++) totals.push(undefined);
  for (const g of GRADE_KEYS) {
    const sum = cards.reduce((s, c) => {
      const v = c.collectr[g];
      return v === undefined ? s : s + v * c.quantity;
    }, 0);
    totals.push(sum > 0 ? +sum.toFixed(2) : undefined);
  }
  if (pcEnabled) {
    for (let i = 0; i < GRADE_KEYS.length; i++) totals.push(undefined);
    for (const g of GRADE_KEYS) {
      const sum = cards.reduce((s, c) => {
        const v = c.priceCharting?.[g];
        return v === undefined ? s : s + v * c.quantity;
      }, 0);
      totals.push(sum > 0 ? +sum.toFixed(2) : undefined);
    }
    totals.push("", "", "", "");
  }
  lines.push(row(totals));

  return lines.join("\n");
}

export function downloadCsv(filename: string, contents: string): void {
  const blob = new Blob([contents], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
