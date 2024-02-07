/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/main',
          permanent: true,
        },
      ];
    },
    async headers() {
      return [
        {
          source: '/:path*{/}?',
          headers: [
            {
              key: 'X-Accel-Buffering',
              value: 'no',
            },
          ],
        },
      ]
    },
}

module.exports = nextConfig


