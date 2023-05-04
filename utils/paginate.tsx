/**
 * Active link util goes with Navigation component to check if Link is ACTIVE
 * @param getData - fetch data
 * @param currentPage - isActive Page - dynamic parameter
 * @param postPerPage - total items per page - dynamic parameter
 * @returns data per page.slice(from, to)
 */

export const hasPaginate = (getData: any, currentPage: number, postPerPage: number) => {
  return getData.slice(currentPage * postPerPage - postPerPage, currentPage * postPerPage)
}
