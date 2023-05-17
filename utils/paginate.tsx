/**
 * Active link util goes with Navigation component to check if Link is ACTIVE
 * @param data - get data[]
 * @param currentPage - isActive Page - dynamic parameter
 * @param postPerPage - total items per page - dynamic parameter
 * @returns current data[] per page.slice(from, to)
 */

export const paginateCurrentPost = (currentPage: number, data: any, postPerPage: number) => {
  return data.slice(currentPage * postPerPage - postPerPage, currentPage * postPerPage)
}
