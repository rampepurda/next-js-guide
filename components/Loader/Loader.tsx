import style from './Loader.module.scss'

import GridLoader from './c-grid-loader.svg'
import Image from "next/image"

export const Loader = () => {
  return (
    <Image
      className={style.loader}
      src={GridLoader} aria-hidden='true'
    />
  )
}
