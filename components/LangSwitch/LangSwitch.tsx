import style from './LangSwitch.module.scss'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from '../../i18n'
import classNames from 'classnames'

interface Props {
  route: string
  ClassName?: string
}
const { locales }: any = i18nConfig

export const LangSwitch = ({ route, ClassName }: Props) => {
  const { t, lang } = useTranslation()

  return locales.map((lng: string) => {
    if (lng === lang) return null

    return (
      <Link href={`/${route}`} locale={lng} key={lng}>
        <a
          className={classNames('btn', style.linkColor, ClassName)}
          title={`${lng === 'zh' ? 'Chinese simplified' : ''}`}
        >
          {t(lng) === 'zh' ? '中国人' : 'en'}
        </a>
      </Link>
    )
  })
}
