import React, { MouseEventHandler, PropsWithChildren } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

type Props = {
  ClassName?: string
  OnClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  title?: string
  ariaLabel?: string
  rest?: Record<string, any>
}
/**
 * @param isSearch: Default as false, case true input type='search' get another class attribute
 */

export const Button = ({
  children,
  ClassName,
  OnClick,
  title,
  isDisabled = false,
  ariaLabel,
  rest,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames('btn', ClassName)}
      type="button"
      onClick={OnClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {title}
      {children}
    </button>
  )
}
