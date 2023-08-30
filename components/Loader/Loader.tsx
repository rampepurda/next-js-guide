import style from './Loader.module.scss'

import GridLoaderSWG from './c-grid-loader.svg'
import classNames from 'classnames'

type Props = {
  ClassName?: string
}
export const Loader = ({ ClassName }: Props) => {
  return (
    <div className={classNames('isLoaderDark', style.loader, ClassName)}>
      <GridLoaderSWG />
    </div>
  )
}
