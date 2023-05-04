import style from './Pagination.module.scss'

import { ChangeEvent, useMemo } from "react"
import classNames from "classnames"

type Props = {
  currentPage: number,
  itemsTotal: number,
  onPageChange?: (ev: ChangeEvent<HTMLSelectElement>) => void,
  paginate: any,
  postPerPage: number
}

export const Pagination = ({
  currentPage,
  itemsTotal,
  postPerPage,
  paginate}: Props)=> {
  const pageTotal = useMemo(() => {
    return Math.ceil(itemsTotal/postPerPage)
  },[itemsTotal, postPerPage])

  const pageArray = Array.from({length: pageTotal}, (_, i) => i + 1)

  return (
    <nav aria-label='paginate'>
      <ul className={style.card}>
        {pageArray.map((page: number) => {
          return (
            <li
              className={style.inline}
              key={page}
            >
              <a
                className={classNames(style.link, {[style.isActive]: page === currentPage})}
                onClick={(ev) => paginate(page)}
                href={`dynamic-route#page${page}`}
              >{page}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}