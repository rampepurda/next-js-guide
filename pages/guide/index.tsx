import { breakPoints, navigationGuideLinks } from '../../configuration'
import { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Navigation } from '../../components'
import { useEffect } from 'react'
import { useWindWidth } from '../../hooks'

const Guide: NextPage = () => {
  const { t } = useTranslation('common')
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>{t('pageTitle.guide')}</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9 col-m-12">
          <h2>{t('pageTitle.guide')}</h2>
        </div>
      </div>
    </>
  )
}

export default Guide
