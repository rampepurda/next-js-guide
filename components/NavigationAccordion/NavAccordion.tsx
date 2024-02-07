import { Navigation, Accordion } from '../../components'
import { navigationGuideLinks, navigationProjectsLinks, Pages } from '../../configuration'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

enum PathName {
  guide = '/guide',
  project = '/projects',
}

type Chapters = {
  tKey: string
  link: string
}

export const NavAccordion = () => {
  const pathName = usePathname()
  const [title, setTitle] = useState<string[]>([])
  const [chapters, setChapters] = useState<Chapters[]>([])

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(navigationGuideLinks)
      setTitle(Pages.subNavMedia.accordion.title.guide)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(navigationProjectsLinks)
      setTitle(Pages.subNavMedia.accordion.title.project)
    }
  }, [pathName, chapters, title])

  return (
    <>
      <Accordion titles={title} isSubNav={true}>
        <Navigation links={chapters} isNavAccordion={true} />
      </Accordion>
    </>
  )
}
