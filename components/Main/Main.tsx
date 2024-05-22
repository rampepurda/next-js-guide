import { useAppDispatch, useAppSelector } from '../../redux/store'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import { environment, sidebar } from '../../configuration'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters, NavType, PathName } from '../../types'
import { getCountries, getPhotosWithLimit } from '../../redux/slices'
import { ROUTE } from '../../configuration'

export const Main = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()
  const pathName = usePathname()
  const [chapters, setChapters] = useState<Chapters[]>([])
  const { isThemeDark } = useAppSelector((state) => state.Common)

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
    dispatch(getCountries())
    dispatch(getPhotosWithLimit({ url: `${environment.photosURL}`, hasLimit: 233 }))
  }, [pathName, chapters])

  return (
    <main className={classNames({ ['isDark']: isThemeDark })}>
      <div className="cols">
        <div className="col-3">
          {pathName !== ROUTE.HOME && <Navigation links={chapters} isNav={NavType.Sidebar} />}
        </div>

        <div className="col-9 col-m-12">{children}</div>
      </div>
    </main>
  )
}
