import classes from './Photo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { PhotoType } from '../../types'
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'
import { ROUTE } from '../../configuration'

export const Photo = ({ id, title, thumbnailUrl }: PhotoType) => {
  const { t } = useTranslation('common')

  return (
    <figcaption className={classNames('card', classes.cover)}>
      <div className={classes.content}>
        <Image
          className={classes.image}
          src={thumbnailUrl}
          alt={title}
          height={150}
          width={150}
          aria-hidden={true}
        />

        <h3>{title}</h3>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button className="btn btn-submit" type="button">
          <Link className={classes.link} href={`${ROUTE.PHOTO_DETAIL}/${id}`}>
            {t('projects:projects.dynamicRoute.btn')}
          </Link>
        </button>
      </div>
    </figcaption>
  )
}
