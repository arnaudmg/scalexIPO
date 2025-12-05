import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              ScaleX Benchmarks
            </h1>
            <p className="text-xl text-gray-600">
              Revenue Multiple Analysis & European Tech IPO Insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Link
              href="/graphs"
              className="group block p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  Interactive Graphs
                </h2>
                <p className="text-blue-100">
                  Compare revenue multiples across markets
                </p>
              </div>
            </Link>

            <Link
              href="/comparison"
              className="group block p-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  Advanced Comparison
                </h2>
                <p className="text-green-100">
                  Deep dive by market type, stage, and sectors
                </p>
              </div>
            </Link>

            <Link
              href="/ipo"
              className="group block p-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  European Tech IPO
                </h2>
                <p className="text-purple-100">
                  Comprehensive IPO performance analysis
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Powered by{" "}
              <a
                href="https://www.scalex-invest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                ScaleX Invest
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
