"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                className="relative flex items-center justify-end group"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute right-12 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {section.title}
                      <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  className="relative w-3 h-3 rounded-full cursor-pointer transition-all"
                  animate={{
                    scale: isActive ? 1.5 : 1,
                    backgroundColor: isActive ? "#2B57FF" : "#D1D5DB",
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#2B57FF]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  )}
                </motion.button>
              </div>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-[#2B57FF] text-white p-4 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute bottom-24 right-6 bg-white rounded-xl shadow-2xl p-4 w-64"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
            >
              <div className="space-y-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#2B57FF] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {section.title}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

