import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (mehrere lockfiles im Home-Verzeichnis).
  turbopack: {
    root: __dirname,
  },
  // Sauberer Zugriff auf das CMS unter /admin (liegt als statische Datei in public/admin).
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
