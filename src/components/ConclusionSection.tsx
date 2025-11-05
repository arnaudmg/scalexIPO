"use client";

export default function ConclusionSection() {
  const conclusions = [
    {
      id: 1,
      title: "Europe has strong fundamentals to compete with the US",
      description:
        "European stock exchanges account for 76% of tech listings since 2015, confirming their central role in tech IPO activity. Euronext, Deutsche Börse, Nasdaq Nordic, and the London Stock Exchange capture the majority of listings, reflecting the credibility of Europe's capital markets.",
      subtext:
        "While US venues remain the destination of choice for the largest global players, competition is often too intense for smaller, less mature companies, which tend to favour European exchanges offering greater investor proximity and valuation discipline.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Performance gap widens between mature and smaller issuers",
      description:
        "Post-IPO performance remains broadly disappointing, with most European tech IPOs still trading below their offering price three years after listing. The underperformance is largely driven by less mature companies, often below the €1 billion revenue mark, facing limited analyst coverage, weaker liquidity, and growing investor caution toward unpredictable models.",
      subtext:
        "By contrast, larger issuers benefit from better visibility and stronger investor confidence, sustaining more stable valuations and confirming that scale and maturity remain key performance drivers.",
      color: "from-orange-500 to-red-500",
      icon: "📊",
    },
    {
      id: 3,
      title: "AI optimism lifts valuations across sectors",
      description:
        "The recovery observed in 2024 and early 2025 has been fuelled by AI-related segments, particularly corporate services, customer experience, and fintech. These sectors benefited from renewed enthusiasm around productivity-enhancing technologies, driving higher revenue multiples and healthier post-IPO trajectories.",
      subtext: "",
      color: "from-purple-500 to-indigo-600",
      icon: "🤖",
    },
    {
      id: 4,
      title: "Cleantech's structural headwinds persist",
      description:
        "In contrast, Cleantech and Climate Tech continue to face valuation compression amid policy uncertainty and weaker investor appetite. Their capital intensity and longer time-to-profitability expose them to changing political priorities — particularly in the US, where reduced support for climate initiatives has dampened investor sentiment — limiting short-term recovery prospects despite strong long-term fundamentals.",
      subtext: "",
      color: "from-green-600 to-teal-600",
      icon: "🌱",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] text-white rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-3">Conclusion</h2>
      </div>

      {/* Main Conclusion Card */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="prose max-w-none">
          {conclusions.map((conclusion, index) => (
            <div key={conclusion.id} className="mb-8 last:mb-0">
              {/* Title with colored background */}
              <div
                className={`bg-gradient-to-r ${conclusion.color} text-white px-6 py-4 rounded-lg mb-4 flex items-center gap-3`}
              >
                <span className="text-3xl">{conclusion.icon}</span>
                <h3 className="text-xl font-bold m-0">{conclusion.title}</h3>
              </div>

              {/* Content */}
              <div className="pl-4 border-l-4 border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-3">
                  {conclusion.description}
                </p>
                {conclusion.subtext && (
                  <p className="text-gray-600 leading-relaxed text-sm italic">
                    {conclusion.subtext}
                  </p>
                )}
              </div>

              {/* Divider between sections */}
              {index < conclusions.length - 1 && (
                <hr className="my-8 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner with ScaleX Invest branding */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] text-white rounded-xl p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <h3 className="text-2xl font-bold">ScaleX Invest</h3>
        </div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          European Tech IPO - 2025 Edition
        </p>
        <p className="text-gray-400 text-sm mt-4">
          This analysis is based on a comprehensive study of European tech IPOs,
          examining geographical coverage, valuation multiples, market
          performance trends, and post-IPO stock performance across sectors.
        </p>
      </div>
    </div>
  );
}
