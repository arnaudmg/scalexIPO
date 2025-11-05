"use client";

import {
  marketPerformanceData,
  marketPerformanceStats,
  marketPerformanceContext,
} from "@/data/marketPerformanceData";

export default function MarketPerformanceTable() {
  // Helper function to get cell color based on performance value
  const getPerformanceColor = (value: number) => {
    if (value >= 50) return "bg-blue-600 text-white";
    if (value >= 30) return "bg-blue-400 text-white";
    if (value >= 10) return "bg-blue-200 text-blue-900";
    if (value >= 0) return "bg-blue-100 text-blue-800";
    if (value >= -10) return "bg-red-100 text-red-800";
    if (value >= -20) return "bg-red-200 text-red-900";
    return "bg-red-400 text-white";
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-3">
          {marketPerformanceContext.title}
        </h2>
        <div className="inline-block bg-white text-[#2B57FF] px-6 py-3 rounded-full text-lg font-medium">
          {marketPerformanceContext.subtitle}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* Methodology */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Methodology: focus on market capitalisation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {marketPerformanceContext.methodology}
          </p>
        </div>

        {/* Insight Badge */}
        <div className="mb-6">
          <div className="inline-block bg-blue-50 border-2 border-[#2B57FF] text-[#2B57FF] px-4 py-2 rounded-lg text-sm font-medium">
            {marketPerformanceContext.insight}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketPerformanceStats.map((stat) => (
            <div
              key={stat.year}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200"
            >
              <div className="text-[#2B57FF] font-bold text-lg mb-2">
                {stat.year}
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-600">Median perf</div>
                <div
                  className={`text-lg font-bold ${
                    stat.medianPerf >= 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {stat.medianPerf > 0 ? "+" : ""}
                  {stat.medianPerf}%
                </div>
                <div className="text-xs text-gray-600 mt-2">Average perf</div>
                <div
                  className={`text-lg font-bold ${
                    stat.averagePerf >= 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {stat.averagePerf > 0 ? "+" : ""}
                  {stat.averagePerf}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 bg-[#2B57FF] text-white font-semibold text-sm rounded-tl-lg">
                  Sector
                </th>
                <th className="text-center py-4 px-4 bg-[#4169E1] text-white font-semibold text-sm">
                  2023
                </th>
                <th className="text-center py-4 px-4 bg-[#5A7FFF] text-white font-semibold text-sm">
                  2024
                </th>
                <th className="text-center py-4 px-4 bg-[#7B9FFF] text-white font-semibold text-sm rounded-tr-lg">
                  S1 2025
                </th>
              </tr>
            </thead>
            <tbody>
              {marketPerformanceData.map((row, index) => (
                <tr
                  key={row.sector}
                  className={`border-b border-gray-100 ${
                    index === marketPerformanceData.length - 1
                      ? ""
                      : "hover:bg-gray-50"
                  } transition-colors`}
                >
                  <td className="py-4 px-4 text-gray-900 font-medium text-sm">
                    {row.sector}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-sm ${getPerformanceColor(
                          row.y2023
                        )}`}
                      >
                        {row.y2023 > 0 ? "+" : ""}
                        {row.y2023}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-sm ${getPerformanceColor(
                          row.y2024
                        )}`}
                      >
                        {row.y2024 > 0 ? "+" : ""}
                        {row.y2024}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-sm ${getPerformanceColor(
                          row.s1_2025
                        )}`}
                      >
                        {row.s1_2025 > 0 ? "+" : ""}
                        {row.s1_2025}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quote Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#2B57FF]">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              {marketPerformanceContext.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






