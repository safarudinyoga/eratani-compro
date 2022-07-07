/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id'
  }
}

module.exports = nextConfig
