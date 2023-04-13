import style from './navigation-main.module.scss'

import Link from "next/link"
import { useRouter } from 'next/router'
import { navData } from "../../types"
import { LangSwitcher } from '../LangSwitcher/LangSwitcher'
import classNames from "classnames"
import { isNavLinkActive } from "../../utils"
import useTranslation from "next-translate/useTranslation"

type Props = {
  isMain?: boolean,
  links: navData[]
}

export const Navigation = ({links, isMain = false}: Props) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <nav
      className={classNames({
      [style.Navigation]: isMain,
      [style.NavigationLeft]: !isMain
    })}
      aria-label={isMain ? 'main' :'left guide links'}
    >
      <ul>
        {links?.map(({title, link}, idx) => {
          return (
            <li key={idx}>
              <Link href={{pathname: `/${link}`}}>
                <a
                  className={classNames({[style.isActiveLink]: isNavLinkActive(
                      router.pathname,
                      link
                    )
                  })}
                  aria-current={router.pathname === link ? 'page' : undefined}
                  rel={'chapter'}
                >
                  {t(title)}
                </a>
              </Link>
            </li>
          )
        })
        }
      </ul>

      {
        isMain && <span className={classNames(style.Navigation__langSwitcher)}>
        <LangSwitcher route={''} />
      </span>
      }
    </nav>
 )
}