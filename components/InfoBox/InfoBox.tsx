import style from './Infobox.module.scss'

import classNames from "classnames"
import { PropsWithChildren } from "react"

export const InfoBox = ({children, className}: PropsWithChildren<{ className: string }>) => {
  return (
    <div className={classNames(style.alertBox, {
      [style.isDanger]: className === 'isDanger',
      [style.isInfo]: className === 'isInfo',
      [style.isSuccess]: className === 'isSuccess',
      [style.isWarning]: className === 'isWarning'
    })}>
      {children}
    </div>
  )
}
