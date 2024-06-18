import React, { MouseEventHandler, PropsWithChildren } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

type Props = {
  ClassName?: string
  OnClick?: MouseEventHandler<HTMLButtonElement>
  hasLink?: boolean
  url?: string
  isDisabled?: boolean
  title?: string
  rest?: Record<string, any>
  ariaLabel?: string
}
/**
 * @param isSearch: Default as false, case true input type='search' get another class attribute
 */

export const Button = ({
  children,
  ClassName,
  OnClick,
  hasLink = false,
  url,
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
      {hasLink ? <Link href={`${url}`}>{title}</Link> : title}
      {children}
    </button>
  )
}
