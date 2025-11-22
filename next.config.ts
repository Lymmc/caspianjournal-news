import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  rewrites: async () => [
    {
      source: '/studio/:path*',
      destination: '/studio/[[...index]]/page',
    },
  ],
};

export default nextConfig;
