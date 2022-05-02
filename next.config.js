/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
}
