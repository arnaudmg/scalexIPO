"use client";

import { selectionCriteria } from "@/data/sampleData";
import SectorBubbleChart from "./SectorBubbleChart";

export default function SampleSection() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            In the beginning, there is data
          </h1>
          <h2 className="text-2xl font-light mb-3">
            Understanding European Tech IPOs:
          </h2>
          <div className="inline-block bg-white text-[#2B57FF] px-6 py-3 rounded-full text-lg font-medium">
            the sample
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto p-8 space-y-8">
        {/* Two Columns: Criteria + Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Selection Criteria */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Selection criteria for the study
            </h3>
            <div className="space-y-5">
              {selectionCriteria.map((criterion) => (
                <div key={criterion.id} className="flex items-center gap-4">
                  {/* Badge */}
                  <div
                    className={`flex-shrink-0 flex items-center justify-center rounded-full ${
                      criterion.badgeType === "flag"
                        ? "w-14 h-14 bg-white border-2 border-gray-200 text-3xl"
                        : "w-14 h-14 bg-[#2B57FF] text-white font-bold text-sm"
                    }`}
                  >
                    {criterion.badge}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium text-base">
                      {criterion.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sectors Bubble Chart */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sectors</h3>
            <div className="w-full" style={{ minHeight: "400px" }}>
              <SectorBubbleChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
