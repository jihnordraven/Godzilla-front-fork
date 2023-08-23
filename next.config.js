const { BACK_URL } = require('./src/shared/consts/global')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACK_URL}/:path*`,
      },
    ]
  },
  // webpack(config) {
  //   const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))
  //
  //   config.module.rules.push(
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       type: 'asset',
  //       resourceQuery: /url/, // *.svg?url
  //     },
  //     // Convert all other *.svg imports to React components
  //     {
  //       test: /\.svg$/i,
  //       issuer: /\.[jt]sx?$/,
  //       resourceQuery: { not: /url/ }, // exclude if *.svg?url
  //       use: ['@svgr/webpack'],
  //     }
  //   )
  //
  //   // Modify the file loader rule to ignore *.svg, since we have it handled now.
  //   fileLoaderRule.exclude = /\.svg$/i
  //
  //   return config
  // },
}

module.exports = nextConfig
