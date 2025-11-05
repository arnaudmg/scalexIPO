export interface CountryIPOData {
  name: string;
  isoCode: string;
  count: number;
  companies: string[];
  alternateNames?: string[]; // For matching with GeoJSON
  coordinates: [number, number]; // [longitude, latitude] for annotation placement
}

export const ipoData: CountryIPOData[] = [
  {
    name: "United Kingdom",
    isoCode: "GBR",
    count: 27,
    companies: ["Arm Holdings", "WorldPay", "Farfetch"],
    alternateNames: ["UK", "Great Britain", "Britain"],
    coordinates: [-2, 54],
  },
  {
    name: "Germany",
    isoCode: "DEU",
    count: 19,
    companies: ["Siemens Energy", "Vantage Towers", "AUTO1 Group"],
    coordinates: [10.5, 51],
  },
  {
    name: "Denmark",
    isoCode: "DNK",
    count: 12,
    companies: ["Nets", "Netcompany A/S", "Trustpilot"],
    coordinates: [10, 56],
  },
  {
    name: "Norway",
    isoCode: "NOR",
    count: 12,
    companies: ["AutoStore", "Link Mobility", "Opera"],
    coordinates: [9, 61],
  },
  {
    name: "France",
    isoCode: "FRA",
    count: 9,
    companies: ["OVHcloud", "Aramis Group", "Exclusive Networks"],
    coordinates: [2.5, 47],
  },
  {
    name: "Switzerland",
    isoCode: "CHE",
    count: 8,
    companies: ["Sportradar", "Landis+Gyr", "Energy Vault"],
    coordinates: [8, 47],
  },
  {
    name: "Sweden",
    isoCode: "SWE",
    count: 7,
    companies: ["Spotify", "Polestar", "Truecaller"],
    coordinates: [15, 62],
  },
  {
    name: "Netherlands",
    isoCode: "NLD",
    count: 5,
    companies: ["Adyen", "Adevinta", "Elastic"],
    coordinates: [5.5, 52.5],
  },
  {
    name: "Belgium",
    isoCode: "BEL",
    count: 5,
    companies: ["Syensqo", "X-FAB Silicon Foundries", "Unifiedpost Group"],
    coordinates: [4.5, 50.5],
  },
  {
    name: "Spain",
    isoCode: "ESP",
    count: 5,
    companies: ["Allfunds Bank", "Gestamp", "Befesa Medio Ambiente"],
    coordinates: [-4, 40],
  },
  {
    name: "Austria",
    isoCode: "AUT",
    count: 3,
    companies: ["Vienna BioTech", "Alpine Energy", "Smart Industries"],
    coordinates: [13.5, 47.5],
  },
  {
    name: "Czech Republic",
    isoCode: "CZE",
    count: 3,
    companies: ["Prague Tech Hub", "Czech AI Systems", "BioPharm Praha"],
    alternateNames: ["Czechia"],
    coordinates: [15, 49.8],
  },
  {
    name: "Finland",
    isoCode: "FIN",
    count: 3,
    companies: [
      "Terveystalo Healthcare",
      "Rovio Entertainment Corporation",
      "Spinnova",
    ],
    coordinates: [26, 64],
  },
  {
    name: "Poland",
    isoCode: "POL",
    count: 2,
    companies: ["Grupa Pracuj", "STS Holding"],
    coordinates: [19, 52],
  },
  {
    name: "Italy",
    isoCode: "ITA",
    count: 2,
    companies: ["Nexi", "GVS"],
    coordinates: [12.5, 42.8],
  },
  {
    name: "Portugal",
    isoCode: "PRT",
    count: 2,
    companies: ["Greenvolt – Energias Renováveis"],
    coordinates: [-8, 39.5],
  },
  {
    name: "Ireland",
    isoCode: "IRL",
    count: 1,
    companies: ["Dublin Cloud Systems"],
    coordinates: [-8, 53.5],
  },
  {
    name: "Romania",
    isoCode: "ROU",
    count: 1,
    companies: ["UiPath"],
    coordinates: [25, 46],
  },
  {
    name: "Bulgaria",
    isoCode: "BGR",
    count: 1,
    companies: ["Sofia Tech Solutions"],
    coordinates: [25, 43],
  },
  {
    name: "Greece",
    isoCode: "GRC",
    count: 1,
    companies: ["Athens Innovation Hub"],
    coordinates: [22, 39],
  },
  {
    name: "Iceland",
    isoCode: "ISL",
    count: 1,
    companies: ["Reykjavik GreenTech"],
    coordinates: [-19, 65],
  },
  {
    name: "Turkey",
    isoCode: "TUR",
    count: 1,
    companies: ["Hepsiburada.com"],
    alternateNames: ["Türkiye"],
    coordinates: [35, 39],
  },
  {
    name: "Cyprus",
    isoCode: "CYP",
    count: 1,
    companies: ["GDEV"],
    coordinates: [33, 35],
  },
  {
    name: "Israel",
    isoCode: "ISR",
    count: 1,
    companies: ["Global-e"],
    coordinates: [35, 31.5],
  },
  {
    name: "Lithuania",
    isoCode: "LTU",
    count: 2,
    companies: ["Ignitis Group", "Baltic Classifieds Group"],
    coordinates: [24, 55.5],
  },
  {
    name: "Luxembourg",
    isoCode: "LUX",
    count: 3,
    companies: ["Allegro", "InPost", "Global Fashion Group"],
    coordinates: [6.1, 49.8],
  },
];

