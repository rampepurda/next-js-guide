import classes from './Theme.module.scss'
import React, { ChangeEvent, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { handleThemeMode } from '../../redux/slices'
import classNames from 'classnames'

type LocStorage = string | null
export const key: string = 'theme'

export const Theme = () => {
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((state) => state.Common)
  function handleTheme() {
    const theme: LocStorage = window.localStorage.getItem(key)
    if (theme === null || theme === 'dark') {
      window.localStorage.setItem(key, 'light')
      dispatch(dispatch(handleThemeMode(window.localStorage.getItem(key))))
    }
    if (theme === null || theme === 'light') {
      window.localStorage.setItem(key, 'dark')
      dispatch(dispatch(handleThemeMode(window.localStorage.getItem(key))))
    }
  }

  useEffect(() => {
    dispatch(handleThemeMode(window.localStorage.getItem(key)))
  })
  useEffect(() => {}, [theme])

  return (
    <div className={classes.switch} tabIndex={0} aria-label="change theme">
      <input
        className={classes.inpCheckbox}
        type="checkbox"
        checked={theme === 'dark'}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          handleTheme()
        }}
        aria-label={`controlled ${theme === 'light' ? `${t('lightMode')}` : `${t('darkMode')}`}`}
      />
      <label className={classNames(theme === 'dark' && classes.isDark)}>&nbsp;</label>
    </div>
  )
}
