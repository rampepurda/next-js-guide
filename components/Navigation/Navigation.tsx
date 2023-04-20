import style from './Navigation.module.scss'

import Link from "next/link"
import { useRouter } from 'next/router'
import { navData } from "../../types"
import { LangSwitch } from '../index'
import classNames from "classnames"
import { isNavLinkActive } from "../../utils"
import useTranslation from "next-translate/useTranslation"

type Props = {
  isMain?: boolean,
  isSub?: boolean,
  links: navData[]
}

export const Navigation = ({links, isMain = false, isSub = false}: Props) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <nav
      className={classNames({
      [style.navigation]: isMain,
      [`navLeft ${style.navigationLeft}`]: !isMain,
      [style.navigationSub]: isSub
    })}
      aria-label={isMain ? 'main' :'left guide links'}
    >
      <ul>
        {links?.map(({tKey, link}, idx) => {
          return (
            <li key={idx}>
              <Link href={`/${link}`}>
                <a
                  className={classNames({[style.isLinkActive]: isNavLinkActive(
                      router.pathname,
                      link
                    )
                  })}
                  aria-current={router.pathname === link ? 'page' : undefined}
                >
                  {t(tKey)}
                </a>
              </Link>
            </li>
          )
        })
        }
      </ul>

      {
        isMain && <span className={classNames(style.langSwitch)}>
        <LangSwitch route={''} />
      </span>
      }
    </nav>
 )
}