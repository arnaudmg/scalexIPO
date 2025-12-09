export enum MarketType {
  VentureCapital = "ventureCapital",
  PrivateEquity = "privateEquity",
  PublicMarkets = "publicMarkets",
}

export enum Stage {
  EarlyStage = "earlyStage",
  LateStage = "lateStage",
}

export enum InvestmentType {
  Growth = "growth",
  Buyout = "buyout",
}

export enum Sector {
  AI = "ai",
  Climate = "climate",
  ESante = "eSante",
  Fintech = "fintech",
}

export type PeriodFilter = "all" | "2years" | "5years";

export interface AdvancedDataPoint {
  period: string;
  [key: string]: number | string; // Dynamic keys for sector values
}

export interface FilterState {
  marketType: MarketType;
  stage: Stage;
  investmentType: InvestmentType;
  selectedSectors: Set<Sector>;
  showAverage: boolean;
}

export const SECTOR_CONFIGS = {
  [Sector.AI]: { name: "AI", color: "#3b82f6" },
  [Sector.Climate]: { name: "Climate", color: "#22c55e" },
  [Sector.ESante]: { name: "Healthtech", color: "#ef4444" },
  [Sector.Fintech]: { name: "Fintech", color: "#f97316" },
};

export const AVERAGE_CONFIG = {
  name: "Average",
  color: "#6b7280",
};

export const INDEX_CONFIGS = {
  eurotech: {
    name: "Eurotech Index",
    color: "#6b7280",
    description: "European Technology Companies Median Revenue Multiple",
  },
  ventureCapital: {
    name: "Venture Capital",
    color: "#2563eb",
    description: "Venture Capital Median Revenue Multiple",
  },
  earlyStageVC: {
    name: "Early-stage VC",
    color: "#60a5fa",
    description: "Early-stage VC Median Revenue Multiple",
  },
  lateStageVC: {
    name: "Late-stage VC",
    color: "#9ca3af",
    description: "Late-stage VC Median Revenue Multiple",
  },
  privateEquity: {
    name: "Private Equity",
    color: "#059669",
    description: "Private Equity Median Revenue Multiple",
  },
  growthEquity: {
    name: "Growth Equity",
    color: "#10b981",
    description: "Growth Equity Median Revenue Multiple",
  },
  buyout: {
    name: "Buyout",
    color: "#9ca3af",
    description: "Buyout Median Revenue Multiple",
  },
  listed: {
    name: "European Listed Tech Segment",
    color: "#f97316",
    description: "European Listed Tech Segment Median Revenue Multiple",
  },
};