// Calculate color based on IPO count
export function getColorForCount(count: number): string {
  const maxCount = Math.max(...ipoData.map((d) => d.count));
  const minCount = Math.min(
    ...ipoData.filter((d) => d.count > 0).map((d) => d.count)
  );

  if (count === 0) {
    return "#E5E7EB"; // Light gray for countries with no data
  }

  // Normalize the count to 0-1 range
  const normalized = (count - minCount) / (maxCount - minCount);

  // Blue color scale from light to dark
  const lightBlue = { r: 147, g: 197, b: 253 }; // #93C5FD (blue-300)
  const mediumBlue = { r: 59, g: 130, b: 246 }; // #3B82F6 (blue-500)
  const darkBlue = { r: 30, g: 58, b: 138 }; // #1E3A8A (blue-900)

  // Use a two-step gradient for better contrast
  let color;
  if (normalized < 0.5) {
    const localNorm = normalized * 2;
    color = {
      r: Math.round(lightBlue.r + (mediumBlue.r - lightBlue.r) * localNorm),
      g: Math.round(lightBlue.g + (mediumBlue.g - lightBlue.g) * localNorm),
      b: Math.round(lightBlue.b + (mediumBlue.b - lightBlue.b) * localNorm),
    };
  } else {
    const localNorm = (normalized - 0.5) * 2;
    color = {
      r: Math.round(mediumBlue.r + (darkBlue.r - mediumBlue.r) * localNorm),
      g: Math.round(mediumBlue.g + (darkBlue.g - mediumBlue.g) * localNorm),
      b: Math.round(mediumBlue.b + (darkBlue.b - mediumBlue.b) * localNorm),
    };
  }

  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

// Get IPO data for a country by ISO code
export function getCountryData(isoCode: string): CountryIPOData | undefined {
  return ipoData.find((d) => d.isoCode === isoCode);
}

// Get IPO data by matching GeoJSON country name
export function getCountryDataByGeoName(
  geoName: string
): CountryIPOData | undefined {
  const normalizedGeoName = geoName.toLowerCase().trim();

  return ipoData.find((d) => {
    const normalizedName = d.name.toLowerCase();

    // Exact match
    if (normalizedName === normalizedGeoName) {
      return true;
    }

    // Check alternate names if they exist
    if (d.alternateNames) {
      const matchesAlternate = d.alternateNames.some(
        (alt) => alt.toLowerCase() === normalizedGeoName
      );
      if (matchesAlternate) return true;
    }

    // Partial match for compound names
    if (
      normalizedGeoName.includes(normalizedName) ||
      normalizedName.includes(normalizedGeoName)
    ) {
      return true;
    }

    return false;
  });
}
