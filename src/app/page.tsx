import { redirect } from "next/navigation";

export type PeriodFilter = "all" | "2years" | "5years";

export default function Home() {
  // Redirect to ScaleX Invest website
  redirect("https://www.scalex-invest.com/");
}
