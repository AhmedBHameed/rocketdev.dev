const {i18n} = require('./next-i18next.config');

module.exports = {
  i18n,
  trailingSlash: true,
  /**
   * @see https://nextjs.org/docs/messages/next-image-unconfigured-host
   */
  images: {
    domains: ['minio.rocketdev.dev'],
  },
};
