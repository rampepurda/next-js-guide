import style from './Switch.module.scss'

import React, { ChangeEvent } from "react"

type Props = {
  ClassName?: string,
  OnChange: (ev: ChangeEvent<HTMLInputElement>) => void,
}

export const Switch = ({ClassName, OnChange, ...rest}: Props) => {
  return (
    <div className={style.Switch}>
      <input
        className={style.inpCheckbox}
        type="checkbox"
        defaultChecked={false}
        onChange={OnChange}
        {...rest}
      />
      <label>&nbsp;</label>
    </div>
  )
}
