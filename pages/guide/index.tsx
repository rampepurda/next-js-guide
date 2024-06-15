import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Guide() {
  const { t } = useTranslation('common')
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
