"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ContactPerson {
  name: string;
  title: string;
  email: string;
  imageSrc?: string;
  gradientFrom: string;
  gradientTo: string;
}

const contacts: ContactPerson[] = [
  {
    name: "Sébastien",
    title: "CEO",
    email: "sebastien@scalex-invest.com",
    imageSrc:
      "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a7bc357d00df854f89_SEBASTIEN_PAILLET-p-800.avif",
    gradientFrom: "#2B57FF",
    gradientTo: "#1E40AF",
  },
  {
    name: "Édouard",
    title: "COO",
    email: "edouard@scalex-invest.com",
    imageSrc:
      "https://cdn.prod.website-files.com/6768190f3c9e0e314dfe94f3/679279a70929472f15dbc335_EDOUARD_THIBAUT-p-800.avif",
    gradientFrom: "#7C3AED",
    gradientTo: "#4C1D95",
  },
];

export default function ContactSection() {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-4 mt-16 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-12" />

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-light text-gray-900 mb-2">Contact Us</h2>
        <p className="text-sm text-gray-500 font-light">
          Get in touch with our team
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.email} contact={contact} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ContactCard({
  contact,
  index,
}: {
  contact: ContactPerson;
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl h-72 shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Background - Image or Gradient */}
      <div className="absolute inset-0">
        {contact.imageSrc && !imageError ? (
          <>
            <Image
              src={contact.imageSrc}
              alt={contact.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          </>
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br transition-all duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${contact.gradientFrom} 0%, ${contact.gradientTo} 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-3xl font-light text-white mb-1.5 tracking-tight">
              {contact.name}
            </h3>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <p className="text-xs text-white font-medium tracking-wider uppercase">
                {contact.title}
              </p>
            </div>
          </div>

          {/* Email Button */}
          <motion.a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl border border-white/30 transition-all duration-300 group/email"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-1.5 bg-white/20 rounded-lg group-hover/email:bg-white/30 transition-colors">
              <Mail size={16} className="text-white" />
            </div>
            <span className="text-sm text-white font-light">
              {contact.email}
            </span>
          </motion.a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
          style={{
            backgroundSize: "100% 200%",
            animation: "shimmer 3s infinite",
          }}
        />
      </div>
    </motion.div>
  );
}
