/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/green-bean-coffee-',
  assetPrefix: '/green-bean-coffee-/',
}

module.exports = nextConfig
