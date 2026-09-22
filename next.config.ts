import type { NextConfig } from "next";
// Static export for GitHub Pages. basePath must match the repository name.
const basePath = process.env.PAGES_BASE_PATH ?? "/orvect-investor-deck";
const nextConfig: NextConfig = { output: "export", basePath, assetPrefix: basePath, images: { unoptimized: true } };
export default nextConfig;
