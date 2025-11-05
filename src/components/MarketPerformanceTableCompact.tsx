"use client";

import { motion } from "motion/react";
import {
  marketPerformanceData,
  marketPerformanceContext,
} from "@/data/marketPerformanceData";
import InsightQuote from "./InsightQuote";

export default function MarketPerformanceTableCompact() {
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
    <div className="w-full max-w-7xl mx-auto h-auto md:h-[85vh] flex flex-col">
      <motion.div
        className="text-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
          {marketPerformanceContext.title}
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          {marketPerformanceContext.subtitle}
        </div>
        <div className="w-12 h-px bg-gray-300 mx-auto" />
      </motion.div>

      <motion.div
        className="bg-white rounded-lg border border-gray-200 p-6 flex-1 overflow-y-auto hover:shadow-md transition-shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mb-6">
          <p className="text-gray-500 text-xs font-light leading-relaxed">
            {marketPerformanceContext.methodology}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 bg-[#2B57FF] text-white font-semibold text-sm rounded-tl-lg">
                  Sector
                </th>
                <th className="text-center py-3 px-4 bg-[#4169E1] text-white font-semibold text-sm">
                  2023
                </th>
                <th className="text-center py-3 px-4 bg-[#5A7FFF] text-white font-semibold text-sm">
                  2024
                </th>
                <th className="text-center py-3 px-4 bg-[#7B9FFF] text-white font-semibold text-sm rounded-tr-lg">
                  S1 2025
                </th>
              </tr>
            </thead>
            <tbody>
              {marketPerformanceData.map((row) => (
                <tr
                  key={row.sector}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-900 font-medium text-sm">
                    {row.sector}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-xs ${getPerformanceColor(
                          row.y2023
                        )}`}
                      >
                        {row.y2023 > 0 ? "+" : ""}
                        {row.y2023}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-xs ${getPerformanceColor(
                          row.y2024
                        )}`}
                      >
                        {row.y2024 > 0 ? "+" : ""}
                        {row.y2024}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-xs ${getPerformanceColor(
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
      </motion.div>

      {/* Analysis Section */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InsightQuote
          quote={marketPerformanceContext.analysis.quote}
          author={marketPerformanceContext.analysis.author}
          role={marketPerformanceContext.analysis.role}
          imageSrc={marketPerformanceContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}
