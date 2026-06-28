import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (mehrere lockfiles im Home-Verzeichnis).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
