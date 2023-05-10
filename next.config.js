/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_KEY: process.env.GOOGLE_KEY,
  },
}

module.exports = nextConfig
