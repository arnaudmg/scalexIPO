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
import {
  performanceTimeline,
  performanceSummary,
  performanceContext,
} from "@/data/postIpoPerformanceData";
import InsightQuote from "./InsightQuote";
import { motion } from "motion/react";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

export default function AverageVsMedianChart() {
  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-700">{entry.name}:</span>
              <span className="font-semibold text-gray-900">
                {entry.value > 0 ? "+" : ""}
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
              Average vs. median post-IPO performance
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Determining whether the average or median better represents
              performance remains a key consideration. Both indicators show
              negative results. Our upcoming analysis focuses on{" "}
              <span className="text-[#2B57FF] font-medium">
                average figures
              </span>
              , which provides a more representative view of overall market
              momentum.
            </p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={performanceTimeline}
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="period"
                tick={{ fill: "#6b7280", fontSize: 11 }}
                tickLine={{ stroke: "#e5e7eb" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 11 }}
                tickLine={{ stroke: "#e5e7eb" }}
                axisLine={{ stroke: "#e5e7eb" }}
                domain={[-40, 20]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: "12px" }}
                iconType="line"
                formatter={(value) => (
                  <span className="text-xs text-gray-700">{value}</span>
                )}
              />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="median"
                name="Median"
                stroke="#EF4444"
                strokeWidth={2.5}
                dot={{
                  r: 5,
                  fill: "#EF4444",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                activeDot={{
                  r: 6,
                  fill: "#EF4444",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                animationDuration={800}
              />
              <Line
                type="monotone"
                dataKey="average"
                name="Average"
                stroke="#2B57FF"
                strokeWidth={2.5}
                dot={{
                  r: 5,
                  fill: "#2B57FF",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                activeDot={{
                  r: 6,
                  fill: "#2B57FF",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Cards */}
        <div className="space-y-3">
          {/* Average Card */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Average
            </h4>
            <div className="space-y-2.5">
              <div>
                <div className="text-2xl font-bold text-red-500">
                  {performanceSummary.average.annual > 0 ? "+" : ""}
                  {performanceSummary.average.annual}%
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  Average annual perf.
                </div>
              </div>
              <div className="pt-2.5 border-t border-gray-200">
                <div className="text-2xl font-bold text-red-500">
                  {performanceSummary.average.cumulated > 0 ? "+" : ""}
                  {performanceSummary.average.cumulated}%
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  Cumulated perf.
                </div>
              </div>
            </div>
          </div>

          {/* Median Card */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Median</h4>
            <div className="space-y-2.5">
              <div>
                <div className="text-2xl font-bold text-red-500">
                  {performanceSummary.median.annual > 0 ? "+" : ""}
                  {performanceSummary.median.annual}%
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  Average annual perf.
                </div>
              </div>
              <div className="pt-2.5 border-t border-gray-200">
                <div className="text-2xl font-bold text-red-500">
                  {performanceSummary.median.cumulated > 0 ? "+" : ""}
                  {performanceSummary.median.cumulated}%
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  Cumulated perf.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InsightQuote
          quote={performanceContext.analysis.quote}
          author={performanceContext.analysis.author}
          role={performanceContext.analysis.role}
          imageSrc={performanceContext.analysis.imageSrc}
        />
      </motion.div>
    </div>
  );
}
