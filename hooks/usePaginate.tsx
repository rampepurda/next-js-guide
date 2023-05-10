/**
 * @const currentPage - isActive
 * @param page is mapping from total pages Array.length
 */

import { useCallback, useState } from "react"

export const usePaginate = () => {
  const [currentPage, setCurrentPage] = useState<number>()
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page)
    }, [currentPage])

  return {
    currentPage,
    handlePageChange
  }
}
