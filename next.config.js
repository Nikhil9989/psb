/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Ensure no basePath is set
  basePath: '',
  trailingSlash: false,
  // Explicitly set output to be standard Next.js build
  output: 'standalone'
};

module.exports = nextConfig;
