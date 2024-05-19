import { useAppDispatch, useAppSelector } from '../../redux/store'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import {
  environment,
  sidebarGuide,
  sidebarProjects,
  sidebarTypeScriptDoc,
} from '../../configuration'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters, NavType, PathName } from '../../types'
import { getCountries, getPhotosWithLimit } from '../../redux/slices'

export const Main = ({ children }: any) => {
  const dispatch = useAppDispatch()
  const pathName = usePathname()
  const [chapters, setChapters] = useState<Chapters[]>([])
  const { isThemeDark } = useAppSelector((state) => state.Common)

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(sidebarGuide)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(sidebarProjects)
    }
    if (pathName.startsWith(`${PathName.tsDocumentation}`)) {
      setChapters(sidebarTypeScriptDoc)
    }
    dispatch(getCountries())
    dispatch(getPhotosWithLimit({ url: `${environment.photosURL}`, hasLimit: 233 }))
  }, [pathName, chapters])

  return (
    <main className={classNames({ ['isDark']: isThemeDark })}>
      <div className="cols">
        <div className="col-3">
          <Navigation links={chapters} isNav={NavType.Sidebar} />
        </div>

        <div className="col-9 col-m-12">{children}</div>
      </div>
    </main>
  )
}
