export interface DataPoint {
  period: string;
  ventureCapital: number;
  privateEquity: number;
  europeanListed: number;
}

export interface MetricConfig {
  id: string;
  name: string;
  color: string;
  dataKey: keyof Omit<DataPoint, "period">;
}

export const revenueMultipleData: DataPoint[] = [
  {
    period: "S1 2020",
    ventureCapital: 9.22,
    privateEquity: 3.03,
    europeanListed: 3.49,
  },
  {
    period: "S2 2020",
    ventureCapital: 8.19,
    privateEquity: 3.23,
    europeanListed: 5.27,
  },
  {
    period: "S1 2021",
    ventureCapital: 8.54,
    privateEquity: 3.2,
    europeanListed: 6.67,
  },
  {
    period: "S2 2021",
    ventureCapital: 9.0,
    privateEquity: 3.75,
    europeanListed: 7.15,
  },
  {
    period: "S1 2022",
    ventureCapital: 9.58,
    privateEquity: 4.35,
    europeanListed: 3.43,
  },
  {
    period: "S2 2022",
    ventureCapital: 9.2,
    privateEquity: 3.59,
    europeanListed: 2.7,
  },
  {
    period: "S1 2023",
    ventureCapital: 6.82,
    privateEquity: 3.28,
    europeanListed: 2.39,
  },
  {
    period: "S2 2023",
    ventureCapital: 6.91,
    privateEquity: 2.88,
    europeanListed: 2.28,
  },
  {
    period: "S1 2024",
    ventureCapital: 7.53,
    privateEquity: 2.7,
    europeanListed: 2.26,
  },
  {
    period: "S2 2024",
    ventureCapital: 7.88,
    privateEquity: 2.32,
    europeanListed: 2.12,
  },
  {
    period: "S1 2025",
    ventureCapital: 7.33,
    privateEquity: 2.18,
    europeanListed: 2.35,
  },
];

export const metricConfigs: MetricConfig[] = [
  {
    id: "ventureCapital",
    name: "Venture Capital (Median Revenue Multiple)",
    color: "#3b82f6",
    dataKey: "ventureCapital",
  },
  {
    id: "privateEquity",
    name: "Private Equity (Median Revenue Multiple)",
    color: "#22c55e",
    dataKey: "privateEquity",
  },
  {
    id: "europeanListed",
    name: "European Listed Tech Segment",
    color: "#f97316",
    dataKey: "europeanListed",
  },
];
