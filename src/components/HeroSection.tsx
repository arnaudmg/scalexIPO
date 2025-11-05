"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/690b82bc82d183de4e404d15_WHITE%20PAPER%20-%20European%20Tech%20IPOs%20-%202025%20Edition.pdf';
    link.download = 'European-Tech-IPO-2025-Edition.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareLinkedIn = () => {
    const url = window.location.href;
    const text =
      "European Tech IPO 2025 Edition - A comprehensive analysis by ScaleX Invest";
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="snap-start relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2B57FF] via-[#1E40AF] to-[#1a365d]"
    >
      {/* Animated background elements - more subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Share buttons - top right */}
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8 flex gap-2 sm:gap-3 z-20">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <Download size={16} />
          <span className="text-xs font-light hidden md:inline">PDF</span>
        </button>

        <button
          onClick={handleShareLinkedIn}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
        >
          <Image
            src="/lkd-logo.svg"
            alt="LinkedIn"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span className="text-xs font-light hidden md:inline">LinkedIn</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div>
          {/* Logo "by ScaleX Invest" */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-white/50 text-xs font-light tracking-[0.2em] uppercase">
              by
            </span>
            <a
              href="https://www.scalex-invest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-100"
            >
              <Image
                src="/logo-white.svg"
                alt="ScaleX Invest"
                width={150}
                height={18}
                className="opacity-80"
                priority
              />
            </a>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-4 tracking-tight">
            European Tech IPO Barometer
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-extralight text-white/80 mb-10 tracking-wide">
            2025 Edition
          </div>

          {/* Subtle divider */}
          <div className="w-16 h-px bg-white/30 mx-auto mb-10" />

          <p className="text-sm sm:text-base md:text-lg font-light text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            A comprehensive analysis of European technology IPOs, market
            performance, and valuation trends
          </p>
        </div>
      </div>
    </section>
  );
}
