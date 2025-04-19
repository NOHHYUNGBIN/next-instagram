/** @type {import('next').NextConfig} */
const nextConfig = {
  unoptimized: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
