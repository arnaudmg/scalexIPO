import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Autorise l'intégration en iframe
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *", // Autorise tous les domaines à embedder (utile pour Webflow)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
