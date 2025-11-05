// Valuation multiples data from 2024 Barometer (Page 16)

export interface ValuationMultipleSector {
  sector: string;
  y2023: number;
  y2024: number;
  s1_2025: number;
  change2024?: number; // Percentage change from 2023 to 2024
  change2025?: number; // Percentage change from 2024 to S1 2025
}

export const valuationMultiplesData: ValuationMultipleSector[] = [
  {
    sector: "CleanTech and energy",
    y2023: 2.3,
    y2024: 1.2,
    s1_2025: 1.9,
    change2024: -46,
  },
  {
    sector: "Corporate services",
    y2023: 2.6,
    y2024: 2.9,
    s1_2025: 3.8,
    change2025: 31,
  },
  {
    sector: "Customer experience",
    y2023: 1.5,
    y2024: 0.8,
    s1_2025: 1.1,
  },
  {
    sector: "Fintech",
    y2023: 1.7,
    y2024: 2.5,
    s1_2025: 2.3,
    change2024: 44,
  },
  {
    sector: "FoodTech",
    y2023: 0.6,
    y2024: 0.7,
    s1_2025: 0.8,
  },
  {
    sector: "HealthTech",
    y2023: 4.1,
    y2024: 2.1,
    s1_2025: 2.2,
    change2024: -49,
  },
  {
    sector: "Industrial performance",
    y2023: 2.3,
    y2024: 2.6,
    s1_2025: 2.7,
  },
  {
    sector: "Leisure and lifestyle",
    y2023: 1.4,
    y2024: 1.3,
    s1_2025: 1.4,
  },
];

export const valuationMultiplesContext = {
  title: "2025 Barometer",
  subtitle: "Valuation multiples stabilise as AI optimism strengthens",
  methodology:
    "In this section, we analyse the evolution of revenue multiples within our sample, comparing 2023, 2024, and S1 2025 results to highlight changes in valuation levels, growth expectations, and investor sentiment.",
  insight: "AI adoption boosts revenue multiples across tech sectors",
  analysis: {
    quote:
      "The rebound in valuation multiples is driven by AI-related sectors, while CleanTech continues to face valuation pressure amid political uncertainty and shifting policy priorities — particularly in the US, where reduced support for climate initiatives has dampened investor sentiment. This contrast highlights how AI optimism and climate policy headwinds are reshaping valuation trends across the European tech landscape.",
    author: "Edouard Thibaut",
    role: "COO",
    imageSrc:
      "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a70929472f15dbc335_EDOUARD_THIBAUT-p-800.avif",
  },
};
