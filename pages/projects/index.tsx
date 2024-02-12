import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Projects() {
  const { t } = useTranslation('projects')

  return (
    <>
      <Head>
        <title>{t('projects.title')}</title>
      </Head>

      <div>
        <h2>{t('projects.title')}</h2>
      </div>
    </>
  )
}
