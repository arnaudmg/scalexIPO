"use client";

import {
  sectorPerformanceData,
  sectorPerformanceTimeline,
  sectorPerformanceContext,
} from "@/data/sectorPerformanceData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SectorPerformanceChart() {
  // Prepare data for the line chart (bump chart style)
  const periods = ["At IPO", "+1 YEAR", "+2 YEARS", "+3 YEARS"];
  const chartData = periods.map((period) => {
    const dataPoint: Record<string, string | number | null> = { period };
    sectorPerformanceTimeline.forEach((sector) => {
      const value = sector.data.find((d) => d.period === period);
      dataPoint[sector.sector] = value ? value.value : null;
    });
    return dataPoint;
  });

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-3">
          {sectorPerformanceContext.title}
        </h2>
        <p className="text-xl text-blue-100 mb-3">
          {sectorPerformanceContext.subtitle}
        </p>
        <div className="inline-block bg-white text-[#2B57FF] px-6 py-3 rounded-full text-lg font-medium">
          {sectorPerformanceContext.headline}
        </div>
      </div>

      {/* Performance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorPerformanceData.map((sector) => (
          <div
            key={sector.sector}
            className={`bg-white rounded-xl shadow-sm p-6 border-2 transition-all hover:shadow-lg ${
              sector.highlight
                ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-white"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            {/* Rank Badge */}
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  sector.rank === 1
                    ? "bg-yellow-500"
                    : sector.rank === 2
                    ? "bg-gray-400"
                    : sector.rank === 3
                    ? "bg-orange-400"
                    : "bg-gray-300"
                }`}
              >
                {sector.icon || `#${sector.rank}`}
              </div>
              <div className="text-2xl">{sector.icon === "🏆" && "🏆"}</div>
            </div>

            {/* Sector Name */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {sector.sector}
            </h3>

            {/* Performance Metrics */}
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">
                  Average annual perf.
                </div>
                <div
                  className={`text-2xl font-bold ${
                    sector.annualPerf >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {sector.annualPerf > 0 ? "+" : ""}
                  {sector.annualPerf.toFixed(1)}%
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">
                  Cumulated perf.
                </div>
                <div
                  className={`text-2xl font-bold ${
                    sector.cumulatedPerf >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {sector.cumulatedPerf > 0 ? "+" : ""}
                  {sector.cumulatedPerf.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Line Chart - Performance Analysis by Sector */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Performance analysis by sector
        </h3>
        <div className="w-full" style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 12 }}
                stroke="#666"
              />
              <YAxis
                label={{
                  value: "Rank",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 12 },
                }}
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                reversed
                tick={{ fontSize: 12 }}
                stroke="#666"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                iconType="line"
              />
              {sectorPerformanceTimeline.map((sector) => (
                <Line
                  key={sector.sector}
                  type="monotone"
                  dataKey={sector.sector}
                  stroke={sector.color}
                  strokeWidth={3}
                  dot={{ r: 5, fill: sector.color }}
                  activeDot={{ r: 7 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-500 text-center">
          Lower rank = Better performance (1 = Best, 5 = Worst)
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-[#2B57FF]">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💬</div>
            <div>
              <p className="text-base text-gray-700 leading-relaxed">
                {sectorPerformanceContext.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

