"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface InsightQuoteProps {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
  className?: string;
}

export default function InsightQuote({
  quote,
  author,
  role,
  imageSrc,
  className = "",
}: InsightQuoteProps) {
  return (
    <motion.div
      className={`bg-gray-50 rounded-lg p-2.5 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start gap-2">
        {/* Small Avatar Circle */}
        <div className="flex-shrink-0">
          {imageSrc ? (
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
              <Image
                src={imageSrc}
                alt={author}
                width={32}
                height={32}
                className="object-cover w-full h-full object-top"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B57FF] to-[#1E40AF] flex items-center justify-center">
              <span className="text-[10px] font-semibold text-white">
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-600 font-light leading-tight">
            {quote}
          </p>
          <div className="mt-1 text-[10px] text-gray-500">
            <span className="font-medium text-gray-700">{author}</span>, {role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
