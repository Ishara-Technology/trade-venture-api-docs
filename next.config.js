/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/trade-venture-api-docs" : ""; // Removed stray single quote
const assetPrefix = basePath;

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath, // Properly set basePath
  assetPrefix, // Properly set assetPrefix
  output: "export", // This is correct for static export
};

// Use withNextra by passing nextConfig as an argument
module.exports = withNextra(nextConfig);
