const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value-demo',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/150/*',
      },
    ],
  }
}

module.exports = nextTranslate(nextConfig)