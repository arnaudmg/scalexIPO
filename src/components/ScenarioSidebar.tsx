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

export const SCENARIOS = [
  {
    id: ScenarioId.GlobalIndex,
    label: "Eurotech Index Revenue Multiple",
  },
  {
    id: ScenarioId.EarlyStageVC,
    label: "Eurotech Early Stage Venture - Revenue Multiple",
  },
  {
    id: ScenarioId.LateStageVC,
    label: "Eurotech Late Stage Venture - Revenue Multiple",
  },
  {
    id: ScenarioId.GrowthPE,
    label: "Eurotech Growth PE Revenue Multiple",
  },
  {
    id: ScenarioId.LBO_PE,
    label: "Eurotech LBO - PE Revenue Multiple",
  },
  {
    id: ScenarioId.Listed,
    label: "Eurotech Listed - Revenue Multiple",
  },
  {
    id: ScenarioId.AI,
    label: "Eurotech AI - Revenue Multiple",
  },
  {
    id: ScenarioId.Cleantech,
    label: "Eurotech Cleantech & Energy - Revenue Multiple",
  },
  {
    id: ScenarioId.EHealth,
    label: "Eurotech E-Health - Revenue Multiple",
  },
  {
    id: ScenarioId.SaaS,
    label: "Eurotech SAAS - Revenue Multiple",
  },
  {
    id: ScenarioId.IPOPerYear,
    label: "European Tech IPO Index - # IPO per year",
  },
];

export default function ScenarioSidebar({
  selectedScenario,
  onSelectScenario,
}: ScenarioSidebarProps) {
  return (
    <aside className="bg-white border-r border-gray-200 h-full overflow-y-auto w-80 flex-shrink-0">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
          Scenarios
        </h3>
        <div className="space-y-1">
          {SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => onSelectScenario(scenario.id)}
              className={cn(
                "w-full text-left px-3 py-3 text-sm rounded-lg transition-colors",
                selectedScenario === scenario.id
                  ? "bg-[#2B57FF] text-white font-medium"
                  : "hover:bg-gray-50 text-gray-700"
              )}
            >
              {scenario.label}
              {scenario.id !== ScenarioId.GlobalIndex &&
                scenario.id !== ScenarioId.IPOPerYear && (
                  <span className="block text-[10px] opacity-80 mt-1 font-normal">
                    vs Eurotech Revenue Multiple
                  </span>
                )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
