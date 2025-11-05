"use client";

import { motion } from "motion/react";
import { Download, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function ShareFooter() {
  const handleDownloadPDF = () => {
    window.open("/DRAFT VERSION - European Tech IPO - 2025 Edition (1).pdf", "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = window.location.href;
    const text = "European Tech IPO 2025 Edition - A comprehensive analysis by ScaleX Invest";
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto mt-12 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-8" />

      {/* Share section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
        {/* Left side - Text */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-light text-gray-900 mb-1">
            Share this report
          </h3>
          <p className="text-xs text-gray-500 font-light">
            Help others discover insights on European Tech IPOs
          </p>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2B57FF] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-sm"
          >
            <Download size={16} />
            <span className="text-xs font-light">Download PDF</span>
          </button>

          <button
            onClick={handleShareLinkedIn}
            className="flex items-center justify-center w-10 h-10 bg-[#0077B5] border border-[#0077B5] rounded-lg text-white transition-all hover:shadow-lg"
            title="Share on LinkedIn"
          >
            <Image
              src="/lkd-logo.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="w-[18px] h-[18px] brightness-0 invert"
            />
          </button>

          <div className="w-px h-8 bg-gray-200 mx-2" />

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-lg hover:border-[#2B57FF] hover:bg-[#2B57FF] hover:text-white text-gray-700 transition-colors"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400 font-light">
          © 2025 ScaleX Invest. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}

