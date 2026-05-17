import type { GradeKey, ParsedCard, PriceSet } from "./types";

const NAME_KEYS = ["name", "card", "card name", "title", "card title"];
const SET_KEYS = ["set", "set name", "series", "expansion"];
const NUMBER_KEYS = ["number", "card number", "no", "no.", "#"];
const QTY_KEYS = ["quantity", "qty", "count"];
const CONDITION_KEYS = ["condition", "grade", "grading", "grader"];

const UNGRADED_PRICE_KEYS = [
  "market price",
  "market value",
  "value",
  "price",
  "current price",
  "ungraded price",
  "raw price",
  "estimated value",
];

const GRADED_PRICE_KEYS: { key: GradeKey; matches: string[] }[] = [
  { key: "psa7", matches: ["psa 7", "psa7"] },
  { key: "psa8", matches: ["psa 8", "psa8"] },
  { key: "psa9", matches: ["psa 9", "psa9"] },
  { key: "psa10", matches: ["psa 10", "psa10", "gem mint"] },
];

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        cur += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      out.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parsePrice(raw: string | undefined): number | undefined {
  if (!raw) return undefined;
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (!cleaned) return undefined;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : undefined;
}

function findIndex(headers: string[], candidates: string[]): number {
  const lower = headers.map((h) => h.toLowerCase());
  for (const c of candidates) {
    const i = lower.indexOf(c);
    if (i >= 0) return i;
  }
  return -1;
}

function findContainsIndex(headers: string[], needles: string[]): number {
  const lower = headers.map((h) => h.toLowerCase());
  for (let i = 0; i < lower.length; i++) {
    if (needles.some((n) => lower[i].includes(n))) return i;
  }
  return -1;
}

function classifyCondition(raw: string | undefined): GradeKey {
  if (!raw) return "ungraded";
  const v = raw.toLowerCase();
  if (v.includes("psa 10") || v.includes("psa10") || v.includes("gem mint")) {
    return "psa10";
  }
  if (v.includes("psa 9") || v.includes("psa9")) return "psa9";
  if (v.includes("psa 8") || v.includes("psa8")) return "psa8";
  if (v.includes("psa 7") || v.includes("psa7")) return "psa7";
  return "ungraded";
}

export type CsvParseResult = {
  cards: ParsedCard[];
  warnings: string[];
};

export function parseCollectrCsv(text: string): CsvParseResult {
  const warnings: string[] = [];
  const normalized = text.replace(/^﻿/, "");
  const lines = normalized.split(/\r?\n/).filter((l) => l.trim().length > 0);

  if (lines.length === 0) {
    return { cards: [], warnings: ["File is empty"] };
  }

  const headers = parseCsvLine(lines[0]);
  const nameIdx = findIndex(headers, NAME_KEYS);
  if (nameIdx < 0) {
    return {
      cards: [],
      warnings: [
        "Could not find a card-name column. Expected one of: " +
          NAME_KEYS.join(", "),
      ],
    };
  }

  const setIdx = findIndex(headers, SET_KEYS);
  const numberIdx = findIndex(headers, NUMBER_KEYS);
  const qtyIdx = findIndex(headers, QTY_KEYS);
  const conditionIdx = findIndex(headers, CONDITION_KEYS);

  const ungradedIdx = findContainsIndex(headers, UNGRADED_PRICE_KEYS);
  const gradedPriceCols = GRADED_PRICE_KEYS.map((g) => ({
    key: g.key,
    idx: findContainsIndex(headers, g.matches),
  })).filter((g) => g.idx >= 0);

  if (ungradedIdx < 0 && gradedPriceCols.length === 0) {
    warnings.push(
      "No price column detected in the CSV. Card list will load but Collectr prices will be empty."
    );
  }

  const cards: ParsedCard[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    const name = cols[nameIdx]?.trim();
    if (!name) continue;

    const qty = qtyIdx >= 0 ? Number(cols[qtyIdx]) || 1 : 1;
    const set = setIdx >= 0 ? cols[setIdx]?.trim() : undefined;
    const number = numberIdx >= 0 ? cols[numberIdx]?.trim() : undefined;
    const conditionGrade = classifyCondition(
      conditionIdx >= 0 ? cols[conditionIdx] : undefined
    );

    const collectr: PriceSet = {};
    const ungradedPrice =
      ungradedIdx >= 0 ? parsePrice(cols[ungradedIdx]) : undefined;
    if (ungradedPrice !== undefined) {
      collectr[conditionGrade] = ungradedPrice;
    }
    for (const { key, idx } of gradedPriceCols) {
      const p = parsePrice(cols[idx]);
      if (p !== undefined) collectr[key] = p;
    }

    cards.push({
      id: `${i}-${name}`.toLowerCase().replace(/\s+/g, "-").slice(0, 80),
      name,
      set: set || undefined,
      number: number || undefined,
      quantity: qty > 0 ? qty : 1,
      collectr,
    });
  }

  if (cards.length === 0) {
    warnings.push("No cards parsed from the file.");
  }

  return { cards, warnings };
}
