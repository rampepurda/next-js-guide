import style from './Loader.module.scss';

import GridLoader from './c-grid-loader.svg'
import classNames from "classnames"

type Props = {
  ClassName?: string
}
export const Loader = ({ClassName}: Props) => {
  return (
    <div className={classNames(style.loader, ClassName)}>
      <GridLoader />
    </div>
  )
}
