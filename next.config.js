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
        // Commented because of 'unused port' generated error message during yarn dev
        //port: '',
        pathname: '/*/*',
      },
    ],
  },
  // allows to import SVG as a React component
  // Need to Install: SVGR
  // https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // svgo: true = Case set to `true` all properties svg included are ABORTED!/ authorise).As for example 'animation'
            // svgo: false attributes keeps the same value(animation in svg works) if true (animation will stop working)
            svgo: false,
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextTranslate(nextConfig)
