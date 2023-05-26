const nextTranslate = require('next-translate')
// 'dotenv' & 'cross-env' were installed but can not fetch .env outside the Root
require('dotenv').config({ path: process.env.ENV_FILE_PATH })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/*/*',
      },
    ],
  }
}


module.exports = nextTranslate(nextConfig)
