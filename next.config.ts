/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      // add any others you use
    ],
  },
  // optional: strictly enable appDir optimizations
  experimental: { optimizePackageImports: ['lucide-react'] },
};
module.exports = nextConfig;

