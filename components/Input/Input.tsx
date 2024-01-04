import style from './Input.module.scss'

import React, { ChangeEvent } from 'react'
import classNames from 'classnames'
import IcoSearch from './ico-magnifying-glass.svg'

type Props = {
  id: string
  ClassName?: string
  ariaLabel: string
  tabIdx?: number
  icon?: string
  OnChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  isSearch?: boolean
  isRequired?: boolean
  Name?: string
  placeholder?: string
  rest: Record<string, string>
}
/**
 * @param isSearch: Default as false, case true input type='search' get another class attribute
 */

export const Input = ({
  ariaLabel,
  tabIdx,
  ClassName,
  icon,
  id,
  OnChange,
  isSearch = false,
  isRequired = false,
  Name,
  placeholder,
  rest,
}: Props) => {
  return (
    <div className={style.cover}>
      <input
        id={id}
        className={classNames(style.Input, ClassName, { [style.isSearch]: isSearch })}
        tabIndex={tabIdx}
        aria-label={ariaLabel}
        onChange={OnChange}
        name={Name}
        required={isRequired}
        placeholder={placeholder}
        {...rest}
      />
      {isSearch && <IcoSearch className={classNames(style.hasIcoMagnifying)} />}
    </div>
  )
}
