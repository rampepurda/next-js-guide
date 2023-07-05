/**
 * install prettier:
 * yarn add prettier
 *
 * Install "eslint-config-prettier"
 * yarn add eslint-plugin-prettier
 * Eslint config prettier solve potential problem between Eslint and Prettier
 *
 * Create .prettierrc.js file in Root
 */

module.exports = {
  arrowParens: 'always',
  endOfLine: 'auto',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}
