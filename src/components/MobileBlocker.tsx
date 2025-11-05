"use client";

import { Download } from "lucide-react";
import Image from "next/image";

interface MobileBlockerProps {
  show: boolean;
}

export default function MobileBlocker({ show }: MobileBlockerProps) {
  if (!show) return null;
  const handleDownloadPDF = () => {
    window.open(
      "/DRAFT VERSION - European Tech IPO - 2025 Edition (1).pdf",
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#2B57FF] via-[#1E40AF] to-[#1a365d] flex items-center justify-center p-6 lg:hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
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
              width={130}
              height={16}
              className="opacity-80"
              priority
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-light text-white mb-8 tracking-tight">
          European Tech IPO Barometer
        </h1>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <p className="text-base sm:text-lg font-light text-white/90 leading-relaxed mb-6">
            For the best experience exploring this barometer, please view this
            content on desktop, or download the PDF.
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownloadPDF}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-[#2B57FF] rounded-xl font-medium hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Alternative link */}
        <p className="text-sm text-white/60 font-light">
          Learn more about{" "}
          <a
            href="https://www.scalex-invest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/90 transition-colors"
          >
            ScaleX Invest
          </a>
        </p>
      </div>
    </div>
  );
}

