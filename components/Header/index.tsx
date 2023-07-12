import style from './Header.module.scss'

import useTranslation from 'next-translate/useTranslation'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { DateBox } from '../Date'

type Props = {
  className: string
}

export const Header = ({ className, children }: PropsWithChildren<Props>) => {
  const { t } = useTranslation('common')

  return (
    <header className={classNames(style.Header, className)}>
      <DateBox ClassName={`${style.dateBox}`} />
      <h1>{t('welcome')}</h1>
      <div className={style.switchBox}>{children}</div>
    </header>
  )
}
