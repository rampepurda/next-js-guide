import style from './Navigation.module.scss'

import Link from 'next/link'
import { NavigationLink } from '../../types'
import { LangSwitch } from '../index'
import classNames from 'classnames'
import { isNavLinkActive } from '../../utils'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  ClassName?: string
  isMain?: boolean
  isSub?: boolean
  links: NavigationLink[]
}

export const Navigation = ({ ClassName, links, isMain = false, isSub = false }: Props) => {
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

  return (
    <nav
      className={classNames(ClassName, {
        [style.main]: isMain,
        [`navLeft ${style.navigationLeft}`]: !isMain,
        [style.navigationSub]: isSub,
      })}
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
              <Link href={link} aria-current={router === link ? 'page' : undefined}>
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
