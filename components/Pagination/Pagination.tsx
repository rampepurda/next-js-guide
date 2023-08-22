import style from './Pagination.module.scss'

import { ChangeEvent, useMemo, useState } from 'react'
import classNames from 'classnames'
import { paginateCurrentPost } from '../../utils'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  currentPage: number
  itemsTotal: number
  onPageChange?: (ev: ChangeEvent<HTMLSelectElement>) => void
  paginate: any
  postPerPage: number
}

export const Pagination = ({ currentPage, itemsTotal, paginate, postPerPage }: Props) => {
  const { t } = useTranslation('common')
  const pageTotal = useMemo(() => {
    return Math.ceil(itemsTotal / postPerPage)
  }, [itemsTotal, postPerPage])
  const pageArray = Array.from({ length: pageTotal }, (_, i) => i + 1)
  // PAGINATE PREVIOUS|NEXT
  const paginatePerPage: number = 10
  const [currentPaginate, setCurrentPaginate] = useState<number>(1)
  const paginateLength = pageArray.length
  const paginateTotal = Math.ceil(paginateLength / paginatePerPage)
  const linkPrevious = useMemo(() => {
    return (
      <button
        className={classNames(style.btn, style.previous)}
        onClick={(ev) => {
          ev.preventDefault()
          if (currentPaginate <= paginateTotal) {
            setCurrentPaginate(currentPaginate - 1)
          }
        }}
      >
        {t('paginate.linkPrevious')}
      </button>
    )
  }, [currentPaginate, paginateTotal])
  const linkNext = useMemo(() => {
    return (
      <button
        className={style.btn}
        onClick={(ev) => {
          ev.preventDefault()
          if (currentPaginate < paginateTotal) {
            setCurrentPaginate(currentPaginate + 1)
          }
        }}
      >
        {t('paginate.linkNext')}
      </button>
    )
  }, [currentPaginate, paginateTotal])

  return (
    <nav aria-label="paginate">
      {currentPaginate !== 1 ? linkPrevious : ''}
      <ul className={style.paginate}>
        {paginateCurrentPost(currentPaginate, pageArray, paginatePerPage).map((page: number) => {
          return (
            <li className={style.inline} key={page}>
              <button
                className={classNames(style.link, {
                  [style.isActive]: page === currentPage,
                  //[style.hasRadiusLeft]: page === Math.min(...pageArray),
                  //[style.hasRadiusRight]: page === Math.max(...pageArray),
                })}
                onClick={(ev) => paginate(page)}
                aria-current={true}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
      {currentPaginate < paginateTotal ? linkNext : ''}
    </nav>
  )
}
