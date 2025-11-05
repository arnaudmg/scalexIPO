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
} from "recharts";
import { metricConfigs, DataPoint } from "@/data/revenueMultiples";

interface RevenueChartProps {
  visibleMetrics: Set<string>;
  data: DataPoint[];
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

export default function RevenueChart({
  visibleMetrics,
  data,
}: RevenueChartProps) {
  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-700">{entry.name}:</span>
              <span className="font-semibold text-gray-900">
                {entry.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Venture Capital vs Private Equity vs Listed Markets
        </h2>
        <p className="text-gray-600">Median Revenue Multiple Comparison</p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
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
            domain={[0, "dataMax + 1"]}
            tickFormatter={(value) => value.toFixed(2)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="line"
            formatter={(value) => (
              <span className="text-sm text-gray-700">{value}</span>
            )}
          />

          {metricConfigs.map(
            (metric) =>
              visibleMetrics.has(metric.id) && (
                <Line
                  key={metric.id}
                  type="monotone"
                  dataKey={metric.dataKey}
                  name={metric.name}
                  stroke={metric.color}
                  strokeWidth={3}
                  dot={{
                    r: 5,
                    fill: metric.color,
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{
                    r: 7,
                    fill: metric.color,
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  animationDuration={800}
                  animationEasing="ease-in-out"
                />
              )
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
