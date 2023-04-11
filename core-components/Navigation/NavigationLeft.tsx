import style from './navigation-sidebar.module.scss'

import Link from "next/link"
import { useRouter } from 'next/router'
import { sideBar } from "../../types"
import classNames from "classnames"
import useTranslation from "next-translate/useTranslation"
import React from "react"


export const NavSubLeft = ({Links}: {Links: sideBar[]}) => {
  const router = useRouter()
  // Translation at the future
  const { t } = useTranslation('common')

  return (
    <nav
      className={style.navSidebar}
      aria-label='sidebar'
    >
      <ul >
        {Links?.map(({title, id, link}, idx: number) => {
          return (
            <li key={idx}>
              <Link
                href={{pathname: `${link}`}}
                aria-current={router.pathname === title ? 'page' : undefined}
              >
                <a
                  className={classNames({[style.activeLink]: router.pathname === link})}
                  rel='chapter'
                >
                  {title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
 )
}