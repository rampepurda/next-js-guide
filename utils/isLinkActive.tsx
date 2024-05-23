/**
 * Active link util goes with Navigation component to check if Link is ACTIVE
 * @param pathName - router.pathname
 * @param link - dynamic parameter
 * @param isMain - is Navigation Main true/false
 * @returns boolean
 *
 * RegExp = Regular expressions are patterns used to match character combinations in strings.
 * See more about RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * startsWith: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * RETURN VALUE IS TRUE/FALSE;
 * const str1 = 'Saturday night plans';
 * console.log(str1.startsWith('Sat', 2)); 2=index, default is 0
 * // Expected output: false
 */

export const isLinkActive = (pathName: string, link: string, isMain: boolean): boolean => {
  const currentLink = link.split(RegExp(/^\/([a-zA-Z0-9]+)/)).filter(Boolean)
  // Need to use .filter method to get rid of an empty string from the resulting array.

  if (!isMain) return pathName === link
  return pathName.startsWith(`/${currentLink[0]}`, 0)
}
