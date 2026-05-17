export type GradeKey = "ungraded" | "psa7" | "psa8" | "psa9" | "psa10";

export const GRADE_KEYS: GradeKey[] = [
  "ungraded",
  "psa7",
  "psa8",
  "psa9",
  "psa10",
];

export const GRADE_LABEL: Record<GradeKey, string> = {
  ungraded: "Ungraded",
  psa7: "PSA 7",
  psa8: "PSA 8",
  psa9: "PSA 9",
  psa10: "PSA 10",
};

export type PriceSet = Partial<Record<GradeKey, number>>;

export type ParsedCard = {
  id: string;
  name: string;
  set?: string;
  number?: string;
  quantity: number;
  collectr: PriceSet;
};

export type EnrichedCard = ParsedCard & {
  priceCharting?: PriceSet;
  priceChartingMatchedName?: string;
  priceChartingMatchedSet?: string;
  priceChartingProductId?: string;
  priceChartingError?: string;
};

export type PricingResponse = {
  priceChartingEnabled: boolean;
  cards: EnrichedCard[];
};
