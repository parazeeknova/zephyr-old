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
    serverComponentsExternalPackages: ['@node-rs/argon2'],
  },
};

export default nextConfig;
