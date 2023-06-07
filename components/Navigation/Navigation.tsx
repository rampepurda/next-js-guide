import style from './Navigation.module.scss'

import Link from "next/link"
import { useRouter } from 'next/router'
import { NavigationLink } from "../../types"
import { LangSwitch } from '../index'
import classNames from "classnames"
import { isNavLinkActive } from "../../utils"
import useTranslation from "next-translate/useTranslation"
import { useMemo } from "react"

type Props = {
  isMain?: boolean,
  isSub?: boolean,
  links: NavigationLink[]
}

export const Navigation = ({links, isMain = false, isSub = false}: Props) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const navAriaLabel = useMemo(() => {
    if(isMain) {
      return `${t('ariaLabels.navigation.isMain')}`
    }
    if(!isMain) {
      return `${t('ariaLabels.navigation.isLeft')}`
    }
    if(isSub) {
      return `${t('ariaLabels.navigation.isSub')}`
    }
  }, [isMain, isSub])

  return (
    <nav
      className={classNames({
          [style.navigation]: isMain,
          [`navLeft ${style.navigationLeft}`]: !isMain,
          [style.navigationSub]: isSub
        })
      }
      aria-label={navAriaLabel}
    >
      <ul>
        {links?.map(({tKey, link}, idx) => {
          return (
            <li key={idx}>
              <Link href={link}>
                <a
                  className={classNames({[style.isLinkActive]: isNavLinkActive(
                      router.pathname,
                      link,
                      isMain
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