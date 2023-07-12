import style from './Switch.module.scss'

import React, { ChangeEvent } from 'react'

type Props = {
  ClassName?: string
  OnChange: (ev: ChangeEvent<HTMLInputElement>) => void
  ariaLabel: string
}

export const SwitchLanguage = ({ ClassName, OnChange, ariaLabel }: Props) => {
  return (
    <div className={style.Switch}>
      <input
        className={style.inpCheckbox}
        type="checkbox"
        defaultChecked={false}
        onChange={OnChange}
        aria-label={ariaLabel}
      />
      <label>&nbsp;</label>
    </div>
  )
}
