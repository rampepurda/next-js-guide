import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

/**
 * REMEMBER: index.tsx is generated later than _app.tsx
 * In case another <title>...name</title> is used - will be overwritten by index.tsx <title/>
 */
const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Head>
      <title>{t('title')}</title>
    </Head>
  )
}

export default Home
