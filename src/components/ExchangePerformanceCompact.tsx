"use client";

import { motion } from "motion/react";
import {
  exchangePerformance,
  exchangePerformanceContext,
} from "@/data/postIpoPerformanceData";
import InsightQuote from "./InsightQuote";

export default function ExchangePerformanceCompact() {
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
          Top-performing stock exchanges: who leads the pack?
        </p>
        
        {/* Subtle divider */}
        <div className="w-12 h-px bg-gray-300 mx-auto mb-4" />
        
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide">
          European players outperform their US peers
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
        <div className="flex gap-4 min-w-max px-4 md:px-0 md:grid md:grid-cols-7 md:min-w-0">
          {exchangePerformance.map((exchange, index) => {
            const isPositive = exchange.annualPerformance >= 0;
            const isEuropean = exchange.flag !== "🇺🇸";
            
            return (
              <motion.div
                key={exchange.exchange}
                className={`flex-shrink-0 w-64 md:w-auto bg-white rounded-lg border transition-all hover:shadow-md ${
                  isEuropean && isPositive
                    ? "border-blue-400 shadow-sm"
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
                    <span className="text-2xl">
                      {exchange.flag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-4 min-h-[2.5rem]">
                    {exchange.exchange}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-light">
                        Average annual perf.
                      </div>
                      <div
                        className={`text-2xl font-light ${
                          isPositive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {exchange.annualPerformance > 0 ? "+" : ""}
                        {exchange.annualPerformance}%
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-light">
                        Location
                      </div>
                      <div className="text-sm font-light text-gray-700">
                        {exchange.country}
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
        className="mt-6 px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InsightQuote
          quote={exchangePerformanceContext.analysis.quote}
          author={exchangePerformanceContext.analysis.author}
          role={exchangePerformanceContext.analysis.role}
          imageSrc={exchangePerformanceContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}

