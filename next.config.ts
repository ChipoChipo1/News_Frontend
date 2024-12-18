import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Strict Mode 비활성화
  /* config options here */
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
