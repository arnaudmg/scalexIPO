"use client";

import { useState, useMemo } from "react";
// @ts-expect-error - d3-hierarchy types are not available
import { pack, hierarchy, HierarchyNode } from "d3-hierarchy";
import { sectorData } from "@/data/sampleData";

interface SectorNode {
  name: string;
  count: number;
  color: string;
  value: number;
}

interface HierarchyData {
  name: string;
  children?: SectorNode[];
  value?: number;
}

export default function SectorBubbleChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Create hierarchy and pack layout
  const packedData = useMemo(() => {
    const data: HierarchyData = {
      name: "sectors",
      children: sectorData.map((sector) => ({
        ...sector,
        value: sector.count,
      })),
    };

    const root = hierarchy(data)
      .sum((d: HierarchyData) => d.value || 0)
      .sort(
        (a: HierarchyNode<HierarchyData>, b: HierarchyNode<HierarchyData>) =>
          (b.value || 0) - (a.value || 0)
      );

    const packLayout = pack().size([700, 700]).padding(3);

    const packed = packLayout(root);

    return packed.children || [];
  }, []);

  const viewBoxWidth = 700;
  const viewBoxHeight = 700;

  const handleMouseEnter = (
    index: number,
    e: React.MouseEvent<SVGCircleElement>
  ) => {
    setHoveredIndex(index);
    const svg = e.currentTarget.ownerSVGElement;
    if (svg) {
      const rect = svg.getBoundingClientRect();
      const bubble = packedData[index];
      setTooltipPos({
        x: ((bubble.x || 0) / viewBoxWidth) * rect.width,
        y: ((bubble.y || 0) / viewBoxHeight) * rect.height,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
        style={{ maxHeight: "550px" }}
      >
        {packedData.map((node: HierarchyNode<HierarchyData>, index: number) => {
          const isHovered = hoveredIndex === index;
          const data = node.data as SectorNode;
          const words = data.name.split(" ");
          const radius = node.r || 0;
          const fontSize =
            radius > 60 ? "16" : radius > 40 ? "13" : radius > 25 ? "11" : "9";

          return (
            <g key={index}>
              {/* Circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={radius}
                fill={data.color}
                opacity={isHovered ? "0.95" : "0.8"}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
                style={{
                  filter: isHovered ? "brightness(1.1)" : "none",
                }}
              />

              {/* Sector name */}
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                fill="white"
                fontSize={fontSize}
                fontWeight="500"
                className="pointer-events-none select-none"
                dominantBaseline="middle"
              >
                {words.map((word, i) => (
                  <tspan
                    key={i}
                    x={node.x}
                    dy={i === 0 ? `-${(words.length - 1) * 0.5}em` : "1.2em"}
                  >
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold pointer-events-none z-10"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 40}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {packedData[hoveredIndex].data.count} IPOs
        </div>
      )}
    </div>
  );
}
