import style from './Chevron.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import IcoChevron from '../../public/ico-chevron-down.svg'

export const useChevron = (title: string) => {
  const [isChevronOpen, setIsChevronOpen] = useState<boolean>(false)

  const toggleChevron = () => {
    return (
      <a
        className={style.hasToggle}
        onClick={(ev) => {
          ev.preventDefault()
          return setIsChevronOpen(!isChevronOpen)
        }}
      >
        {title}
        <span className={classNames(style.chevron, { [style.chevron__isOpen]: isChevronOpen })}>
          <IcoChevron className={style.hasIcoChevron} aria-hidden={true} />
        </span>
      </a>
    )
  }
  return {
    toggleChevron,
    isChevronOpen,
  }
}
