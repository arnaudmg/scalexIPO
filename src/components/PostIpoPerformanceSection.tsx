"use client";

import AverageVsMedianChart from "./AverageVsMedianChart";
import PerformanceByExchangeChart from "./PerformanceByExchangeChart";
import PerformanceByRevenueChart from "./PerformanceByRevenueChart";

export default function PostIpoPerformanceSection() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-3">
          3 years stock performance Post-IPO
        </h2>
        <p className="text-xl text-blue-100">
          The sample&apos;s overall disappointing performance masks significant
          variations across different sub-segments
        </p>
      </div>

      {/* Average vs Median */}
      <AverageVsMedianChart />

      {/* Performance by Exchange */}
      <PerformanceByExchangeChart />

      {/* Performance by Revenue */}
      <PerformanceByRevenueChart />
    </div>
  );
}
