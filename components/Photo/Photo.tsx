import React from "react"
import Link from "next/link"

import style from './flex-base.module.scss'
import { initPhotos } from "../../types"
import useTranslation from "next-translate/useTranslation"
import classNames from "classnames";

export const Photo = ({ id, title, thumbnailUrl}: initPhotos) => {
  const { t } = useTranslation('common')

  return (
    <div className={classNames('card', style.boxCover)}>
      <img src={thumbnailUrl} alt={title} />
      <ul>
        <li key={id}>
          <h2>{title}</h2>
        </li>
      </ul>
      <br />

      <h4>
        <button
          type='button'
        >
          <Link
            href={{
              pathname: '/projects/dynamic-route/[id]',
              query: {id: id}
            }}
            rel='author'
            style={{color: 'red'}}
          >
            {t('projects.dynamicRoute.btn')}
          </Link>
        </button>
      </h4>
    </div>
  )
}