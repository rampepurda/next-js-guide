import classes from './Header.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '../../redux/store'
import { NavigationLink } from '../../types'
import { usePathname } from 'next/navigation'
import { sidebarGuideSearch } from '../../__mock__/dataMock'
import { Search } from '../Search'

type Props = {
  className?: string
}

export const Header = ({ className, children }: PropsWithChildren<Props>) => {
  const data: NavigationLink[] = sidebarGuideSearch
  const pathname = usePathname()
  const { isThemeDark } = useAppSelector((state) => state.Common)

  const { t } = useTranslation('common')

  return (
    <header className={classNames(classes.header, className, { ['isDark']: isThemeDark })}>
      <h1>{t('title')}</h1>
      {pathname.startsWith('/guide') && <Search data={data} ClassNames={classes.hasSearchBox} />}

      <div>{children}</div>
    </header>
  )
}
