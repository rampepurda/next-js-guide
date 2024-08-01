import classes from './Search.module.scss'
import { useMemo } from 'react'
import { NavigationLink } from '../../types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import classNames from 'classnames'
import { Button, Icon, Input } from '../UI'
import { ROUTE } from '../../configuration'

type Props = {
  data: NavigationLink[]
  ClassNames?: string
}

export const Search = ({ data, ClassNames }: Props) => {
  const params = useSearchParams()
  const foundedData = data.filter((i) =>
    i.tKey.toLowerCase().includes(`${params.get('searchParam')?.toLowerCase()}`)
  )
  const isParamFailed = useMemo(() => {
    if (params.get('searchParam') !== 'undefined' && params.get('searchParam') !== null) {
      return true
    }
  }, [params])
  const handleSearch = () => {}

  return (
    <div className={ClassNames}>
      <form className={classes.form} name="searchChapter" onSubmit={handleSearch}>
        <Input
          id={'inpSearch'}
          className={classes.inpSearch}
          ariaLabel={'search'}
          rest={{
            name: 'searchParam',
            type: 'search',
            placeholder: 'Searching for..',
            defaultValue: undefined,
            required: true,
          }}
        />
        <div>
          <Button
            ClassName={classes.btnSearch}
            rest={{ type: 'submit' }}
            ariaLabel={'Click to search'}
          >
            <Icon icoName={'ico-search'} alt={'ico search'} rest={{ priority: false }} />
          </Button>
        </div>
      </form>
      <ul
        className={classNames(
          'hasVerticalPadding-4',
          foundedData.length !== 0 && classes.searchResult
        )}
      >
        {foundedData.length > 0 && (
          <li>
            <Button
              ClassName={classes.clearResultBtn}
              rest={{ type: 'button' }}
              ariaLabel={'Close search result'}
            >
              <Link href={ROUTE.GUIDE}>x</Link>
            </Button>
          </li>
        )}
        {foundedData?.map((chapter, idx: number) => {
          return (
            <li key={idx}>
              <Link href={`${chapter.link}`}>{chapter.tKey}</Link>
            </li>
          )
        })}
        {isParamFailed && foundedData.length === 0 && (
          <li className={classes.noMatches}>
            no matches for: <strong>{params.get('searchParam')}</strong>
            <Button
              ClassName={classes.clearResultBtn}
              rest={{ type: 'button' }}
              ariaLabel={'Close search result'}
            >
              <Link href={ROUTE.GUIDE}>x</Link>
            </Button>
          </li>
        )}
      </ul>
    </div>
  )
}
