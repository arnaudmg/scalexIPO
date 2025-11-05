"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import AdvancedFilterSidebar from "@/components/AdvancedFilterSidebar";
import AdvancedRevenueChart from "@/components/AdvancedRevenueChart";
import { MarketType, Stage, InvestmentType, Sector } from "@/types/filters";
import { getFilteredData } from "@/data/advancedRevenueMultiples";
import { PeriodFilter } from "@/app/page";

export default function ComparisonPage() {
  const [marketType, setMarketType] = useState<MarketType>(
    MarketType.VentureCapital
  );
  const [stage, setStage] = useState<Stage>(Stage.EarlyStage);
  const [investmentType, setInvestmentType] = useState<InvestmentType>(
    InvestmentType.Growth
  );
  const [selectedSectors, setSelectedSectors] = useState<Set<Sector>>(
    new Set(Object.values(Sector))
  );
  const [showAverage, setShowAverage] = useState(true);
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>("all");

  const handleMarketTypeChange = (newMarketType: MarketType) => {
    setMarketType(newMarketType);
    // If switching to Public Markets, reset to default values for disabled filters
    if (newMarketType === MarketType.PublicMarkets) {
      setStage(Stage.EarlyStage);
      setInvestmentType(InvestmentType.Growth);
    }
  };

  const toggleSector = (sector: Sector) => {
    setSelectedSectors((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sector)) {
        newSet.delete(sector);
      } else {
        newSet.add(sector);
      }
      return newSet;
    });
  };

  // Determine which filters are enabled based on market type
  const isStageEnabled = marketType !== MarketType.PublicMarkets;
  const isInvestmentTypeEnabled = marketType !== MarketType.PublicMarkets;

  // Get data based on filters
  const baseData = getFilteredData(
    marketType,
    stage,
    investmentType,
    selectedSectors
  );

  // Filter data based on period selection
  const chartData = useMemo(() => {
    if (periodFilter === "all") {
      return baseData;
    } else if (periodFilter === "2years") {
      // Last 2 years = last 4 periods (2 years * 2 semesters)
      return baseData.slice(-4);
    } else if (periodFilter === "5years") {
      // Last 5 years = all data
      return baseData;
    }
    return baseData;
  }, [baseData, periodFilter]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <AdvancedFilterSidebar
            marketType={marketType}
            stage={stage}
            investmentType={investmentType}
            selectedSectors={selectedSectors}
            showAverage={showAverage}
            periodFilter={periodFilter}
            onMarketTypeChange={handleMarketTypeChange}
            onStageChange={setStage}
            onInvestmentTypeChange={setInvestmentType}
            onToggleSector={toggleSector}
            onToggleAverage={() => setShowAverage(!showAverage)}
            onPeriodFilterChange={setPeriodFilter}
            isStageEnabled={isStageEnabled}
            isInvestmentTypeEnabled={isInvestmentTypeEnabled}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto h-full">
            <div className="h-[calc(100vh-8rem)]">
              {selectedSectors.size === 0 ? (
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
                      No sectors selected
                    </h3>
                    <p className="text-gray-500">
                      Please select at least one sector from the sidebar to view
                      the chart.
                    </p>
                  </div>
                </div>
              ) : (
                <AdvancedRevenueChart
                  data={chartData}
                  selectedSectors={selectedSectors}
                  showAverage={showAverage}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
