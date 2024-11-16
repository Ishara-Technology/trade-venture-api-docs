

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withNextra({
  basePath: isProduction ? '/trade-venture-api-docs' : '', // Replace with your repo name
  assetPrefix: isProduction ? '/trade-venture-api-docs/' : '', // Replace with your repo name
})
