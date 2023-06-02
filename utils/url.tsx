/**
 * Active link util goes with Navigation component to check if Link is ACTIVE
 * @param pathName - router.pathname
 * @param link - dynamic parameter
 * @returns boolean
 *
 * RegExp = Regular expressions are patterns used to match character combinations in strings.
 * See more about RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * startsWith: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * const str1 = 'Saturday night plans';
 * console.log(str1.startsWith('Sat', 2)); 2=index, default is 0
 * // Expected output: false
 */

export const isNavLinkActive = (pathName: string, link: string): boolean => {
  const currentLink = link.split(RegExp(/^\/([a-zA-Z0-9]+)/)).filter(Boolean)
  return pathName.startsWith(`/${currentLink[0]}`, 0)
}

/**
 * @startWith(`/${currentLink[0]}`) = backslash  is wrong and should be got rid of(for example ch4,ch14)
 * where compare every word after /
 *
 */


