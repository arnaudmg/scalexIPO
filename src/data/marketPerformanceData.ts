// Market performance trends from 2023 to mid-2025 (Page 15)

export interface MarketPerformanceSector {
  sector: string;
  y2023: number;
  y2024: number;
  s1_2025: number;
}

export interface MarketPerformanceStats {
  year: string;
  medianPerf: number;
  averagePerf: number;
}

export const marketPerformanceData: MarketPerformanceSector[] = [
  {
    sector: "CleanTech and energy",
    y2023: -24,
    y2024: -3,
    s1_2025: -13,
  },
  {
    sector: "Corporate services",
    y2023: 17,
    y2024: 86,
    s1_2025: 12,
  },
  {
    sector: "Customer experience",
    y2023: 6,
    y2024: 18,
    s1_2025: 32,
  },
  {
    sector: "Fintech",
    y2023: 6,
    y2024: 46,
    s1_2025: -3,
  },
  {
    sector: "FoodTech",
    y2023: -19,
    y2024: 1,
    s1_2025: 2,
  },
  {
    sector: "HealthTech",
    y2023: 11,
    y2024: 3,
    s1_2025: 10,
  },
  {
    sector: "Industrial performance",
    y2023: 64,
    y2024: -2,
    s1_2025: 32,
  },
  {
    sector: "Leisure and lifestyle",
    y2023: 32,
    y2024: 33,
    s1_2025: 9,
  },
];

export const marketPerformanceStats: MarketPerformanceStats[] = [
  {
    year: "2022",
    medianPerf: -50,
    averagePerf: -44,
  },
  {
    year: "2023",
    medianPerf: 4,
    averagePerf: 8,
  },
  {
    year: "2024",
    medianPerf: 2,
    averagePerf: 23,
  },
  {
    year: "S1 2025",
    medianPerf: -1,
    averagePerf: 12,
  },
];

export const marketPerformanceContext = {
  title: "2025 Barometer",
  subtitle: "Market performance trends from 2023 to mid-2025",
  methodology:
    "In this section, we analyse the evolution of market capitalisation within our sample, comparing 2023, 2024, and S1 2025 results to highlight shifts in market dynamics and investor sentiment.",
  insight: "Gradual recovery after the 2022 market collapse",
  quote:
    "The recovery observed in 2024 and early 2025 has been largely driven by AI-impacted sectors, particularly corporate services, customer experience, and fintech, which recorded strong market gains as investors shifted toward data and productivity enablers. These segments benefited from renewed enthusiasm around productivity-enhancing technologies, driving higher revenue multiples and healthier post-IPO trajectories.",
  analysis: {
    quote: "The recovery in 2024 and early 2025 has been largely driven by AI-impacted sectors, particularly corporate services, customer experience and fintech, which recorded strong market gains as investors shifted toward data and productivity enablers. These segments benefited from renewed optimism around AI adoption.",
    author: "Edouard Thibaut",
    role: "COO",
    imageSrc: "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a70929472f15dbc335_EDOUARD_THIBAUT-p-800.avif",
  },
};
