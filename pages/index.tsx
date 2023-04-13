import type { NextPage } from 'next'
import Head from 'next/head'
import {useTranslation} from "react-i18next"

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('common:welcome')}</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    </>
  )
}

export default Home
