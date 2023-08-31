# My React Next JS Guide, only for testing purpose

## Environment variables

Do you want to use some variable that varies per environment?

`.env.*` files are what you're looking for! All the `.env` files are located under the `env/` folder in order to avoid conflicting with the default behavior of how Next.js treats them.
Currently Next.js supports only [3 predefined environment values](https://nextjs.org/docs/basic-features/environment-variables) which doesn't fulfill our needs. Therefore we use [dotenv](https://github.com/motdotla/dotenv) package to load environment variables from a different location than root.

Inspired by https://stackoverflow.com/questions/59462614/how-to-use-different-env-files-with-nextjs#answer-62464710

`cross-env*`
We use [cross-env](https://www.npmjs.com/package/cross-env) to run the commands and set the environment variables properly on both Windows and Unix systems.

## Prettier

* install prettier:
* yarn add prettier
*
* Install "eslint-config-prettier"
* yarn add eslint-plugin-prettier
* 
* Eslint config prettier solve potential problem between Eslint and Prettier
*
* Create .prettierrc.js file in Root

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```Testing
yarn test
```
# How to Install Jest and Jest library
/**
 * https://nextjs.org/docs/testing
 * install jest + jest testing library
 * yarn add --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
 * create:
 *  jest.config.js || jest.setup.js
 *  package.json - update script:
 *    "test": "jest"
 *
 */

# Starting with Next.js 13
/**
* Starting with Next.js 13, <Link> renders as <a>, so attempting to use <a> as a child is invalid.
* Error message after run dev: Invalid `<Link>` with `<a>` child
* https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
* Possible Ways to Fix It
  Run the new-link to automatically upgrade previous versions of Next.js to the new <Link> usage:
* npx @next/codemod new-link
*/



