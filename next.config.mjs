/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/speed-insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2678400, must-revalidate',
          },
        ],
      },
      {
        source: '/insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2678400, must-revalidate',
          },
        ],
      },
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@vercel/analytics', '@vercel/speed-insights', 'swiper', 'react-icons'],
  },
};

export default nextConfig;
