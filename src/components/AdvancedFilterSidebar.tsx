"use client";

import {
  MarketType,
  Stage,
  InvestmentType,
  Sector,
  SECTOR_CONFIGS,
} from "@/types/filters";
import { PeriodFilter } from "@/app/page";

interface AdvancedFilterSidebarProps {
  marketType: MarketType;
  stage: Stage;
  investmentType: InvestmentType;
  selectedSectors: Set<Sector>;
  showAverage: boolean;
  periodFilter: PeriodFilter;
  onMarketTypeChange: (type: MarketType) => void;
  onStageChange: (stage: Stage) => void;
  onInvestmentTypeChange: (type: InvestmentType) => void;
  onToggleSector: (sector: Sector) => void;
  onToggleAverage: () => void;
  onPeriodFilterChange: (filter: PeriodFilter) => void;
  isStageEnabled: boolean;
  isInvestmentTypeEnabled: boolean;
}

export default function AdvancedFilterSidebar({
  marketType,
  stage,
  investmentType,
  selectedSectors,
  showAverage,
  periodFilter,
  onMarketTypeChange,
  onStageChange,
  onInvestmentTypeChange,
  onToggleSector,
  onToggleAverage,
  onPeriodFilterChange,
  isStageEnabled,
  isInvestmentTypeEnabled,
}: AdvancedFilterSidebarProps) {
  const allSectors = Object.values(Sector);
  const allSelected = allSectors.every((s) => selectedSectors.has(s));

  const handleSelectAll = () => {
    if (allSelected) {
      // Deselect all
      allSectors.forEach((s) => onToggleSector(s));
    } else {
      // Select all missing ones
      allSectors.forEach((s) => {
        if (!selectedSectors.has(s)) {
          onToggleSector(s);
        }
      });
    }
  };

  const periodOptions: { id: PeriodFilter; label: string }[] = [
    { id: "all", label: "All periods" },
    { id: "2years", label: "Last 2 years" },
    { id: "5years", label: "Last 5 years" },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 p-6 h-full overflow-y-auto">
      <div className="space-y-6">
        {/* Market Type */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Market Type
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="marketType"
                checked={marketType === MarketType.VentureCapital}
                onChange={() => onMarketTypeChange(MarketType.VentureCapital)}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Venture Capital
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="marketType"
                checked={marketType === MarketType.PrivateEquity}
                onChange={() => onMarketTypeChange(MarketType.PrivateEquity)}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Private Equity
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="marketType"
                checked={marketType === MarketType.PublicMarkets}
                onChange={() => onMarketTypeChange(MarketType.PublicMarkets)}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Listed Markets
              </span>
            </label>
          </div>
        </div>

        {/* Stage */}
        <div
          className={!isStageEnabled ? "opacity-50 pointer-events-none" : ""}
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Stage
            {!isStageEnabled && (
              <span className="text-xs font-normal text-gray-500 ml-2">
                (N/A for Listed Markets)
              </span>
            )}
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="stage"
                checked={stage === Stage.EarlyStage}
                onChange={() => onStageChange(Stage.EarlyStage)}
                disabled={!isStageEnabled}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer disabled:cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Early Stage
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="stage"
                checked={stage === Stage.LateStage}
                onChange={() => onStageChange(Stage.LateStage)}
                disabled={!isStageEnabled}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer disabled:cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Late Stage
              </span>
            </label>
          </div>
        </div>

        {/* Investment Type */}
        <div
          className={
            !isInvestmentTypeEnabled ? "opacity-50 pointer-events-none" : ""
          }
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Investment Type
            {!isInvestmentTypeEnabled && (
              <span className="text-xs font-normal text-gray-500 ml-2">
                (N/A for Listed Markets)
              </span>
            )}
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="investmentType"
                checked={investmentType === InvestmentType.Growth}
                onChange={() => onInvestmentTypeChange(InvestmentType.Growth)}
                disabled={!isInvestmentTypeEnabled}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer disabled:cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Growth
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="investmentType"
                checked={investmentType === InvestmentType.Buyout}
                onChange={() => onInvestmentTypeChange(InvestmentType.Buyout)}
                disabled={!isInvestmentTypeEnabled}
                className="w-4 h-4 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer disabled:cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Buyout
              </span>
            </label>
          </div>
        </div>

        {/* Sectors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Sectors
            </h3>
            <button
              onClick={handleSelectAll}
              className="text-xs text-[#2B57FF] hover:text-[#1e3fcc] font-medium"
            >
              {allSelected ? "Deselect All" : "Select All"}
            </button>
          </div>
          <div className="space-y-3">
            {allSectors.map((sector) => (
              <label
                key={sector}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedSectors.has(sector)}
                  onChange={() => onToggleSector(sector)}
                  className="w-5 h-5 rounded border-gray-300 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: SECTOR_CONFIGS[sector].color }}
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {SECTOR_CONFIGS[sector].name}
                  </span>
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

        {/* Display Options */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Display Options
          </h3>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={showAverage}
              onChange={onToggleAverage}
              className="w-5 h-5 rounded border-gray-300 text-[#2B57FF] focus:ring-[#2B57FF] cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-0.5 bg-gray-500 opacity-60"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, #6b7280 0, #6b7280 5px, transparent 5px, transparent 10px)",
                }}
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Show Average Line
              </span>
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
}
