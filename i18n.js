module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  loader: true,
  pages: {
    '*': ['common', 'home', 'chapter', 'forms', 'projects'],
    // ToDo fix 'projects' path doesn`t make sense when is used above
    '/projects': ['projects'],
  },
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
}
