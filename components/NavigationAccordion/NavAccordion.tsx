import { Accordion, Navigation } from '../../components'
import { sidebarGuide, sidebarProjects, Pages, sidebarTypeScriptDoc } from '../../configuration'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters, NavType } from '../../types'

enum PathName {
  guide = '/guide',
  project = '/projects',
  typeScriptDoc = '/typeScriptDoc',
}

export const NavAccordion = () => {
  const pathName = usePathname()
  const [title, setTitle] = useState<string[]>([])
  const [chapters, setChapters] = useState<Chapters[]>([])

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(sidebarGuide)
      setTitle(Pages.subNavMedia.accordion.title.guide)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(sidebarProjects)
      setTitle(Pages.subNavMedia.accordion.title.project)
    }
    if (pathName.startsWith(`${PathName.typeScriptDoc}`)) {
      setChapters(sidebarTypeScriptDoc)
      setTitle(Pages.subNavMedia.accordion.title.tsDoc)
    }
  }, [pathName, chapters, title])

  return (
    <>
      <Accordion titles={title} isSubNav={true}>
        <Navigation links={chapters} isNav={NavType.Accordion} />
      </Accordion>
    </>
  )
}
