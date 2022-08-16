/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/", destination: "/root" }]
  },
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
}

module.exports = nextConfig
