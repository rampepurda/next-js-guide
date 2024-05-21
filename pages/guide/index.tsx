import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'
import { useWindWidth } from '../../hooks'

export default function Guide() {
  const { t } = useTranslation('common')
  const { getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>{t('pageTitle.guide')}</title>
      </Head>

      <div>
        <h2>{t('pageTitle.guide')}</h2>
      </div>
    </>
  )
}
