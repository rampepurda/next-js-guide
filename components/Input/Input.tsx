import style from './Input.module.scss'

import React, { ChangeEvent } from 'react'
import classNames from 'classnames'
import IcoSearch from './magnifying-glass-search.svg'
import { InpRest } from '../../types'

/**
 * @param Props(children) the goal is put inside div buttons, images
 */

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
  rest: InpRest
}

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
  rest,
}: Props) => {
  return (
    <>
      <input
        id={id}
        className={classNames(style.Input, ClassName, { [style.isSearch]: isSearch })}
        tabIndex={tabIdx}
        aria-label={ariaLabel}
        onChange={OnChange}
        name={Name}
        required={isRequired}
        {...rest}
      />
      {isSearch && (
        <IcoSearch className={classNames(style.Input, { [style.hasIcoMagnifying]: isSearch })} />
      )}
    </>
  )
}
