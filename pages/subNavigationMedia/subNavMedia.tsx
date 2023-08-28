import useTranslation from 'next-translate/useTranslation'
import { Navigation, Accordion } from '../../components'
import {
  breakPoints,
  navigationGuideLinks,
  navigationProjectsLinks,
  Pages,
} from '../../configuration'
import { useWindWidth } from '../../hooks'
import { useEffect } from 'react'

enum PathName {
  guide = '/guide',
  project = '/projects',
}

export const SubNavMedia = (pathName: any) => {
  const { t } = useTranslation('projects')
  const { windowSize, getWindWidth } = useWindWidth()
  const titleProject = Pages.subNavMedia.accordion.title.project
  const titleGuide = Pages.subNavMedia.accordion.title.guide

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      {windowSize < breakPoints.isMediumDevice && pathName.startsWith(`${PathName.guide}`) && (
        <Accordion titles={titleGuide}>
          <Navigation links={navigationGuideLinks} />
        </Accordion>
      )}

      {windowSize < breakPoints.isMediumDevice && pathName.startsWith(`${PathName.project}`) && (
        <Accordion titles={titleProject}>
          <Navigation links={navigationProjectsLinks} />
        </Accordion>
      )}
    </>
  )
}
