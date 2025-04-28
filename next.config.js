/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Next.js 14 static export configuration
  output: 'export',
  // Base path for GitHub Pages
  basePath: '/psb',
  // Add this to ensure assets are correctly referenced
  assetPrefix: '/psb/',
  trailingSlash: false,
};

module.exports = nextConfig;
