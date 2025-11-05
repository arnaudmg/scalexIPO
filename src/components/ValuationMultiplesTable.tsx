"use client";

import {
  valuationMultiplesData,
  valuationMultiplesContext,
} from "@/data/valuationMultiplesData";

export default function ValuationMultiplesTable() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-3">{valuationMultiplesContext.title}</h2>
        <div className="inline-block bg-white text-[#2B57FF] px-6 py-3 rounded-full text-lg font-medium">
          {valuationMultiplesContext.subtitle}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* Methodology */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Methodology: focus on valuation multiples
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {valuationMultiplesContext.methodology}
          </p>
        </div>

        {/* Insight Badge */}
        <div className="mb-6">
          <div className="inline-block bg-blue-50 border-2 border-[#2B57FF] text-[#2B57FF] px-4 py-2 rounded-lg text-sm font-medium">
            {valuationMultiplesContext.insight}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 bg-[#2B57FF] text-white font-semibold text-sm">
                  Sector
                </th>
                <th className="text-center py-4 px-4 bg-[#2B57FF] text-white font-semibold text-sm">
                  2023
                </th>
                <th className="text-center py-4 px-4 bg-[#4169E1] text-white font-semibold text-sm">
                  2024
                </th>
                <th className="text-center py-4 px-4 bg-[#5A7FFF] text-white font-semibold text-sm">
                  S1 2025
                </th>
              </tr>
            </thead>
            <tbody>
              {valuationMultiplesData.map((row, index) => (
                <tr
                  key={row.sector}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-4 px-4 text-gray-900 font-medium text-sm">
                    {row.sector}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700 font-semibold">
                    {row.y2023.toFixed(1)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-700 font-semibold">
                        {row.y2024.toFixed(1)}
                      </span>
                      {row.change2024 && (
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            row.change2024 > 0
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {row.change2024 > 0 ? "+" : ""}
                          {row.change2024}%
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-700 font-semibold">
                        {row.s1_2025.toFixed(1)}
                      </span>
                      {row.change2025 && (
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            row.change2025 > 0
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {row.change2025 > 0 ? "+" : ""}
                          {row.change2025}%
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">The rebound in valuation multiples is driven by AI-related sectors</span>, while{" "}
              <span className="font-semibold text-red-600">CleanTech continues to face valuation pressure amid political uncertainty</span>{" "}
              and shifting policy priorities — particularly in the US, where reduced support for climate initiatives has dampened investor sentiment. 
              This contrast highlights how AI optimism and climate policy headwinds are reshaping valuation trends across the European tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}




