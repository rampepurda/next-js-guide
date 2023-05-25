import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from "next-translate/useTranslation"

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Head>
      <title>{t('welcome')}</title>
    </Head>
  )
}

export default Home
