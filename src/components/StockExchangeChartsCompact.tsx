"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  individualExchanges,
  exchangeGroups,
  StockExchange,
} from "@/data/stockExchangeData";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: StockExchange;
  }>;
}

export default function StockExchangeChartsCompact() {
  const [viewMode, setViewMode] = useState<"individual" | "groups">(
    "individual"
  );

  const data = viewMode === "individual" ? individualExchanges : exchangeGroups;
  const title =
    viewMode === "individual"
      ? "Top Stock Exchanges"
      : "Top Stock Exchange Groups";

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{data.flag}</span>
            <p className="font-semibold text-gray-900">{data.name}</p>
          </div>
          <p className="text-sm text-gray-600">{data.country}</p>
          <p className="text-lg font-bold text-[#2B57FF] mt-2">
            {data.ipoCount} IPOs
          </p>
        </div>
      );
    }
    return null;
  };

  interface CustomBarProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    payload?: StockExchange;
  }

  const CustomBar = (props: CustomBarProps) => {
    const { x, y, width, height, payload } = props;
    
    if (!x || !y || !width || !height || !payload) return null;
    
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill="#2B57FF" rx={4} />
        <text x={x + width / 2} y={y - 25} textAnchor="middle" fontSize="20">
          {payload.flag}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
          dominantBaseline="middle"
        >
          {payload.ipoCount}
        </text>
      </g>
    );
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
          {title}
        </h2>
        <div className="inline-block bg-[#2B57FF] text-white px-5 py-2 rounded-full text-xs font-light tracking-wide mb-4">
          Distribution across major exchanges
        </div>
        <div className="w-12 h-px bg-gray-300 mx-auto mb-4" />

        <div className="flex justify-center mt-4">
          <div className="flex bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("individual")}
              className={`px-4 py-2 rounded-md text-xs font-light transition-all ${
                viewMode === "individual"
                  ? "bg-white text-[#2B57FF] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setViewMode("groups")}
              className={`px-4 py-2 rounded-md text-xs font-light transition-all ${
                viewMode === "groups"
                  ? "bg-white text-[#2B57FF] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Groups
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 flex-1 min-h-[60vh] hover:shadow-md transition-shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="shortName"
              tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 600 }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
              label={{
                value: "Number of IPOs",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#6b7280", fontSize: 12 },
              }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
            <Bar dataKey="ipoCount" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
