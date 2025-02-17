import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9090",
        pathname: "/medusa/**",
      },
    ],
  },
};

export default nextConfig;
