"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const menuItems = [
    { name: "Products", hasDropdown: true },
    { name: "Sectors", hasDropdown: true },
    { name: "Data", hasDropdown: false },
    { name: "About", hasDropdown: true },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="ScaleX Invest Logo"
                width={150}
                height={30}
                priority
                className="h-8 w-auto cursor-pointer"
              />
            </Link>

            {/* Quick Links */}
            <div className="flex items-center gap-4 ml-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "text-[#2B57FF]"
                    : "text-gray-600 hover:text-[#2B57FF]"
                }`}
              >
                Overview
              </Link>
              <Link
                href="/comparison"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/comparison"
                    ? "text-[#2B57FF]"
                    : "text-gray-600 hover:text-[#2B57FF]"
                }`}
              >
                Comparison
              </Link>
              <Link
                href="/ipo"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/ipo"
                    ? "text-[#2B57FF]"
                    : "text-gray-600 hover:text-[#2B57FF]"
                }`}
              >
                IPO
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#2B57FF] transition-colors">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown placeholder */}
                {item.hasDropdown && hoveredMenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                    <p className="text-sm text-gray-500">Coming soon...</p>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
