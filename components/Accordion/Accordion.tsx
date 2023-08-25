import style from './Accordion.module.scss'

import React, { PropsWithChildren, useState } from 'react'
import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  ClassName?: string
  titles: string[]
}

export const Accordion = ({ ClassName, titles, children }: PropsWithChildren<Props>) => {
  const { t } = useTranslation('projects')
  const [isOpen, setIsOpen] = useState<unknown>(null)
  const handleOpen = (idx: number) => {
    if (isOpen === idx) {
      return setIsOpen(null)
    }
    setIsOpen(idx)
  }

  return (
    <div className={classNames(style.accordion, ClassName)} role="dialog">
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
              </button>
            </h2>
            <div
              className={classNames(style.content, [
                isOpen === idx ? style.accordion__isOpen : style.accordion__isClose,
              ])}
              aria-labelledby={title}
            >
              {children}
            </div>
          </div>
        )
      })}
    </div>
  )
}
