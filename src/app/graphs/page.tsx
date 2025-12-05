"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import RevenueChart from "@/components/RevenueChart";
import { metricConfigs, revenueMultipleData } from "@/data/revenueMultiples";

export type PeriodFilter = "all" | "2years" | "5years";

export default function GraphsPage() {
  // Initialize with all metrics visible
  const [visibleMetrics, setVisibleMetrics] = useState<Set<string>>(
    new Set(metricConfigs.map((m) => m.id))
  );
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>("all");

  const toggleMetric = (metricId: string) => {
    setVisibleMetrics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(metricId)) {
        newSet.delete(metricId);
      } else {
        newSet.add(metricId);
      }
      return newSet;
    });
  };

  // Filter data based on period selection
  const filteredData = useMemo(() => {
    if (periodFilter === "all") {
      return revenueMultipleData;
    } else if (periodFilter === "2years") {
      // Last 2 years = last 4 periods (2 years * 2 semesters)
      return revenueMultipleData.slice(-4);
    } else if (periodFilter === "5years") {
      // Last 5 years = all data (we have exactly 5.5 years of data)
      return revenueMultipleData;
    }
    return revenueMultipleData;
  }, [periodFilter]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <FilterSidebar
            visibleMetrics={visibleMetrics}
            onToggleMetric={toggleMetric}
            periodFilter={periodFilter}
            onPeriodFilterChange={setPeriodFilter}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto h-full">
            <div className="h-[calc(100vh-8rem)]">
              {visibleMetrics.size === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No metrics selected
                    </h3>
                    <p className="text-gray-500">
                      Please select at least one metric from the sidebar to view
                      the chart.
                    </p>
                  </div>
                </div>
              ) : (
                <RevenueChart
                  visibleMetrics={visibleMetrics}
                  data={filteredData}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

