import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Navigation, Accordion } from '../../components'
import { breakPoints, navigationProjectsLinks, Pages } from '../../configuration'
import { useWindWidth } from '../../hooks'
import { useEffect } from 'react'

export default function Projects() {
  const { t } = useTranslation('projects')
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>{t('projects.title')}</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3">
            <Navigation links={navigationProjectsLinks} />
          </div>
        )}

        <div className="col-9 col-m-12">
          <h1>{t('projects.title')}</h1>
        </div>
      </div>
    </>
  )
}
