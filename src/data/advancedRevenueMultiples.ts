import {
  MarketType,
  Stage,
  InvestmentType,
  Sector,
  AdvancedDataPoint,
} from "@/types/filters";

// Comprehensive mock data structure
// Format: [marketType][stage][investmentType][sector][period] = value
type DataStructure = {
  [key in MarketType]: {
    [key in Stage]: {
      [key in InvestmentType]: {
        [key in Sector]: number[];
      };
    };
  };
};

const periods = [
  "S1 2020",
  "S2 2020",
  "S1 2021",
  "S2 2021",
  "S1 2022",
  "S2 2022",
  "S1 2023",
  "S2 2023",
  "S1 2024",
  "S2 2024",
  "S1 2025",
];

// Mock data with realistic trends
const mockData: DataStructure = {
  [MarketType.VentureCapital]: {
    [Stage.EarlyStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [
          11.5, 10.8, 12.2, 13.5, 15.2, 14.1, 11.2, 12.5, 13.8, 14.5, 13.9,
        ],
        [Sector.Climate]: [
          6.2, 6.8, 7.5, 9.2, 11.5, 9.8, 7.5, 8.1, 9.2, 10.1, 10.8,
        ],
        [Sector.ESante]: [
          8.5, 8.8, 9.2, 9.6, 9.9, 9.5, 8.7, 8.9, 9.3, 9.6, 9.4,
        ],
        [Sector.Fintech]: [
          10.8, 10.2, 11.5, 12.8, 10.5, 8.2, 6.5, 7.1, 8.2, 8.9, 8.5,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [
          9.2, 8.8, 9.8, 10.8, 12.2, 11.5, 9.0, 9.8, 10.5, 11.2, 10.8,
        ],
        [Sector.Climate]: [
          4.8, 5.2, 6.1, 7.5, 9.2, 7.8, 5.5, 6.2, 7.1, 8.0, 8.5,
        ],
        [Sector.ESante]: [
          7.1, 7.5, 7.9, 8.3, 8.6, 8.2, 7.3, 7.6, 7.9, 8.2, 8.0,
        ],
        [Sector.Fintech]: [
          8.9, 8.5, 9.5, 10.5, 8.8, 7.2, 5.5, 6.0, 6.8, 7.4, 7.1,
        ],
      },
    },
    [Stage.LateStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [
          8.8, 8.5, 9.2, 10.1, 11.5, 10.8, 8.5, 9.1, 9.9, 10.5, 10.2,
        ],
        [Sector.Climate]: [
          4.5, 5.0, 5.8, 7.2, 9.1, 7.5, 5.2, 5.8, 6.8, 7.5, 8.2,
        ],
        [Sector.ESante]: [
          6.8, 7.1, 7.5, 7.8, 8.1, 7.7, 6.9, 7.2, 7.5, 7.8, 7.6,
        ],
        [Sector.Fintech]: [
          8.2, 7.9, 8.8, 9.8, 8.1, 6.8, 5.2, 5.6, 6.5, 7.0, 6.8,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [7.2, 6.9, 7.6, 8.4, 9.6, 9.0, 7.0, 7.5, 8.2, 8.7, 8.4],
        [Sector.Climate]: [
          3.8, 4.2, 4.9, 6.1, 7.8, 6.2, 4.2, 4.8, 5.6, 6.2, 6.8,
        ],
        [Sector.ESante]: [
          5.8, 6.1, 6.5, 6.8, 7.1, 6.7, 5.9, 6.2, 6.5, 6.8, 6.6,
        ],
        [Sector.Fintech]: [
          7.0, 6.7, 7.5, 8.4, 7.0, 5.8, 4.5, 4.9, 5.6, 6.1, 5.9,
        ],
      },
    },
  },
  [MarketType.PrivateEquity]: {
    [Stage.EarlyStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [7.2, 7.0, 7.8, 8.6, 9.8, 9.2, 7.0, 7.5, 8.2, 8.9, 8.5],
        [Sector.Climate]: [
          4.2, 4.6, 5.2, 6.5, 8.2, 6.8, 4.5, 5.0, 5.8, 6.5, 7.1,
        ],
        [Sector.ESante]: [
          5.5, 5.9, 6.3, 6.7, 7.0, 6.6, 5.6, 5.9, 6.3, 6.6, 6.4,
        ],
        [Sector.Fintech]: [
          6.8, 6.5, 7.2, 8.0, 6.5, 5.2, 4.0, 4.4, 5.1, 5.6, 5.3,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [5.8, 5.6, 6.2, 6.9, 7.8, 7.3, 5.5, 6.0, 6.6, 7.1, 6.8],
        [Sector.Climate]: [
          3.2, 3.6, 4.2, 5.2, 6.5, 5.2, 3.5, 4.0, 4.7, 5.2, 5.8,
        ],
        [Sector.ESante]: [
          4.5, 4.9, 5.2, 5.6, 5.9, 5.5, 4.6, 4.9, 5.2, 5.5, 5.3,
        ],
        [Sector.Fintech]: [
          5.5, 5.2, 5.9, 6.7, 5.5, 4.5, 3.5, 3.8, 4.4, 4.8, 4.6,
        ],
      },
    },
    [Stage.LateStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [5.8, 5.6, 6.2, 6.8, 7.8, 7.3, 5.5, 5.9, 6.5, 7.0, 6.7],
        [Sector.Climate]: [
          3.0, 3.4, 4.0, 5.0, 6.5, 5.2, 3.2, 3.7, 4.4, 5.0, 5.5,
        ],
        [Sector.ESante]: [
          4.2, 4.6, 4.9, 5.3, 5.6, 5.2, 4.3, 4.6, 4.9, 5.2, 5.0,
        ],
        [Sector.Fintech]: [
          5.5, 5.2, 5.8, 6.5, 5.5, 4.5, 3.2, 3.6, 4.2, 4.6, 4.4,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [4.8, 4.6, 5.1, 5.7, 6.5, 6.1, 4.5, 4.9, 5.4, 5.8, 5.6],
        [Sector.Climate]: [
          2.5, 2.9, 3.4, 4.2, 5.5, 4.2, 2.7, 3.1, 3.7, 4.2, 4.7,
        ],
        [Sector.ESante]: [
          3.5, 3.8, 4.1, 4.5, 4.8, 4.4, 3.6, 3.8, 4.1, 4.4, 4.2,
        ],
        [Sector.Fintech]: [
          4.5, 4.3, 4.8, 5.5, 4.5, 3.7, 2.8, 3.1, 3.6, 3.9, 3.7,
        ],
      },
    },
  },
  [MarketType.PublicMarkets]: {
    [Stage.EarlyStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [6.5, 6.2, 6.9, 7.5, 8.5, 8.0, 6.0, 6.5, 7.2, 7.8, 7.5],
        [Sector.Climate]: [
          3.5, 3.9, 4.5, 5.5, 7.0, 5.8, 3.7, 4.2, 4.9, 5.6, 6.2,
        ],
        [Sector.ESante]: [
          4.8, 5.2, 5.6, 6.0, 6.3, 5.9, 4.9, 5.2, 5.6, 5.9, 5.7,
        ],
        [Sector.Fintech]: [
          6.0, 5.7, 6.4, 7.2, 5.8, 4.8, 3.5, 3.9, 4.6, 5.1, 4.9,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [5.2, 5.0, 5.6, 6.1, 7.0, 6.5, 5.0, 5.4, 5.9, 6.4, 6.1],
        [Sector.Climate]: [
          2.8, 3.2, 3.7, 4.6, 5.9, 4.8, 3.0, 3.4, 4.0, 4.6, 5.1,
        ],
        [Sector.ESante]: [
          4.0, 4.3, 4.7, 5.0, 5.3, 4.9, 4.1, 4.4, 4.7, 5.0, 4.8,
        ],
        [Sector.Fintech]: [
          5.0, 4.7, 5.3, 6.0, 4.8, 4.0, 3.0, 3.3, 3.9, 4.3, 4.1,
        ],
      },
    },
    [Stage.LateStage]: {
      [InvestmentType.Growth]: {
        [Sector.AI]: [5.2, 5.0, 5.6, 6.1, 7.0, 6.5, 5.0, 5.4, 5.9, 6.4, 6.1],
        [Sector.Climate]: [
          2.5, 2.9, 3.4, 4.2, 5.5, 4.4, 2.7, 3.1, 3.7, 4.3, 4.8,
        ],
        [Sector.ESante]: [
          3.8, 4.1, 4.5, 4.8, 5.1, 4.7, 3.9, 4.2, 4.5, 4.8, 4.6,
        ],
        [Sector.Fintech]: [
          4.8, 4.6, 5.1, 5.8, 4.6, 3.8, 2.7, 3.0, 3.6, 4.0, 3.8,
        ],
      },
      [InvestmentType.Buyout]: {
        [Sector.AI]: [4.2, 4.0, 4.5, 5.0, 5.8, 5.4, 4.0, 4.3, 4.8, 5.2, 5.0],
        [Sector.Climate]: [
          2.0, 2.3, 2.7, 3.4, 4.5, 3.5, 2.2, 2.5, 3.0, 3.5, 4.0,
        ],
        [Sector.ESante]: [
          3.0, 3.3, 3.6, 3.9, 4.2, 3.8, 3.1, 3.3, 3.6, 3.9, 3.7,
        ],
        [Sector.Fintech]: [
          3.8, 3.6, 4.0, 4.6, 3.7, 3.0, 2.2, 2.4, 2.9, 3.2, 3.0,
        ],
      },
    },
  },
};

export function getFilteredData(
  marketType: MarketType,
  stage: Stage,
  investmentType: InvestmentType,
  selectedSectors: Set<Sector>
): AdvancedDataPoint[] {
  const data = mockData[marketType][stage][investmentType];

  return periods.map((period, index) => {
    const dataPoint: AdvancedDataPoint = { period };

    selectedSectors.forEach((sector) => {
      dataPoint[sector] = data[sector][index];
    });

    // Calculate average if multiple sectors selected
    if (selectedSectors.size > 0) {
      const values = Array.from(selectedSectors).map(
        (sector) => data[sector][index]
      );
      dataPoint.average = values.reduce((a, b) => a + b, 0) / values.length;
    }

    return dataPoint;
  });
}

export { periods };
