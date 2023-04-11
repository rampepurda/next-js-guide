const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  env: {
    customKey: 'my-value-demo',
  },
  images: {
    domains: ['rickandmortyapi.com', 'jsonplaceholder.typicode.com/photos', 'www.planetware.com']
 }
})
