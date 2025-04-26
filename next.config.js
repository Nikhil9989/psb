/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images configuration needs to be directly in the config object, not under experimental
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
};

module.exports = nextConfig;
