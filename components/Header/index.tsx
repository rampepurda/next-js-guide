import style from './Header.module.scss'

import useTranslation from 'next-translate/useTranslation'
import { PropsWithChildren, useEffect } from 'react'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../store'
import { getPhotosWithLimit } from '../../slices'
import { environment } from '../../configuration'

type Props = {
  className?: string
}

export const Header = ({ className, children }: PropsWithChildren<Props>) => {
  const dispatch = useAppDispatch()
  const { isThemeDark } = useAppSelector((state) => state.Common)
  const { t } = useTranslation('common')

  useEffect(() => {
    dispatch(getPhotosWithLimit({ url: `${environment.photosURL}`, hasLimit: '233' }))
  }, [])

  return (
    <header className={classNames(style.Header, className, { ['isDark']: isThemeDark })}>
      <h1>{t('title')}</h1>
      <div>{children}</div>
    </header>
  )
}
