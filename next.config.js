/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }]
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
}

module.exports = nextConfig
