import classes from './Search.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { NavigationLink } from '../../types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import classNames from 'classnames'
import { searchParamsToUrlQuery } from 'next/dist/shared/lib/router/utils/querystring'

type Props = {
  data: NavigationLink[]
  ClassNames?: string
}

export const Search = ({ data, ClassNames }: Props) => {
  const params = useSearchParams()
  const paramsGet = params.get('searchParam')?.toLowerCase()
  const foundedData = data.filter((i) =>
    i.tKey.toLowerCase().includes(`${params.get('searchParam')?.toLowerCase()}`)
  )
  const isParamFailed = useMemo(() => {
    if (paramsGet !== 'undefined' && paramsGet !== null) {
      return true
    }
  }, [paramsGet, params])

  const handleSearch = () => {}

  return (
    <div className={ClassNames}>
      <form className={classes.form} name="searchChapter" onSubmit={handleSearch}>
        <input
          type="search"
          name="searchParam"
          placeholder="insert text"
          defaultValue={undefined}
          required={true}
        />
        <div>
          <button className={classes.btnSearch} type="submit">
            <Image src="/ico-search.svg" height={25} width={25} alt="searchico" />
          </button>
        </div>
      </form>

      <ul
        className={classNames(
          'hasVerticalPadding-4',
          foundedData.length !== 0 && classes.searchResult
        )}
      >
        {foundedData?.map((chapter, idx: number) => {
          return (
            <li key={idx}>
              <Link href={`${chapter.link}`}>{chapter.tKey}</Link>
            </li>
          )
        })}
        {params.get('searchParam') !== 'undefined' &&
          params.get('searchParam') !== null &&
          foundedData.length === 0 && (
            <li className={classes.searchResult}>
              no matches for: <strong>{params.get('searchParam')}</strong>{' '}
            </li>
          )}
      </ul>
    </div>
  )
}
