import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Navigation } from '../../components'
import { navigationProjectsLinks } from '../../configuration'

export default function Projects() {
  const { t } = useTranslation('projects')

  return (
    <>
      <Head>
        <title>{t('common:pageTitle.projects')}</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className="col-9">
          <h1>{t('common:pageTitle.projects')}</h1>
        </div>
      </div>
    </>
  )
}
