import { Accordion, Navigation } from '../../components'
import { Pages, sidebar } from '../../configuration'
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
      setChapters(sidebar.guide)
      setTitle(Pages.subNavMedia.accordion.title.guide)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(sidebar.projects)
      setTitle(Pages.subNavMedia.accordion.title.project)
    }
    if (pathName.startsWith(`${PathName.typeScriptDoc}`)) {
      setChapters(sidebar.typeScriptDoc)
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
