"use client";

import { motion } from "motion/react";
import { selectionCriteria } from "@/data/sampleData";
import SectorBubbleChart from "./SectorBubbleChart";

export default function SampleSectionCompact() {
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
          The Sample
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          Understanding European Tech IPOs: Selection criteria and sectors
        </div>
        <div className="w-12 h-px bg-gray-300 mx-auto" />
      </motion.div>

      <motion.div
        className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 flex-1 min-h-[60vh] hover:shadow-md transition-shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left Column - Selection Criteria */}
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Selection criteria for the study
            </h3>
            <div className="space-y-4">
              {selectionCriteria.map((criterion, index) => (
                <motion.div
                  key={criterion.id}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Badge */}
                  <div
                    className={`flex-shrink-0 flex items-center justify-center rounded-full ${
                      criterion.badgeType === "flag"
                        ? "w-12 h-12 bg-white border-2 border-gray-200 text-2xl"
                        : "w-12 h-12 bg-[#2B57FF] text-white font-bold text-xs"
                    }`}
                  >
                    {criterion.badge}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium text-sm">
                      {criterion.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Sectors Bubble Chart */}
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Sectors
            </h3>
            <div className="w-full max-h-[400px]">
              <SectorBubbleChart />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-4 text-center text-xs text-gray-400 font-light tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        IPOs selected based on strict criteria across multiple sectors
      </motion.div>
    </div>
  );
}
