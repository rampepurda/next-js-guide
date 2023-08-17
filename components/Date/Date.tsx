import style from './Date.module.scss'

import { formatDateFromUTC } from '../../utils'
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'

export const DateBox = ({ ClassName }: { ClassName?: string }) => {
  const { t } = useTranslation('common')
  const currentDate = new Date()

  return (
    <div className={classNames(ClassName, style.dateBox)}>
      <mark aria-label="today's date">
        {formatDateFromUTC(`${currentDate}`, t('months', {}, { returnObjects: true }))}
      </mark>
    </div>
  )
}
