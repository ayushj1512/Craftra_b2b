import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint from failing Vercel builds
  },
  images: {
    domains: ["res.cloudinary.com"], // example: allow external image domains
  },
};

export default nextConfig;
