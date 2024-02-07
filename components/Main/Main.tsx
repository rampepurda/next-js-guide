import { useAppSelector } from '../../store'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import { navigationGuideLinks, navigationProjectsLinks, Pages } from '../../configuration'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters } from '../../types'

enum PathName {
  guide = '/guide',
  project = '/projects',
}

export const Main = ({ children }: any) => {
  const pathName = usePathname()
  const [chapters, setChapters] = useState<Chapters[]>([])
  const { isThemeDark } = useAppSelector((state) => state.Common)

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(navigationGuideLinks)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(navigationProjectsLinks)
    }
  }, [pathName, chapters])

  return (
    <main className={classNames({ ['isDark']: isThemeDark })}>
      <div className="cols">
        <div className="col-3">
          <Navigation links={chapters} />
        </div>

        <div className="col-9 col-m-12">{children}</div>
      </div>
    </main>
  )
}
