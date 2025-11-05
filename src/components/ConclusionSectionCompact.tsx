"use client";

import { motion } from "motion/react";

export default function ConclusionSectionCompact() {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto md:h-[85vh] flex flex-col justify-center py-8 md:py-12">
      <motion.div
        className="text-center mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
          Executive Summary
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          Key takeaways from the European Tech IPO landscape
        </div>
        <div className="w-12 h-px bg-gray-300 mx-auto" />
      </motion.div>

      <motion.div
        className="bg-white rounded-lg p-8 md:p-10 border border-gray-200 hover:border-[#2B57FF]/30 hover:shadow-md transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Europe has strong fundamentals to compete with the US
            </h3>
            <p>
              European exchanges account for 76% of tech listings since 2015,
              with Euronext, Deutsche Börse, Nasdaq Nordic, and the London Stock
              Exchange capturing the majority. While US venues attract the
              largest issuers, smaller companies often favour European exchanges
              for greater investor proximity and valuation discipline.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Performance gap widens between mature and smaller issuers
            </h3>
            <p>
              Most European tech IPOs trade below their offering price three
              years post-listing, with underperformance driven by less mature
              companies below €1 billion in revenue. Larger issuers benefit from
              better visibility and stronger investor confidence, confirming
              that scale and maturity remain key performance drivers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              AI optimism lifts valuations across sectors
            </h3>
            <p>
              The 2024-2025 recovery has been fuelled by AI-related segments,
              particularly corporate services, customer experience, and fintech,
              driving higher revenue multiples and healthier post-IPO
              trajectories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Cleantech&apos;s structural headwinds persist
            </h3>
            <p>
              Cleantech and Climate Tech continue facing valuation compression
              amid policy uncertainty and weaker investor appetite, limiting
              short-term recovery prospects despite strong long-term
              fundamentals.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
