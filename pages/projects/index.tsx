import Link from "next/link"
import dataProject from '../../data-mock/data.json'
import Head from "next/head"
import useTranslation from "next-translate/useTranslation";

type Links = Array<{tKey: string, url: string}>

export default function Projects() {
  const navLinks: Links = dataProject.Projects.Navigation
  const { t } = useTranslation('projects')

  return (
    <div style={{padding: '1rem'}}>
      <Head>
        <title>NextJS with typescript</title>
      </Head>

      <h2>{t('common:pageTitle.projects')}</h2>
      <ul>
        {
          navLinks.map(({tKey, url}, index) => {
            return (
              <li key={index}>
                <Link href={`/projects/${url}`}>
                  {t(tKey)}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
