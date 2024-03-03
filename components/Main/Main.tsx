import { useAppDispatch, useAppSelector } from '../../store'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import { navigationGuideLinks, navigationProjectsLinks } from '../../configuration'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Chapters, NavType } from '../../types'
import { getCountries } from '../../slices'

enum PathName {
  guide = '/guide',
  project = '/projects',
}

export const Main = ({ children }: any) => {
  const dispatch = useAppDispatch()
  const pathName = usePathname()
  const [chapters, setChapters] = useState<Chapters[]>([])
  const { isThemeDark } = useAppSelector((state) => state.Common)
  //const { data, error, loading } = useQuery(GET_COUNTRIES_QUERY)

  useEffect(() => {
    if (pathName.startsWith(`${PathName.guide}`)) {
      setChapters(navigationGuideLinks)
    }
    if (pathName.startsWith(`${PathName.project}`)) {
      setChapters(navigationProjectsLinks)
    }
    dispatch(getCountries())
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
