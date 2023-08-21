import style from './Switch.module.scss'

import React, { ChangeEvent } from 'react'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  ClassName?: string
  OnChange: (ev: ChangeEvent<HTMLInputElement>) => void
  isModeDark: boolean
  ariaLabel: string
}

export const SwitchLanguage = ({ ClassName, OnChange, ariaLabel, isModeDark = false }: Props) => {
  const { t } = useTranslation('common')
  return (
    <div className={style.Switch} tabIndex={0} aria-label="change theme">
      <input
        className={style.inpCheckbox}
        type="checkbox"
        defaultChecked={false}
        onChange={OnChange}
        aria-label={`${ariaLabel} ${!isModeDark ? `${t('lightMode')}` : `${t('darkMode')}`}`}
      />
      <label>&nbsp;</label>
    </div>
  )
}
