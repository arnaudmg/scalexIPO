export interface SelectionCriterion {
  id: string;
  badge: string;
  badgeType: "number" | "flag" | "date" | "currency";
  text: string;
}

export interface SectorData {
  name: string;
  count: number;
  color: string;
}

export const selectionCriteria: SelectionCriterion[] = [
  {
    id: "ipos",
    badge: "119",
    badgeType: "number",
    text: "IPOs in the sample between 2015 and 2023",
  },
  {
    id: "geography",
    badge: "🇪🇺",
    badgeType: "flag",
    text: "Tech companies headquartered in Greater Europe",
  },
  {
    id: "marketcap",
    badge: "€400m",
    badgeType: "currency",
    text: "Market Capitalisation > €400m at IPO",
  },
];

export const sectorData: SectorData[] = [
  {
    name: "Customer Experience",
    count: 32,
    color: "#2B57FF",
  },
  {
    name: "CleanTech and energy",
    count: 23,
    color: "#5B7CFF",
  },
  {
    name: "FinTech",
    count: 16,
    color: "#3D65FF",
  },
  {
    name: "Industrial performance",
    count: 13,
    color: "#7B94FF",
  },
  {
    name: "Corporate services",
    count: 15,
    color: "#A4B5FF",
  },
  {
    name: "Leisure and lifestyle",
    count: 10,
    color: "#6B87FF",
  },
  {
    name: "Health Tech",
    count: 9,
    color: "#1E40AF",
  },
  {
    name: "FoodTech",
    count: 4,
    color: "#93A7FF",
  },
];
