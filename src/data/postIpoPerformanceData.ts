// Performance timeline data
export interface PerformanceTimelinePoint {
  period: string;
  average: number;
  median: number;
}

export const performanceTimeline: PerformanceTimelinePoint[] = [
  { period: "IPO", average: 0, median: 0 },
  { period: "+1 YEAR", average: -22, median: -26 },
  { period: "+2 YEARS", average: -29, median: -43 },
  { period: "+3 YEARS", average: -15, median: -38 },
];

// Summary statistics
export const performanceSummary = {
  average: {
    annual: -5.3,
    cumulated: -15.0,
  },
  median: {
    annual: -14.6,
    cumulated: -38.0,
  },
};

export const performanceContext = {
  analysis: {
    quote: "The underperformance is largely driven by less mature companies, which have struggled to sustain investor confidence after listing. Most European tech IPOs continue to trade below their offering price three years after going public, reflecting caution from investors toward unprofitable issuers. The results also point to a context of tighter monetary conditions and heightened scrutiny of financial fundamentals.",
    author: "Edouard Thibaut",
    role: "COO",
    imageSrc: "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a70929472f15dbc335_EDOUARD_THIBAUT-p-800.avif",
  },
};

// Performance by Exchange
export interface ExchangePerformance {
  exchange: string;
  country: string;
  flag: string;
  annualPerformance: number;
}

export const exchangePerformanceContext = {
  analysis: {
    quote: "The data suggests that US-listed IPOs face stronger valuation corrections, reflecting initial pricing levels that are often difficult to sustain after listing. In contrast, companies going public on European exchanges tend to show more stable mid-term performance, indicating a more disciplined pricing approach by European underwriters and investors and resulting in healthier post-IPO market dynamics.",
    author: "Sebastien Paillet",
    role: "CEO",
    imageSrc: "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a7bc357d00df854f89_SEBASTIEN_PAILLET-p-800.avif",
  },
};

export const exchangePerformance: ExchangePerformance[] = [
  {
    exchange: "DEUTSCHE BORSE",
    country: "Germany",
    flag: "🇪🇺",
    annualPerformance: 14,
  },
  {
    exchange: "SIX GROUP",
    country: "Switzerland",
    flag: "🇨🇭",
    annualPerformance: 10,
  },
  {
    exchange: "NASDAQ NORDIC",
    country: "Nordic",
    flag: "🇪🇺",
    annualPerformance: -4,
  },
  {
    exchange: "LONDON SE",
    country: "United Kingdom",
    flag: "🇬🇧",
    annualPerformance: -9,
  },
  {
    exchange: "EURONEXT",
    country: "Pan-European",
    flag: "🇪🇺",
    annualPerformance: -11,
  },
  {
    exchange: "NASDAQ",
    country: "United States",
    flag: "🇺🇸",
    annualPerformance: -15,
  },
  {
    exchange: "NEW YORK SE",
    country: "United States",
    flag: "🇺🇸",
    annualPerformance: -17,
  },
];

// Performance by Revenue Group
export interface RevenueGroupPerformance {
  group: string;
  label: string;
  data: { period: string; value: number }[];
  annualPerformance: number;
  cumulatedPerformance: number;
  color: string;
  highlighted?: boolean;
}

export const revenueGroupContext = {
  analysis: {
    quote: "Larger companies with revenues above €1 billion benefit from broader analyst coverage and stronger investor confidence, supporting more stable share prices over time. Smaller issuers, by contrast, often face lower visibility and valuation pressure, making it harder to sustain momentum after listing.",
    author: "Sebastien Paillet",
    role: "CEO",
    imageSrc: "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a7bc357d00df854f89_SEBASTIEN_PAILLET-p-800.avif",
  },
};

export const revenueGroupPerformance: RevenueGroupPerformance[] = [
  {
    group: ">2bn€",
    label: "> 2 bn€",
    annualPerformance: 7.2,
    cumulatedPerformance: 23.0,
    color: "#1E293B",
    highlighted: true,
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -8 },
      { period: "+2 YEAR", value: 4 },
      { period: "+3 YEAR", value: 24 },
    ],
  },
  {
    group: "1-2bn€",
    label: "1 - 2 Bn€",
    annualPerformance: 4.9,
    cumulatedPerformance: 15.3,
    color: "#2B57FF",
    highlighted: true,
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -40 },
      { period: "+2 YEAR", value: -31 },
      { period: "+3 YEAR", value: 22 },
    ],
  },
  {
    group: "500-1000m€",
    label: "500 - 1000m€",
    annualPerformance: -1.9,
    cumulatedPerformance: -5.5,
    color: "#3B82F6",
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -12 },
      { period: "+2 YEAR", value: -32 },
      { period: "+3 YEAR", value: 40 },
    ],
  },
  {
    group: "200-500m€",
    label: "200 - 500 M€",
    annualPerformance: -5.8,
    cumulatedPerformance: -21.6,
    color: "#60A5FA",
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -22 },
      { period: "+2 YEAR", value: -21 },
      { period: "+3 YEAR", value: 39 },
    ],
  },
  {
    group: "100-200m€",
    label: "100 - 200 m€",
    annualPerformance: -19.3,
    cumulatedPerformance: -47.4,
    color: "#93C5FD",
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -28 },
      { period: "+2 YEAR", value: -50 },
      { period: "+3 YEAR", value: -4 },
    ],
  },
  {
    group: "<100m€",
    label: "< 100 m€",
    annualPerformance: -30.3,
    cumulatedPerformance: -66.2,
    color: "#DBEAFE",
    data: [
      { period: "IPO", value: 0 },
      { period: "+1 YEAR", value: -37 },
      { period: "+2 YEAR", value: -58 },
      { period: "+3 YEAR", value: 10 },
    ],
  },
];
