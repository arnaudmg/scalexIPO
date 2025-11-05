"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { revenueGroupPerformance } from "@/data/postIpoPerformanceData";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    dataKey: string;
  }>;
  label?: string;
}

export default function PerformanceByRevenueChart() {
  // Transform data for Recharts
  const chartData = revenueGroupPerformance[0].data.map((point, index) => {
    const dataPoint: Record<string, string | number> = { period: point.period };
    revenueGroupPerformance.forEach((group) => {
      dataPoint[group.group] = group.data[index].value;
    });
    return dataPoint;
  });

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs">
          <p className="font-semibold text-gray-900 mb-3">{label}</p>
          <div className="space-y-2">
            {payload
              .sort((a, b) => (b.value || 0) - (a.value || 0))
              .map((entry, index) => {
                const group = revenueGroupPerformance.find(
                  (g) => g.group === entry.dataKey
                );
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-gray-700 flex-1">
                      {group?.label}:
                    </span>
                    <span className="font-semibold text-gray-900">
                      {entry.value > 0 ? "+" : ""}
                      {entry.value}%
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h3 className="text-3xl font-bold mb-2">
          Performance analysis by revenue group
        </h3>
        <p className="text-blue-100 text-lg">
          The sample&apos;s overall disappointing performance masks significant
          variations across different sub-segments
        </p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="period"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
              domain={[-80, 60]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              iconType="line"
              formatter={(value) => {
                const group = revenueGroupPerformance.find(
                  (g) => g.group === value
                );
                return (
                  <span className="text-sm text-gray-700">{group?.label}</span>
                );
              }}
            />
            <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />

            {revenueGroupPerformance.map((group) => (
              <Line
                key={group.group}
                type="monotone"
                dataKey={group.group}
                name={group.group}
                stroke={group.color}
                strokeWidth={group.highlighted ? 4 : 3}
                dot={{
                  r: group.highlighted ? 6 : 5,
                  fill: group.color,
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                activeDot={{
                  r: group.highlighted ? 8 : 7,
                  fill: group.color,
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                animationDuration={800}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {revenueGroupPerformance.map((group) => (
          <div
            key={group.group}
            className={`bg-white rounded-xl shadow-sm p-6`}
          >
            <div className="flex items-center gap-2 mb-4">
              {group.highlighted && <span className="text-xl">⭐</span>}
              <h4 className="text-lg font-bold text-gray-900">{group.label}</h4>
            </div>
            <div className="space-y-2">
              <div>
                <div
                  className={`text-2xl font-bold ${
                    group.annualPerformance >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {group.annualPerformance > 0 ? "+" : ""}
                  {group.annualPerformance}%
                </div>
                <div className="text-xs text-gray-600">
                  Average annual perf.
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <div
                  className={`text-2xl font-bold ${
                    group.cumulatedPerformance >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {group.cumulatedPerformance > 0 ? "+" : ""}
                  {group.cumulatedPerformance}%
                </div>
                <div className="text-xs text-gray-600">Cumulated perf.</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
