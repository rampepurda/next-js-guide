import classes from './Header.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '../../redux/store'
import { NavigationLink } from '../../types'
import { usePathname } from 'next/navigation'
import { searchData } from '../../configuration'
import { Search } from '../Search'

type Props = {
  className?: string
}

export const Header = ({ className, children }: PropsWithChildren<Props>) => {
  const data: NavigationLink[] = searchData
  const pathname = usePathname()
  const { theme } = useAppSelector((state) => state.Common)
  const { t } = useTranslation('common')

  return (
    <header className={classNames(classes.header, className, { ['isDark']: theme === 'dark' })}>
      <h1>{t('title')}</h1>
      {pathname.startsWith('/guide') && <Search data={data} ClassNames={classes.hasSearchBox} />}
      <div>{children}</div>
    </header>
  )
}
