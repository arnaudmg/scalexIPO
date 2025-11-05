"use client";

import { motion } from "motion/react";
import {
  valuationMultiplesData,
  valuationMultiplesContext,
} from "@/data/valuationMultiplesData";
import InsightQuote from "./InsightQuote";

export default function ValuationMultiplesTableCompact() {
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
          {valuationMultiplesContext.title}
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          {valuationMultiplesContext.subtitle}
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
            {valuationMultiplesContext.methodology}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 bg-[#2B57FF] text-white font-semibold text-sm">
                  Sector
                </th>
                <th className="text-center py-3 px-4 bg-[#2B57FF] text-white font-semibold text-sm">
                  2023
                </th>
                <th className="text-center py-3 px-4 bg-[#4169E1] text-white font-semibold text-sm">
                  2024
                </th>
                <th className="text-center py-3 px-4 bg-[#5A7FFF] text-white font-semibold text-sm">
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
                  <td className="py-3 px-4 text-gray-900 font-medium text-sm">
                    {row.sector}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700 font-semibold text-sm">
                    {row.y2023.toFixed(1)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-700 font-semibold text-sm">
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
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-700 font-semibold text-sm">
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
          quote={valuationMultiplesContext.analysis.quote}
          author={valuationMultiplesContext.analysis.author}
          role={valuationMultiplesContext.analysis.role}
          imageSrc={valuationMultiplesContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}
