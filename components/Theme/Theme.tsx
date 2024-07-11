import classes from './Theme.module.scss'
import React, { ChangeEvent, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { handleThemeMode } from '../../redux/slices'
import classNames from 'classnames'

type Props = {
  ClassName?: string
  OnChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  isModeDark?: boolean
  ariaLabel: string
}
type LocStorage = string | null
export const key: string = 'theme'

export const Theme = ({ ClassName, OnChange, ariaLabel, isModeDark = true }: Props) => {
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
        aria-label={`${ariaLabel} ${!isModeDark ? `${t('lightMode')}` : `${t('darkMode')}`}`}
      />
      <label className={classNames(theme === 'dark' && classes.isDark)}>&nbsp;</label>
    </div>
  )
}
