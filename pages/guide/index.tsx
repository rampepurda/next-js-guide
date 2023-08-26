import {
  breakPoints,
  navigationGuideLinks,
  navigationProjectsLinks,
  Pages,
} from '../../configuration'
import { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Accordion, Navigation } from '../../components'
import { useEffect } from 'react'
import { useWindWidth } from '../../hooks'

const Guide: NextPage = () => {
  const { t } = useTranslation('common')
  const { windowSize, getWindWidth } = useWindWidth()
  const accordionTitle = Pages.guide.accordion.title

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>{t('pageTitle.guide')}</title>
      </Head>

      <div>
        <div className="cols">
          <Accordion ClassName={'isLargeDevice'} titles={accordionTitle}>
            <Navigation links={navigationGuideLinks} />
          </Accordion>
          {windowSize > breakPoints.isMediumDevice && (
            <div className="col-3 has-br">
              <Navigation links={navigationGuideLinks} />
            </div>
          )}

          <div className="col-9 col-m-12">
            <h1>{t('pageTitle.guide')}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Guide
