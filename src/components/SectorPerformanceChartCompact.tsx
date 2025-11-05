"use client";

import { motion } from "motion/react";
import {
  sectorPerformanceData,
  sectorPerformanceContext,
} from "@/data/sectorPerformanceData";
import InsightQuote from "./InsightQuote";

export default function SectorPerformanceChartCompact() {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto md:h-[85vh] flex flex-col justify-center">
      {/* Header */}
      <motion.div
        className="text-center mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
          Post-IPO stock performance
        </h2>
        <p className="text-sm text-gray-500 mb-4 font-light">
          {sectorPerformanceContext.subtitle}
        </p>
        
        {/* Subtle divider */}
        <div className="w-12 h-px bg-gray-300 mx-auto mb-4" />
        
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide">
          {sectorPerformanceContext.headline}
        </div>
      </motion.div>

      {/* Cards - Single row with better spacing */}
      <motion.div
        className="w-full overflow-x-auto pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-4 min-w-max px-4 md:px-0 md:grid md:grid-cols-5 md:min-w-0">
          {sectorPerformanceData.map((sector, index) => (
            <motion.div
              key={sector.sector}
              className={`flex-shrink-0 w-64 md:w-auto bg-white rounded-lg border transition-all hover:shadow-md ${
                sector.highlight
                  ? "border-yellow-400 shadow-sm"
                  : "border-gray-200 hover:border-[#2B57FF]/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              {/* Rank Badge */}
              <div className="p-4 pb-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      sector.rank === 1
                        ? "bg-yellow-400 text-yellow-900"
                        : sector.rank === 2
                        ? "bg-gray-300 text-gray-700"
                        : sector.rank === 3
                        ? "bg-orange-400 text-orange-900"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    #{sector.rank}
                  </div>
                  {sector.highlight && (
                    <span className="text-yellow-500 text-lg">
                      {sector.icon}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4 min-h-[2.5rem]">
                  {sector.sector}
                </h3>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 font-light">
                      Average annual perf.
                    </div>
                    <div
                      className={`text-2xl font-light ${
                        sector.annualPerf >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {sector.annualPerf > 0 ? "+" : ""}
                      {sector.annualPerf.toFixed(1)}%
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1 font-light">
                      Cumulated perf.
                    </div>
                    <div
                      className={`text-2xl font-light ${
                        sector.cumulatedPerf >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {sector.cumulatedPerf > 0 ? "+" : ""}
                      {sector.cumulatedPerf.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Analysis Section */}
      <motion.div
        className="mt-6 px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InsightQuote
          quote={sectorPerformanceContext.analysis.quote}
          author={sectorPerformanceContext.analysis.author}
          role={sectorPerformanceContext.analysis.role}
          imageSrc={sectorPerformanceContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}

