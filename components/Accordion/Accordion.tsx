import style from './Accordion.module.scss'
import React, { PropsWithChildren, useState } from 'react'
import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import IcoArrowDown from '../../public/ico-chevron-down.svg'

interface Props {
  ClassName?: string
  titles: string[]
  isSubNav?: boolean
}

export const Accordion = ({
  ClassName,
  titles,
  isSubNav = false,
  children,
}: PropsWithChildren<Props>) => {
  const { t } = useTranslation('projects')
  const [isOpen, setIsOpen] = useState<unknown>(null)
  const handleOpen = (idx: number) => {
    if (isOpen === idx) {
      return setIsOpen(null)
    }
    setIsOpen(idx)
  }

  return (
    <div
      className={classNames(style.cover, isSubNav && style.isSubNavigation, ClassName)}
      role="dialog"
    >
      {titles.map((title, idx: number) => {
        return (
          <div key={idx}>
            <h2>
              <button
                className={style.btn}
                aria-expanded={isOpen === idx ? 'true' : 'false'}
                aria-controls={title}
                onClick={(ev) => {
                  ev.preventDefault()
                  handleOpen(idx)
                }}
              >
                {t(`${title}`)}
                <IcoArrowDown
                  className={classNames(style.icoArrow, {
                    [style.icoArrow__isOpen]: isOpen !== null,
                  })}
                />
              </button>
            </h2>
            <div
              className={classNames(style.content, [
                isOpen === idx ? style.content__isOpen : style.content__isClose,
              ])}
              aria-labelledby={title}
              onClick={(ev) => setIsOpen(null)}
            >
              {children}
            </div>
          </div>
        )
      })}
    </div>
  )
}
