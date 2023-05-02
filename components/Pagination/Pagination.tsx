import style from './Pagination.module.scss'

import Link from "next/link"
import { initPagination } from "../../types"
import useTranslation from "next-translate/useTranslation"
import classNames from "classnames"

export const Pagination = ({items, itemsPerPage, currentPage, onPageChange}: initPagination) => {
  const { t } = useTranslation('common')
  const pagesCount = Math.ceil(items / itemsPerPage) // 100/10

  if (pagesCount === 1) return null;
  const pagination = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <div>
      {pagination.map((page) => {
        return (
          <>
            <Link
              href={page === 0 ? `/projects/dynamic-route${page + 1}` : `/projects/dynamic-route/${page + 1}` }
              onClick={onPageChange}
            >
              <a style={{
                display: 'inline-block',
                marginRight: '2rem'
              }}>{page} </a>
            </Link>
          </>

        )
      })}
    </div>
  )
}