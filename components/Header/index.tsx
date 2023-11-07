import style from './Header.module.scss'

import useTranslation from 'next-translate/useTranslation'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '../../store'

type Props = {
  className?: string
}

export const Header = ({ className, children }: PropsWithChildren<Props>) => {
  const { isThemeDark } = useAppSelector((state) => state.Common)
  const { t } = useTranslation('common')

  return (
    <header className={classNames(style.Header, className, { ['isDark']: isThemeDark })}>
      <h1>{t('title')}</h1>
      <div>{children}</div>
    </header>
  )
}
