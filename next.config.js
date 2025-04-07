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
  // No base path needed
  basePath: '',
  trailingSlash: false,
};

module.exports = nextConfig;
