export interface StockExchange {
  name: string;
  shortName: string;
  country: string;
  flag: string;
  ipoCount: number;
  isGroup?: boolean;
}

// Individual Stock Exchanges
export const individualExchanges: StockExchange[] = [
  {
    name: "Frankfurt Stock Exchange",
    shortName: "FRANKFURT SE",
    country: "Germany",
    flag: "🇪🇺",
    ipoCount: 19,
  },
  {
    name: "London Stock Exchange",
    shortName: "LONDON SE",
    country: "United Kingdom",
    flag: "🇬🇧",
    ipoCount: 17,
  },
  {
    name: "NASDAQ",
    shortName: "NASDAQ",
    country: "United States",
    flag: "🇺🇸",
    ipoCount: 14,
  },
  {
    name: "New York Stock Exchange",
    shortName: "NEW YORK SE",
    country: "United States",
    flag: "🇺🇸",
    ipoCount: 11,
  },
  {
    name: "Euronext Paris",
    shortName: "EURONEXT PARIS",
    country: "France",
    flag: "🇪🇺",
    ipoCount: 10,
  },
  {
    name: "NASDAQ Stockholm",
    shortName: "NASDAQ SE",
    country: "Sweden",
    flag: "🇪🇺",
    ipoCount: 10,
  },
  {
    name: "Euronext Amsterdam",
    shortName: "EURONEXT AMSTERDAM",
    country: "Netherlands",
    flag: "🇪🇺",
    ipoCount: 6,
  },
  {
    name: "Euronext Oslo",
    shortName: "EURONEXT OSLO",
    country: "Norway",
    flag: "🇪🇺",
    ipoCount: 6,
  },
];

// Exchange Groups
export const exchangeGroups: StockExchange[] = [
  {
    name: "Euronext",
    shortName: "EURONEXT",
    country: "Pan-European",
    flag: "🇪🇺",
    ipoCount: 29,
    isGroup: true,
  },
  {
    name: "Deutsche Börse",
    shortName: "DEUTSCHE BORSE",
    country: "Germany",
    flag: "🇪🇺",
    ipoCount: 19,
    isGroup: true,
  },
  {
    name: "NASDAQ Nordic",
    shortName: "NASDAQ NORDIQ",
    country: "Nordic",
    flag: "🇪🇺",
    ipoCount: 17,
    isGroup: true,
  },
  {
    name: "London Stock Exchange Group",
    shortName: "LONDON SE",
    country: "United Kingdom",
    flag: "🇬🇧",
    ipoCount: 17,
    isGroup: true,
  },
  {
    name: "NASDAQ",
    shortName: "NASDAQ",
    country: "United States",
    flag: "🇺🇸",
    ipoCount: 14,
    isGroup: true,
  },
  {
    name: "New York Stock Exchange",
    shortName: "NEW YORK SE",
    country: "United States",
    flag: "🇺🇸",
    ipoCount: 11,
    isGroup: true,
  },
  {
    name: "SIX Swiss Exchange",
    shortName: "SIX GROUP",
    country: "Switzerland",
    flag: "🇨🇭",
    ipoCount: 5,
    isGroup: true,
  },
  {
    name: "Warsaw Stock Exchange",
    shortName: "WARSAW SE",
    country: "Poland",
    flag: "🇪🇺",
    ipoCount: 3,
    isGroup: true,
  },
];
