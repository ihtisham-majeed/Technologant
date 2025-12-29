import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zaheeralidev.vercel.app',
      },
    ],
  },
  /* config options here */
  devIndicators: false,
};

export default nextConfig;
