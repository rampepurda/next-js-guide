import style from './Alert-box.module.scss'

import classNames from "classnames"
import { PropsWithChildren } from "react"

export const AlertBox = ({children, className}: PropsWithChildren<{ className: string }>) => {
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
