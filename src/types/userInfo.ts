export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  organisationType: string;
}

export const organisationTypes = [
  "Venture capital funds",
  "Private Equity funds",
  "Venture debt funds",
  "Corporate Venture funds",
  "Bankers enterprise",
  "Risk manager bank",
  "Head of Treasury / Participation Corporate",
  "Accelerators",
  "Public Investor",
  "Procurement Corporate",
  "Crowdfunding",
  "Innovation Corporate",
  "Private Banker",
  "Insurance - Asset Manager",
  "Other",
  "Startup or SME C-Level",
] as const;
