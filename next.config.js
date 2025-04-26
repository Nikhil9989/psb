/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images configuration directly in the root config object
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
  // Set base path
  basePath: '/psb',
  trailingSlash: false,
  // Put other experimental features here if needed
  experimental: {
    // No 'images' object here
  }
};

module.exports = nextConfig;
