/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
