module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  loader: true,
  pages: {
    '*': ["common","home"],
    '/projects': ["projects"],
  }
}