import classes from './Input.module.scss'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import classNames from 'classnames'

type Props = {
  id: string
  className?: string
  tabIdx?: number
  icon?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  ariaLabel: string
  rest: Record<string, any>
}
/**
 * @param isSearch: Default as false, case true input type='search' get another class attribute
 */

export const Input = ({
  children,
  ariaLabel,
  tabIdx,
  className,
  icon,
  id,
  onChange,
  rest,
}: PropsWithChildren<Props>) => {
  return (
    <div className={classes.cover}>
      <input
        id={id}
        className={classNames(classes.inp, className)}
        tabIndex={tabIdx}
        onChange={onChange}
        aria-label={ariaLabel}
        {...rest}
      />
      {children}
    </div>
  )
}
