/**
 * Active link util goes with Navigation component to check if Link is ACTIVE
 * @param pathName - router.pathname
 * @param link - dynamic parameter
 * @returns boolean
 */

export const isNavLinkActive = (pathName: string, link: string): boolean => {
  const currentLink = link.split(RegExp(/^\/([a-zA-Z0-9]+)/)).filter(Boolean)

  return pathName.startsWith(`/${currentLink[0]}`)
}
