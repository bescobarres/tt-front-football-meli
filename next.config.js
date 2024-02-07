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
}

module.exports = nextConfig