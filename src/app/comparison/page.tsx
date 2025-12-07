"use client";

import { useState, useMemo } from "react";
import ScenarioSidebar, { ScenarioId } from "@/components/ScenarioSidebar";
import AdvancedRevenueChart, {
  ChartSeries,
} from "@/components/AdvancedRevenueChart";
import {
  MarketType,
  Stage,
  InvestmentType,
  Sector,
  AdvancedDataPoint,
} from "@/types/filters";
import { mockData, periods } from "@/data/advancedRevenueMultiples";

export default function ComparisonPage() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioId>(
    ScenarioId.GlobalIndex
  );

  const { chartData, customSeries } = useMemo(() => {
    // 1. Calculate Global Average (Eurotech Revenue Multiple)
    const globalAverages = periods.map((_, periodIndex) => {
      let sum = 0;
      let count = 0;

      Object.values(MarketType).forEach((market) => {
        Object.values(Stage).forEach((stage) => {
          Object.values(InvestmentType).forEach((inv) => {
            // Check if this path exists in mockData (some might not for Public Markets if strict typing, but here it is consistent)
            // Actually mockData has specific structure.
            // Safe access:
            const marketData = mockData[market];
            const stageData = marketData?.[stage];
            const invData = stageData?.[inv];

            if (invData) {
              Object.values(Sector).forEach((sector) => {
                const values = invData[sector];
                if (values && values[periodIndex] !== undefined) {
                  sum += values[periodIndex];
                  count++;
                }
              });
            }
          });
        });
      });

      return count > 0 ? sum / count : 0;
    });

    // 2. Prepare Base Data Points with Global Average
    const basePoints: AdvancedDataPoint[] = periods.map((period, index) => ({
      period,
      eurotech_average: globalAverages[index],
    }));

    // 3. Define Series based on Scenario
    let series: ChartSeries[] = [];
    let specificData: number[] = [];

    // Helper to aggregate data for a specific filter set
    const aggregateData = (
      filter: (
        m: MarketType,
        s: Stage,
        i: InvestmentType,
        sec: Sector
      ) => boolean
    ) => {
      return periods.map((_, periodIndex) => {
        let sum = 0;
        let count = 0;

        Object.values(MarketType).forEach((m) => {
          const mData = mockData[m];
          if (!mData) return;
          Object.values(Stage).forEach((s) => {
            const sData = mData[s];
            if (!sData) return;
            Object.values(InvestmentType).forEach((i) => {
              const iData = sData[i];
              if (!iData) return;
              Object.values(Sector).forEach((sec) => {
                if (filter(m, s, i, sec)) {
                  const val = iData[sec]?.[periodIndex];
                  if (val !== undefined) {
                    sum += val;
                    count++;
                  }
                }
              });
            });
          });
        });
        return count > 0 ? sum / count : 0;
      });
    };

    switch (selectedScenario) {
      case ScenarioId.GlobalIndex:
        series = [
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.EarlyStageVC:
        specificData = aggregateData(
          (m, s) => m === MarketType.VentureCapital && s === Stage.EarlyStage
        );
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech Early Stage Venture",
            color: "#2B57FF",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.LateStageVC:
        specificData = aggregateData(
          (m, s) => m === MarketType.VentureCapital && s === Stage.LateStage
        );
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech Late Stage Venture",
            color: "#2B57FF",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.GrowthPE:
        specificData = aggregateData(
          (m, s, i) =>
            m === MarketType.PrivateEquity && i === InvestmentType.Growth
        );
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech Growth PE",
            color: "#2B57FF",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.LBO_PE:
        specificData = aggregateData(
          (m, s, i) =>
            m === MarketType.PrivateEquity && i === InvestmentType.Buyout
        );
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech LBO - PE",
            color: "#2B57FF",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.Listed:
        specificData = aggregateData((m) => m === MarketType.PublicMarkets);
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech Listed",
            color: "#2B57FF",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.AI:
        specificData = aggregateData((m, s, i, sec) => sec === Sector.AI);
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech AI",
            color: "#3b82f6",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.Cleantech:
        specificData = aggregateData((m, s, i, sec) => sec === Sector.Climate);
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech Cleantech & Energy",
            color: "#22c55e",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.EHealth:
        specificData = aggregateData((m, s, i, sec) => sec === Sector.ESante);
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech E-Health",
            color: "#ef4444",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.SaaS:
        // Using Fintech as proxy/placeholder for SaaS as requested
        specificData = aggregateData((m, s, i, sec) => sec === Sector.Fintech);
        series = [
          {
            dataKey: "specific_scenario",
            name: "Eurotech SAAS",
            color: "#f97316",
          },
          {
            dataKey: "eurotech_average",
            name: "Eurotech Revenue Multiple",
            color: "#6b7280",
            strokeDasharray: "5 5",
          },
        ];
        break;

      case ScenarioId.IPOPerYear:
        // Custom data for IPO per year
        const ipoYears = [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ];
        const ipoCounts = [8, 10, 12, 15, 14, 18, 25, 5, 12]; // Total 119

        return {
          chartData: ipoYears.map((year, i) => ({
            period: year,
            ipo_count: ipoCounts[i],
          })),
          customSeries: [
            {
              dataKey: "ipo_count",
              name: "# IPO per year",
              color: "#2B57FF",
            },
          ],
        };
    }

    // Merge specific data into base points
    const finalData = basePoints.map((point, index) => ({
      ...point,
      specific_scenario: specificData[index],
    }));

    return { chartData: finalData, customSeries: series };
  }, [selectedScenario]);

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <ScenarioSidebar
          selectedScenario={selectedScenario}
          onSelectScenario={setSelectedScenario}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-hidden">
          <div className="max-w-[1400px] mx-auto h-full">
            <div className="h-full">
              <AdvancedRevenueChart
                data={chartData}
                customSeries={customSeries}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
