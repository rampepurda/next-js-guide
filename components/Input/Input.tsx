import style from './Input.module.scss'

import React, { ChangeEvent } from "react"
import classNames from "classnames"
import IcoSearch from './magnifying-glass-search.svg'

/**
 * @param Props(children) the goal is put inside div buttons, images
 */

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
    max?: string,
    min?: string
    step?: string
  }
}

export const Input = ({ ariaLabel, tabIdx, ClassName, icon, id, OnChange, isSearch = false, rest }: Props) => {
  return (
    <div className={style.cover}>
      <input
        id={id}
        className={classNames(style.Input, ClassName,{[style.isSearch]: isSearch})}
        aria-role='input'
        tabIndex={tabIdx}
        aria-label={ariaLabel}
        onChange={OnChange}
        {...rest}
      />
      {isSearch && <IcoSearch className={classNames(style.Input, {[style.hasIcoMagnifying]: isSearch})} />}
    </div>
  )
}
