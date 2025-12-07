import React from "react";
import { cn } from "@/lib/utils";

export enum ScenarioId {
  GlobalIndex = "global_index",
  EarlyStageVC = "early_stage_vc",
  LateStageVC = "late_stage_vc",
  GrowthPE = "growth_pe",
  LBO_PE = "lbo_pe",
  Listed = "listed",
  AI = "ai",
  Cleantech = "cleantech",
  EHealth = "ehealth",
  SaaS = "saas",
  IPOPerYear = "ipo_per_year",
}

interface ScenarioSidebarProps {
  selectedScenario: ScenarioId;
  onSelectScenario: (scenario: ScenarioId) => void;
}

export const SCENARIO_GROUPS = [
  {
    title: "Private Revenue Multiple Index",
    scenarios: [
      {
        id: ScenarioId.GlobalIndex,
        label: "Eurotech Index",
      },
      {
        id: ScenarioId.EarlyStageVC,
        label: "Eurotech Early Stage Venture",
      },
      {
        id: ScenarioId.LateStageVC,
        label: "Eurotech Late Stage Venture",
      },
      {
        id: ScenarioId.GrowthPE,
        label: "Eurotech Growth PE",
      },
      {
        id: ScenarioId.LBO_PE,
        label: "Eurotech LBO - PE",
      },
      {
        id: ScenarioId.Listed,
        label: "Eurotech Listed",
      },
      {
        id: ScenarioId.AI,
        label: "Eurotech AI",
      },
      {
        id: ScenarioId.Cleantech,
        label: "Eurotech Cleantech & Energy",
      },
      {
        id: ScenarioId.EHealth,
        label: "Eurotech E-Health",
      },
      {
        id: ScenarioId.SaaS,
        label: "Eurotech SAAS",
      },
    ],
  },
  {
    title: "European Tech IPO Index",
    scenarios: [
      {
        id: ScenarioId.IPOPerYear,
        label: "# IPO per year",
      },
    ],
  },
];

export default function ScenarioSidebar({
  selectedScenario,
  onSelectScenario,
}: ScenarioSidebarProps) {
  return (
    <aside className="bg-white border-r border-gray-200 h-full overflow-y-auto w-80 flex-shrink-0">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-900 mb-6 uppercase tracking-wide">
          ScaleX Invest Private Market Indexes
        </h3>

        <div className="space-y-8">
          {SCENARIO_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h4 className="text-xs font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider">
                {group.title}
              </h4>
              <div className="space-y-1">
                {group.scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => onSelectScenario(scenario.id)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors",
                      selectedScenario === scenario.id
                        ? "bg-[#2B57FF] text-white font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    {scenario.label}
                    {scenario.id !== ScenarioId.GlobalIndex &&
                      scenario.id !== ScenarioId.IPOPerYear && (
                        <span className="block text-[10px] opacity-80 mt-0.5 font-normal">
                          vs Eurotech Revenue Multiple
                        </span>
                      )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
