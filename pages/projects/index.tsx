import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Navigation, Accordion } from '../../components'
import { breakPoints, navigationProjectsLinks, Pages } from '../../configuration'
import { useWindWidth } from '../../hooks'
import { useEffect } from 'react'

export default function Projects() {
  const { t } = useTranslation('projects')
  const { windowSize, getWindWidth } = useWindWidth()
  const accordionTitle = Pages.projects.accordion.title

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <div className="cols">
        <Accordion ClassName={'isLargeDevice'} titles={accordionTitle}>
          <Navigation links={navigationProjectsLinks} />
        </Accordion>
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationProjectsLinks} />
          </div>
        )}

        <div className="col-9 col-m-12">
          {windowSize > breakPoints.isMediumDevice && <h1>{t('headline')}</h1>}
        </div>
      </div>
    </>
  )
}
