import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: 'use-credentials',
  productionBrowserSourceMaps: false,
};

export default nextConfig;
