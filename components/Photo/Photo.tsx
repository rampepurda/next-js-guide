import style from './Photo.module.scss'

import Image from "next/image"
import Link from "next/link"
import { initPhotos } from "../../types"
import useTranslation from "next-translate/useTranslation"
import classNames from "classnames"
import { ROUTE } from "../../configuration/routes"

export const Photo = ({
  id,
  title,
  thumbnailUrl
}: initPhotos) => {
  const { t } = useTranslation('common')

  return (
    <div className={classNames('card', style.Cover)}>
      <Image
        className={style.Image}
        src={thumbnailUrl}
        alt={title}
        height={150}
        width={150}
        aria-hidden={true}
      />

      <h3>{title}</h3>
      <div>
        <button
          className='btn btn-submit'
          type='button'
        >
          <Link
            href={{
              pathname: `/${ROUTE.PROJECT_DYN_ROUTE}/[id]`,
              query: {id: id}
            }}
            style={{color: 'red'}}
          >
            <a className={style.link} >
              {t('projects.dynamicRoute.btn')}
            </a>
          </Link>
        </button>
      </div>
    </div>
  )
}