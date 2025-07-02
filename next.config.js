const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "fakestoreapi.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    modern: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
