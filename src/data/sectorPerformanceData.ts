// Post-IPO Performance by Sector (Pages 13-14)

export interface SectorPerformanceDetail {
  sector: string;
  annualPerf: number;
  cumulatedPerf: number;
  color: string;
  rank: number;
  icon?: string;
  highlight?: boolean;
}

export const sectorPerformanceData: SectorPerformanceDetail[] = [
  {
    sector: "FoodTech",
    annualPerf: 37.1,
    cumulatedPerf: 157.5,
    color: "#FFD700",
    rank: 1,
    icon: "🏆",
    highlight: true,
  },
  {
    sector: "Industrial performance",
    annualPerf: 2.8,
    cumulatedPerf: 8.7,
    color: "#2B57FF",
    rank: 2,
  },
  {
    sector: "Corporate services",
    annualPerf: -0.8,
    cumulatedPerf: -2.6,
    color: "#3B82F6",
    rank: 3,
  },
  {
    sector: "CleanTech and energy",
    annualPerf: -0.9,
    cumulatedPerf: -46.0,
    color: "#10B981",
    rank: 4,
  },
  {
    sector: "HealthTech",
    annualPerf: -21.1,
    cumulatedPerf: -50.9,
    color: "#EF4444",
    rank: 5,
  },
];

// Performance analysis timeline data (for line chart)
export interface SectorTimelineData {
  sector: string;
  data: { period: string; value: number }[];
  color: string;
}

export const sectorPerformanceTimeline: SectorTimelineData[] = [
  {
    sector: "CleanTech and energy",
    color: "#10B981",
    data: [
      { period: "At IPO", value: 1 },
      { period: "+1 YEAR", value: 4 },
      { period: "+2 YEARS", value: 2 },
      { period: "+3 YEARS", value: 5 },
    ],
  },
  {
    sector: "Corporate services",
    color: "#3B82F6",
    data: [
      { period: "At IPO", value: 4 },
      { period: "+1 YEAR", value: 3 },
      { period: "+2 YEARS", value: 4 },
      { period: "+3 YEARS", value: 3 },
    ],
  },
  {
    sector: "FoodTech",
    color: "#FFD700",
    data: [
      { period: "At IPO", value: 5 },
      { period: "+1 YEAR", value: 1 },
      { period: "+2 YEARS", value: 1 },
      { period: "+3 YEARS", value: 1 },
    ],
  },
  {
    sector: "HealthTech",
    color: "#EF4444",
    data: [
      { period: "At IPO", value: 3 },
      { period: "+1 YEAR", value: 5 },
      { period: "+2 YEARS", value: 5 },
      { period: "+3 YEARS", value: 4 },
    ],
  },
  {
    sector: "Industrial performance",
    color: "#2B57FF",
    data: [
      { period: "At IPO", value: 2 },
      { period: "+1 YEAR", value: 2 },
      { period: "+2 YEARS", value: 3 },
      { period: "+3 YEARS", value: 2 },
    ],
  },
];

export const sectorPerformanceContext = {
  title: "3 years stock performance Post-IPO",
  subtitle: "Best-performing sectors and technologies",
  headline: "R&D-intensive sectors remain under pressure",
  quote:
    "FoodTech leads with strong post-IPO gains, supported by clearer profitability prospects and resilient demand. In contrast, CleanTech and HealthTech face ongoing valuation pressure due to their capital intensity and longer time-to-profitability. The corporate services segment, driven by AI-related players, shows a notable rebound in year three, reflecting renewed investor confidence in scalable, data-focused models.",
  analysis: {
    quote:
      "FoodTech leads with strong post-IPO gains, supported by clearer profitability prospects and resilient demand. In contrast, CleanTech and HealthTech face ongoing valuation pressure due to their capital intensity and longer time-to-profitability. The corporate services segment, driven by AI-related players, shows a notable rebound in year three, reflecting renewed investor confidence in scalable, data-focused models.",
    author: "Edouard Thibaut",
    role: "COO",
    imageSrc:
      "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a70929472f15dbc335_EDOUARD_THIBAUT-p-800.avif",
  },
};
