"use client";

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

export default function StockExchangeCharts() {
  const [viewMode, setViewMode] = useState<"individual" | "groups">(
    "individual"
  );

  const data = viewMode === "individual" ? individualExchanges : exchangeGroups;
  const title =
    viewMode === "individual"
      ? "Top Stock Exchanges for European Tech IPOs"
      : "Top Stock Exchange Groups for European Tech IPOs";

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
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#2B57FF"
          rx={4}
          className="transition-all duration-300 hover:opacity-80"
        />
        {/* Flag */}
        <text
          x={x + width / 2}
          y={y - 30}
          textAnchor="middle"
          fontSize="24"
          dominantBaseline="middle"
        >
          {payload.flag}
        </text>
        {/* IPO Count */}
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
          dominantBaseline="middle"
        >
          {payload.ipoCount}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      {/* Header with Toggle */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">
            Distribution of tech IPOs across major stock exchanges
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("individual")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === "individual"
                ? "bg-white text-[#2B57FF] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Individual Exchanges
          </button>
          <button
            onClick={() => setViewMode("groups")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === "groups"
                ? "bg-white text-[#2B57FF] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Exchange Groups
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="shortName"
            tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 600 }}
            tickLine={{ stroke: "#e5e7eb" }}
            axisLine={{ stroke: "#e5e7eb" }}
            angle={0}
            textAnchor="middle"
            height={60}
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
          <Bar
            dataKey="ipoCount"
            shape={<CustomBar />}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Hover over bars to see detailed information about each exchange
      </div>
    </div>
  );
}
