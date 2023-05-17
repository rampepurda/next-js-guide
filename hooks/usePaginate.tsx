/**
 * @const currentPage - isActive
 * @param link is pathname
 * @param page is mapping from total pages Array.length
 * router return only param - page, can be modulate
 */

import { useCallback, useState } from "react"
import { useRouter } from "next/router"

export const usePaginate = (link: string) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>()
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page)
      return router.push(`${link}?page=${page}`)
    }, [currentPage])

  return {
    currentPage,
    handlePageChange
  }
}
