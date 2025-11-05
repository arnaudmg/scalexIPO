"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Annotation,
} from "react-simple-maps";
import {
  getColorForCount,
  getCountryDataByGeoName,
  ipoData,
} from "@/data/ipoData";

// Using a world TopoJSON file hosted locally
const geoUrl = "/europe.json";

interface TooltipData {
  name: string;
  count: number;
  companies: string[];
  x: number;
  y: number;
}

interface GeoProperties {
  name?: string;
  NAME?: string;
  admin?: string;
  ADMIN?: string;
}

interface GeoFeature {
  properties?: GeoProperties;
  rsmKey?: string;
}

export default function IpoMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (geo: GeoFeature, event: React.MouseEvent) => {
    updateTooltip(geo, event);
  };

  const handleMouseMove = (geo: GeoFeature, event: React.MouseEvent) => {
    updateTooltip(geo, event);
  };

  const updateTooltip = (geo: GeoFeature, event: React.MouseEvent) => {
    // Try different property names that might contain the country name
    const geoName =
      (typeof geo.properties?.name === "string" ? geo.properties.name : "") ||
      (typeof geo.properties?.NAME === "string" ? geo.properties.NAME : "") ||
      (typeof geo.properties?.admin === "string" ? geo.properties.admin : "") ||
      (typeof geo.properties?.ADMIN === "string" ? geo.properties.ADMIN : "") ||
      "";
    const countryData = getCountryDataByGeoName(geoName);

    if (countryData) {
      setTooltip({
        name: countryData.name,
        count: countryData.count,
        companies: countryData.companies,
        x: event.clientX,
        y: event.clientY,
      });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="w-full h-full transition-opacity duration-1000"
        style={{ opacity: isAnimated ? 1 : 0 }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [15, 54],
            scale: 500,
          }}
          width={800}
          height={600}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup center={[15, 54]} zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Try different property names that might contain the country name
                  const geoName =
                    (typeof geo.properties?.name === "string"
                      ? geo.properties.name
                      : "") ||
                    (typeof geo.properties?.NAME === "string"
                      ? geo.properties.NAME
                      : "") ||
                    (typeof geo.properties?.admin === "string"
                      ? geo.properties.admin
                      : "") ||
                    (typeof geo.properties?.ADMIN === "string"
                      ? geo.properties.ADMIN
                      : "") ||
                    "";
                  const countryData = getCountryDataByGeoName(geoName);
                  const isEuropean = countryData !== undefined;
                  const fillColor = countryData
                    ? getColorForCount(countryData.count)
                    : "#F3F4F6";

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fillColor}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          fill: fillColor,
                          stroke: "#FFFFFF",
                          strokeWidth: 0.5,
                        },
                        hover: {
                          fill: isEuropean ? "#2B57FF" : fillColor,
                          stroke: "#FFFFFF",
                          strokeWidth: 0.5,
                          cursor: isEuropean ? "pointer" : "default",
                        },
                        pressed: {
                          fill: fillColor,
                          stroke: "#FFFFFF",
                          strokeWidth: 0.5,
                        },
                      }}
                      onMouseEnter={(event) => handleMouseEnter(geo, event)}
                      onMouseMove={(event) => handleMouseMove(geo, event)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })
              }
            </Geographies>

            {/* Country IPO count annotations */}
            {ipoData.map((country) => (
              <Annotation
                key={country.isoCode}
                subject={country.coordinates}
                dx={0}
                dy={0}
                connectorProps={{
                  stroke: "none",
                }}
              >
                <text
                  x="0"
                  y="0"
                  fontSize={country.count >= 10 ? 12 : 10}
                  fontWeight="bold"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill={
                    country.count >= 15
                      ? "#FFFFFF"
                      : country.count >= 5
                      ? "#1E3A8A"
                      : "#2563EB"
                  }
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {country.count}
                </text>
              </Annotation>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed bg-white rounded-lg shadow-xl border border-gray-200 p-4 pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: tooltip.x + 15,
            top: tooltip.y + 15,
            maxWidth: "280px",
          }}
        >
          <div className="font-semibold text-gray-900 mb-1">{tooltip.name}</div>
          <div className="text-sm text-gray-600 mb-2">
            {tooltip.count} {tooltip.count === 1 ? "IPO" : "IPOs"} since 2015
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="text-xs text-gray-500 mb-1 font-medium">
              Notable Companies:
            </div>
            <ul className="space-y-1">
              {tooltip.companies.map((company, idx) => (
                <li
                  key={idx}
                  className="text-xs text-gray-700 flex items-start"
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{company}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">
          Number of IPOs
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <div
                className="w-6 h-4 rounded"
                style={{ backgroundColor: getColorForCount(1) }}
              />
              <span className="text-xs text-gray-600">1-5</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-6 h-4 rounded"
                style={{ backgroundColor: getColorForCount(10) }}
              />
              <span className="text-xs text-gray-600">6-15</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-6 h-4 rounded"
                style={{ backgroundColor: getColorForCount(20) }}
              />
              <span className="text-xs text-gray-600">16-27</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
