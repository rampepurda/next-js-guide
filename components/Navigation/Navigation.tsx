import style from './Navigation.module.scss'

import Link from 'next/link'
import { NavigationLink } from '../../types'
import { LangSwitch } from '../index'
import classNames from 'classnames'
import { isNavLinkActive } from '../../utils'
import useTranslation from 'next-translate/useTranslation'
import { useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  ClassName?: string
  isMain?: boolean
  isNavAccordion?: boolean
  isSub?: boolean
  links: NavigationLink[]
}

export const Navigation = ({
  ClassName,
  links,
  isMain = false,
  isNavAccordion = false,
  isSub = false,
}: Props) => {
  const router = usePathname()
  const { t } = useTranslation('common')
  const navAriaLabel = useMemo(() => {
    if (isMain) {
      return `${t('ariaLabels.navigation.isMain')}`
    }
    if (!isMain) {
      return `${t('ariaLabels.navigation.isLeft')}`
    }
    if (isSub) {
      return `${t('ariaLabels.navigation.isSub')}`
    }
  }, [isMain, isSub])
  const currentLink = useCallback(
    (routerPath: string | undefined) => {
      return router === routerPath ? 'page' : undefined
    },
    [router]
  )

  return (
    <nav
      className={classNames(
        ClassName,
        isMain && style.primary,
        isNavAccordion && style.accordionNav,
        {
          [`navLeft ${style.sideBar}`]: !isMain,
        }
      )}
      aria-label={navAriaLabel}
    >
      <ul>
        {links?.map(({ tKey, link }, idx) => {
          return (
            <li
              className={classNames({
                [style.isLinkActive]: isNavLinkActive(router, link, isMain),
              })}
              key={idx}
            >
              <Link href={link} aria-current={currentLink(link)}>
                {t(tKey)}
              </Link>
            </li>
          )
        })}
      </ul>
      {isMain && (
        <span className={classNames(style.langSwitch)}>
          <LangSwitch route={''} />
        </span>
      )}
    </nav>
  )
}
