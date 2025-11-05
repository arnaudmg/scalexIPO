"use client";

import { motion } from "motion/react";
import AverageVsMedianChart from "./AverageVsMedianChart";

export default function PostIpoPerformanceSectionCompact() {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto md:h-[85vh] flex flex-col overflow-hidden">
      <motion.div
        className="text-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
          Post-IPO Stock Performance
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          Significant variations across different sub-segments
        </div>
        <div className="w-12 h-px bg-gray-300 mx-auto" />
      </motion.div>

      <motion.div
        className="flex-1 overflow-y-auto px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AverageVsMedianChart />
      </motion.div>
    </div>
  );
}

