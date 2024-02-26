import style from './Photo.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import { PhotoType } from '../../types'
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'
import { ROUTE } from '../../configuration'

export const Photo = ({ id, title, thumbnailUrl }: PhotoType) => {
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
        <button className="btn btn-submit" type="button">
          <Link className={style.link} href={`${ROUTE.PHOTO_DETAIL}/${id}`}>
            {t('projects:projects.dynamicRoute.btn')}
          </Link>
        </button>
      </div>
    </div>
  )
}
