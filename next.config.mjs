/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ← this skips ESLint errors during Vercel build
  },
};

export default nextConfig;
