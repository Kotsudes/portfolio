/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = process.env.NODE_ENV

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: env == "development" ? '' : '/portfolio',
  assetPrefix: env == "development" ? '' :  '/portfolio',
}
