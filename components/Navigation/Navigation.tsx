import classes from './Navigation.module.scss'
import Link from 'next/link'
import { NavigationLink, NavType } from '../../types'
import { LangSwitch } from '../index'
import classNames from 'classnames'
import { isNavLinkActive } from '../../utils'
import useTranslation from 'next-translate/useTranslation'
import { useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  ClassName?: string
  isNav: NavType
  links: NavigationLink[]
}

export const Navigation = ({ ClassName, links, isNav }: Props) => {
  const pathName = usePathname()
  const { t } = useTranslation('common')
  const navigationStyle = () => {
    switch (isNav) {
      case `${NavType.Primary}`:
        return classes.primary
      case `${NavType.Sidebar}`:
        if (links.length !== 0) {
          return classes.hasBr
        }
        break
      case `${NavType.Accordion}`:
        return classes.accordionNav
    }
  }
  const ariaNav = useMemo(() => {
    switch (isNav) {
      case `${NavType.Primary}`:
        return `${t('ariaLabels.navigation.isMain')}`
      case `${NavType.Sidebar}`:
        return `${t('ariaLabels.navigation.isLeft')}`
      case `${NavType.SubNav}`:
        return `${t('ariaLabels.navigation.isSub')}`
    }
  }, [isNav])
  const ariaLink = useCallback(
    (routerPath: string | undefined) => {
      return pathName === routerPath ? 'page' : undefined
    },
    [pathName]
  )

  return (
    <nav
      className={classNames(ClassName, navigationStyle(), {
        [`navLeft ${classes.sideBar}`]: isNav !== NavType.Primary,
      })}
      aria-label={ariaNav}
    >
      <ul>
        {links?.map(({ tKey, link }, idx) => {
          return (
            <li
              className={classNames({
                [classes.isLinkActive]: isNavLinkActive(pathName, link, isNav === NavType.Primary),
              })}
              key={idx}
            >
              <Link href={link} aria-current={ariaLink(link)}>
                {t(tKey)}
              </Link>
            </li>
          )
        })}
      </ul>
      {isNav === NavType.Primary && (
        <span className={classNames(classes.langSwitch)}>
          <LangSwitch route={''} />
        </span>
      )}
    </nav>
  )
}
