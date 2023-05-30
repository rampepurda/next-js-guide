import style from './Select.module.scss'

import React, { ChangeEvent } from "react"
import { OptionsInit } from "../../types"
import classNames from "classnames"

type Props = {
  ClassName: string,
  icon?: string,
  id: string,
  options: OptionsInit[],
  OnChange?: (ev: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ClassName, icon, id, options, OnChange}: Props) => {
  return (
    <select
      id={id}
      className={classNames(ClassName, style.Select)}
      onChange={OnChange}
    >
      { options.map(({value}, idx: number) => (
        <option
          key={idx}
          defaultChecked={true}
          value={value}
        >
          {value.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
