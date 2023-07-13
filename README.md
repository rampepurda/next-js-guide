# My React Next JS Guide, only for testing purpose

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



