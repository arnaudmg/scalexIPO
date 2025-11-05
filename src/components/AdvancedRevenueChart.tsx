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
import type { Props as LegendProps } from "recharts/types/component/DefaultLegendContent";
import {
  Sector,
  SECTOR_CONFIGS,
  AVERAGE_CONFIG,
  AdvancedDataPoint,
} from "@/types/filters";

interface AdvancedRevenueChartProps {
  data: AdvancedDataPoint[];
  selectedSectors: Set<Sector>;
  showAverage: boolean;
}

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

export default function AdvancedRevenueChart({
  data,
  selectedSectors,
  showAverage,
}: AdvancedRevenueChartProps) {
  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: entry.color,
                  opacity: entry.dataKey === "average" ? 0.7 : 1,
                }}
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

  const renderLegend = (props: LegendProps) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
        {payload?.map((entry, index: number) => {
          const color = entry.color || "#000";
          const dataKey = String(entry.dataKey);
          return (
            <div key={index} className="flex items-center gap-2">
              {dataKey === "average" ? (
                  <div
                    className="w-8 h-0.5"
                    style={{
                      backgroundColor: color,
                      opacity: 0.7,
                      backgroundImage: `repeating-linear-gradient(to right, ${color} 0, ${color} 5px, transparent 5px, transparent 10px)`,
                    }}
                  />
                ) : (
                  <div
                    className="w-8 h-0.5"
                    style={{ backgroundColor: color }}
                  />
              )}
              <span className="text-sm text-gray-700">{entry.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Median Revenue Multiple Dynamics
        </h2>
        <p className="text-gray-600">
          Deep dive into sector performance across market types, stages, and
          investment strategies
        </p>
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
          <Legend content={renderLegend} />

          {/* Sector lines */}
          {Array.from(selectedSectors).map((sector) => (
            <Line
              key={sector}
              type="monotone"
              dataKey={sector}
              name={SECTOR_CONFIGS[sector].name}
              stroke={SECTOR_CONFIGS[sector].color}
              strokeWidth={3}
              dot={{
                r: 5,
                fill: SECTOR_CONFIGS[sector].color,
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 7,
                fill: SECTOR_CONFIGS[sector].color,
                strokeWidth: 2,
                stroke: "#fff",
              }}
              animationDuration={800}
              animationEasing="ease-in-out"
            />
          ))}

          {/* Average line */}
          {showAverage && selectedSectors.size > 0 && (
            <Line
              type="monotone"
              dataKey="average"
              name={AVERAGE_CONFIG.name}
              stroke={AVERAGE_CONFIG.color}
              strokeWidth={3}
              strokeDasharray="5 5"
              strokeOpacity={0.7}
              dot={{
                r: 4,
                fill: AVERAGE_CONFIG.color,
                strokeWidth: 2,
                stroke: "#fff",
                opacity: 0.7,
              }}
              activeDot={{
                r: 6,
                fill: AVERAGE_CONFIG.color,
                strokeWidth: 2,
                stroke: "#fff",
                opacity: 0.7,
              }}
              animationDuration={800}
              animationEasing="ease-in-out"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
