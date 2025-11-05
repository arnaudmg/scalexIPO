"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  backgroundColor = "bg-gray-50",
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center snap-start snap-always ${backgroundColor} ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-16"
        initial={{ y: 50 }}
        animate={isInView ? { y: 0 } : { y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

