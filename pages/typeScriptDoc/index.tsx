import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function TypeScriptDoc() {
  const { t } = useTranslation('projects')

  return (
    <>
      <Head>
        <title>TypeScript Document</title>
      </Head>

      <div>
        <h2>{t('tsDocumentation.title')}</h2>
      </div>
    </>
  )
}
