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
