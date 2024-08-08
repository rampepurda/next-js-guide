import { useAppSelector } from '../../redux/store'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import { sidebar } from '../../configuration'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters, NavType, PathName } from '../../types'
import { ROUTE } from '../../configuration'

export const Main = ({ children }: PropsWithChildren) => {
  const pathName = usePathname()
  const [chapters, setChapters] = useState<Chapters[]>([])
  const { theme } = useAppSelector((state) => state.Common)

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(sidebar.guide)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(sidebar.projects)
    }
    if (pathName.startsWith(`${PathName.tsDocumentation}`)) {
      setChapters(sidebar.typeScriptDoc)
    }
  }, [pathName, chapters])

  return (
    <main className={classNames({ ['isDark']: theme === 'dark' })}>
      <div className="cols">
        <div className="col-3">
          {pathName !== ROUTE.HOME && <Navigation links={chapters} isNav={NavType.Sidebar} />}
        </div>
        <div className="col-9 col-m-12">{children}</div>
      </div>
    </main>
  )
}
