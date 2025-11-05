"use client";

import { motion } from "motion/react";
import IpoMap from "./IpoMap";

export default function IpoMapCompact() {
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
          Geographical Coverage
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          Distribution of European tech IPOs across countries
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
        <div className="w-full h-full">
          <IpoMap />
        </div>
      </motion.div>

      <motion.div
        className="mt-4 text-center text-xs text-gray-400 font-light tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hover over countries to see detailed information
      </motion.div>
    </div>
  );
}

