import style from './Loader.module.scss'

import GridLoader from './c-grid-loader.svg'
import Image from "next/image";
import classNames from "classnames";

export const Loader = () => {
  return (
    <>
      <Image
        className={classNames(style.loader)}
        src={GridLoader} aria-hidden='true'
      />
    </>
  )
}
