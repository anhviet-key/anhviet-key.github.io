const { i18n } = require('./next-i18next.config');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ['c1.peakpx.com'],
  // },
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };
  //   return config;
  // },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
