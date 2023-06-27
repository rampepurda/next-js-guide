import style from './Input.module.scss'

import React, { ChangeEvent } from "react"
import classNames from "classnames"

type Props = {
  id: string,
  ClassName?: string,
  ariaLabel: string,
  tabIdx?: number,
  icon?: string,
  OnChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
  rest: {
    type: string,
    placeholder: string
  }
}

export const Input = ({ ariaLabel, tabIdx, ClassName, icon, id, OnChange, rest }: Props) => {
  return <input
    id={id}
    className={classNames(style.Input,ClassName)}
    aria-role='input'
    tabIndex={tabIdx}
    aria-label={ariaLabel}
    onChange={OnChange}
    {...rest}
  />
}
