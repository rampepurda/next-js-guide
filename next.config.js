const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value-demo',
  },
  images: {
    domains: ['rickandmortyapi.com', 'jsonplaceholder.typicode.com/photos', 'www.planetware.com']
 }
}

module.exports = nextTranslate(nextConfig)