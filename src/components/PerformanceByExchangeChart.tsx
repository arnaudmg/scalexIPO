"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import { exchangePerformance } from "@/data/postIpoPerformanceData";

interface ExchangeData {
  exchange: string;
  flag: string;
  country: string;
  annualPerformance: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: ExchangeData;
  }>;
}

export default function PerformanceByExchangeChart() {
  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{data.flag}</span>
            <p className="font-semibold text-gray-900">{data.exchange}</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">{data.country}</p>
          <p
            className={`text-lg font-bold ${
              data.annualPerformance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.annualPerformance > 0 ? "+" : ""}
            {data.annualPerformance}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Average annual performance over 3 years
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Average annual performance over the three years post-IPO
        </h3>
        <p className="text-sm text-gray-600">
          The chart below shows the average annual stock price performance over
          the three years following the IPO, by stock exchange. Each bar
          reflects the mean annualised return of companies listed on that
          exchange, offering a comparative view of post-IPO market dynamics.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={exchangePerformance}
          layout="vertical"
          margin={{ top: 20, right: 40, left: 120, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            type="number"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickLine={{ stroke: "#e5e7eb" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickFormatter={(value) => `${value}%`}
            domain={[-20, 20]}
          />
          <YAxis
            type="category"
            dataKey="exchange"
            tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 600 }}
            tickLine={{ stroke: "#e5e7eb" }}
            axisLine={{ stroke: "#e5e7eb" }}
            width={110}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
          <ReferenceLine x={0} stroke="#94a3b8" strokeWidth={2} />
          <Bar
            dataKey="annualPerformance"
            radius={[0, 4, 4, 0]}
            animationDuration={800}
          >
            {exchangePerformance.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.annualPerformance >= 0 ? "#2B57FF" : "#EF4444"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
