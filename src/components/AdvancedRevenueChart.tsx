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

export interface ChartSeries {
  dataKey: string;
  name: string;
  color: string;
  strokeDasharray?: string;
  strokeOpacity?: number;
}

interface AdvancedRevenueChartProps {
  data: AdvancedDataPoint[];
  selectedSectors?: Set<Sector>;
  showAverage?: boolean;
  customSeries?: ChartSeries[];
  isLocked?: boolean;
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
  customSeries,
  isLocked,
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
                  opacity:
                    entry.dataKey === "average" ||
                    entry.dataKey === "eurotech_average"
                      ? 0.7
                      : 1,
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
          const isAverage =
            dataKey === "average" || dataKey === "eurotech_average";

          return (
            <div key={index} className="flex items-center gap-2">
              {isAverage ? (
                <div
                  className="w-8 h-0.5"
                  style={{
                    backgroundColor: color,
                    opacity: 0.7,
                    backgroundImage: `repeating-linear-gradient(to right, ${color} 0, ${color} 5px, transparent 5px, transparent 10px)`,
                  }}
                />
              ) : (
                <div className="w-8 h-0.5" style={{ backgroundColor: color }} />
              )}
              <span className="text-sm text-gray-700">{entry.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">
      <div className="mb-4 flex-shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Median Revenue Multiple Dynamics
        </h2>
        <p className="text-gray-600">
          Deep dive into sector performance across market types, stages, and
          investment strategies
        </p>
      </div>

      <div className="flex-1 min-h-0 relative">
        {isLocked && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/30">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get access to all the data
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlock detailed insights and full datasets in our comprehensive
                Whitepaper.
              </p>
              <a
                href="https://scalexinvest.webflow.io/white-paper/european-tech-ipos-2025-edition"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-colors bg-[#2B57FF] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm"
              >
                Download Whitepaper
              </a>
            </div>
          </div>
        )}
        <div
          className={
            isLocked
              ? "h-full filter blur-[5px] opacity-60 pointer-events-none select-none"
              : "h-full"
          }
        >
          <ResponsiveContainer width="100%" height="100%">
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

              {/* Default Mode: Sector lines */}
              {!customSeries &&
                selectedSectors &&
                Array.from(selectedSectors).map((sector) => (
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

              {/* Default Mode: Average line */}
              {!customSeries &&
                showAverage &&
                selectedSectors &&
                selectedSectors.size > 0 && (
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

              {/* Custom Series Mode */}
              {customSeries &&
                customSeries.map((series) => (
                  <Line
                    key={series.dataKey}
                    type="monotone"
                    dataKey={series.dataKey}
                    name={series.name}
                    stroke={series.color}
                    strokeWidth={3}
                    strokeDasharray={series.strokeDasharray}
                    strokeOpacity={series.strokeOpacity}
                    dot={{
                      r: 4,
                      fill: series.color,
                      strokeWidth: 2,
                      stroke: "#fff",
                      opacity: series.strokeOpacity || 1,
                    }}
                    activeDot={{
                      r: 6,
                      fill: series.color,
                      strokeWidth: 2,
                      stroke: "#fff",
                      opacity: series.strokeOpacity || 1,
                    }}
                    animationDuration={800}
                    animationEasing="ease-in-out"
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
