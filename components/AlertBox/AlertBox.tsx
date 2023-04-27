import style from './Alert-box.module.scss'

import classNames from "classnames"
import { PropsWithChildren } from "react"

export const AlertBox = ({children, className}: PropsWithChildren<{ className: string }>) => {
  return (
    <div className={classNames(style.alertBox, {
        [style.danger]: className === 'danger',
        [style.info]: className === 'info',
        [style.success]: className === 'success',
        [style.warning]: className === 'warning'
    })}>
      {children}
    </div>
  )
}
