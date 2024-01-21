import style from './Theme.module.scss'

import React, { ChangeEvent, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleChangeTheme } from '../../slices'

type Props = {
  ClassName?: string
  OnChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  isModeDark: boolean
  ariaLabel: string
}

export const Theme = ({ ClassName, OnChange, ariaLabel, isModeDark = true }: Props) => {
  const dispatch = useAppDispatch()
  const { isThemeDark } = useAppSelector((state) => state.Common)
  const { t } = useTranslation('common')

  useEffect(() => {}, [isThemeDark])

  return (
    <div className={style.switch} tabIndex={0} aria-label="change theme">
      <input
        className={style.inpCheckbox}
        type="checkbox"
        defaultChecked={true}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          dispatch(handleChangeTheme(!isThemeDark))
        }}
        aria-label={`${ariaLabel} ${!isModeDark ? `${t('lightMode')}` : `${t('darkMode')}`}`}
      />
      <label>&nbsp;</label>
    </div>
  )
}
