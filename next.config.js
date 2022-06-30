const { prepareServerlessUrl } = require('next/dist/server/base-server')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
}

module.exports = nextConfig
