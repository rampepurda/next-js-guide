import { formatDateFromUTC } from '../../utils'
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'

export const DateBox = ({ ClassName }: { ClassName?: string }) => {
  const { t } = useTranslation('common')
  const currentDate = new Date()

  useEffect(() => {}, [currentDate])

  return (
    <div className={ClassName}>
      <mark>{formatDateFromUTC(`${currentDate}`, t('months', {}, { returnObjects: true }))}</mark>
    </div>
  )
}
