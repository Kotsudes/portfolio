/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    basePath: '/portfolio',
    assetPrefix: '/portfolio'

  },
}
