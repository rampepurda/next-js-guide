import style from './header.module.scss'

import React, {useTransition, Suspense } from "react"
import useTranslation from "next-translate/useTranslation"

export const Header = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <header className={style.Header}>
        <h1>{t('welcome')}</h1>
      </header>
    </>
 )
}