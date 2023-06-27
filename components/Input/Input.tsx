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
  isSearch?: boolean
  rest: {
    type: string,
    placeholder: string,
    defaultValue?: string | number,
    value?: string | number,
    max?: number,
    min?: number,
  }
}

export const Input = ({ ariaLabel, tabIdx, ClassName, icon, id, OnChange, isSearch = false, rest }: Props) => {
  return (
    <>
      <input
        id={id}
        className={classNames(style.Input,ClassName,{[style.isSearch]: isSearch})}
        aria-role='input'
        tabIndex={tabIdx}
        aria-label={ariaLabel}
        onChange={OnChange}
        {...rest}
      />
    </>
  )
}
