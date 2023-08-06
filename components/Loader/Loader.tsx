import style from './Loader.module.scss'

import GridLoaderSWG from './c-grid-loader.svg'
import classNames from 'classnames'

type Props = {
  ClassName?: string
}
export const Loader = ({ ClassName }: Props) => {
  return (
    <div className={classNames(style.loader, ClassName)}>
      <GridLoaderSWG />
    </div>
  )
}
