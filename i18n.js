module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  loader: true,
  pages: {
    '*': ['common', 'home', 'chapter'],
    '/projects': ['projects'],
  },
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
}
