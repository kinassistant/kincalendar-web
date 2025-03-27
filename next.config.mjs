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
};

export default nextConfig;
