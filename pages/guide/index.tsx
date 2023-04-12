import Data from '../../data-mock/data.json'
import { navData } from "../../types"
import classNames from "classnames"
import { NextPage } from "next"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"
import { Navigation } from "../../core-components"

const Guide: NextPage = () => {
  const links: navData[] = Data.NavigationLeft
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('pageTitle.guide')}</title>
      </Head>

      <div>
        <div className='cols'>
          <div className={classNames( 'col-3 has-br')}>
            <Navigation links={links}/>
          </div>

          <div className='col-9'>
            <h1>{t('pageTitle.guide')}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Guide

