import style from './Theme.module.scss'

import React, { ChangeEvent } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleChangeTheme } from '../../slices'

type Props = {
  ClassName?: string
  OnChange: (ev: ChangeEvent<HTMLInputElement>) => void
  isModeDark: boolean
  ariaLabel: string
}

export const Theme = ({ ClassName, OnChange, ariaLabel, isModeDark = false }: Props) => {
  const dispatch = useAppDispatch()
  const { isThemeDark } = useAppSelector((state) => state.Common)
  const { t } = useTranslation('common')
  return (
    <div className={style.switch} tabIndex={0} aria-label="change theme">
      <input
        className={style.inpCheckbox}
        type="checkbox"
        defaultChecked={false}
        onChange={OnChange}
        /*
                onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          ev.preventDefault()
          dispatch(changeTheme(isThemeDark))
        }}
         */

        aria-label={`${ariaLabel} ${!isModeDark ? `${t('lightMode')}` : `${t('darkMode')}`}`}
      />
      <label>&nbsp;</label>
    </div>
  )
}
