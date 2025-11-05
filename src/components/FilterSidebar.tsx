"use client";

import { metricConfigs } from "@/data/revenueMultiples";
import { PeriodFilter } from "@/app/page";

interface FilterSidebarProps {
  visibleMetrics: Set<string>;
  onToggleMetric: (metricId: string) => void;
  periodFilter: PeriodFilter;
  onPeriodFilterChange: (filter: PeriodFilter) => void;
}

export default function FilterSidebar({
  visibleMetrics,
  onToggleMetric,
  periodFilter,
  onPeriodFilterChange,
}: FilterSidebarProps) {
  const periodOptions: { id: PeriodFilter; label: string }[] = [
    { id: "all", label: "All periods" },
    { id: "2years", label: "Last 2 years" },
    { id: "5years", label: "Last 5 years" },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 p-6 h-full overflow-y-auto">
      <div className="space-y-6">
        {/* Metrics Toggle Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Metrics
          </h3>
          <div className="space-y-3">
            {metricConfigs.map((metric) => (
              <label
                key={metric.id}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={visibleMetrics.has(metric.id)}
                    onChange={() => onToggleMetric(metric.id)}
                    className="w-5 h-5 rounded border-gray-300 text-[#2B57FF] focus:ring-[#2B57FF] focus:ring-offset-0 cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: metric.color }}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {metric.name}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Time Period Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Period
          </h3>
          <div className="space-y-2">
            {periodOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onPeriodFilterChange(option.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  periodFilter === option.id
                    ? "bg-[#2B57FF] text-white font-medium"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
