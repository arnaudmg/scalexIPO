"use client";

import { motion } from "motion/react";
import {
  revenueGroupPerformance,
  revenueGroupContext,
} from "@/data/postIpoPerformanceData";
import InsightQuote from "./InsightQuote";

export default function RevenueGroupPerformanceCompact() {
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
          3 years stock performance Post-IPO
        </h2>
        <p className="text-sm text-gray-500 mb-4 font-light">
          More mature companies deliver stronger performance
        </p>

        {/* Subtle divider */}
        <div className="w-12 h-px bg-gray-300 mx-auto mb-4" />

        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide">
          Issuers with revenue &lt; €1bn face post-IPO valuation pressure
        </div>
      </motion.div>

      {/* Cards - Single row with 6 groups - Compact */}
      <motion.div
        className="w-full px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-6 gap-2 max-w-full">
          {revenueGroupPerformance.map((group, index) => {
            const isPositive = group.annualPerformance >= 0;
            const isHighlighted = group.highlighted;

            return (
              <motion.div
                key={group.group}
                className={`bg-white rounded-lg border transition-all hover:shadow-md ${
                  isHighlighted
                    ? "border-yellow-400 shadow-sm"
                    : "border-gray-200 hover:border-[#2B57FF]/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                {/* Rank/Icon Badge */}
                <div className="p-2 pb-2 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                        index === 0
                          ? "bg-yellow-400 text-yellow-900"
                          : index === 1
                          ? "bg-gray-300 text-gray-700"
                          : index === 2
                          ? "bg-orange-400 text-orange-900"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      #{index + 1}
                    </div>
                    {isHighlighted && (
                      <span className="text-yellow-500 text-sm">⭐</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-2">
                  <h3 className="text-xs font-medium text-gray-900 mb-3 min-h-[2rem] flex items-center">
                    {group.label}
                  </h3>

                  <div className="space-y-2">
                    <div>
                      <div className="text-[10px] text-gray-500 mb-0.5 font-light">
                        Average annual perf.
                      </div>
                      <div
                        className={`text-xl font-light ${
                          isPositive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {group.annualPerformance > 0 ? "+" : ""}
                        {group.annualPerformance.toFixed(1)}%
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-gray-500 mb-0.5 font-light">
                        Cumulated perf.
                      </div>
                      <div
                        className={`text-xl font-light ${
                          group.cumulatedPerformance >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {group.cumulatedPerformance > 0 ? "+" : ""}
                        {group.cumulatedPerformance.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Analysis Section */}
      <motion.div
        className="mt-6 px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InsightQuote
          quote={revenueGroupContext.analysis.quote}
          author={revenueGroupContext.analysis.author}
          role={revenueGroupContext.analysis.role}
          imageSrc={revenueGroupContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}
