import { NextPage } from 'next'
import { Navigation } from '../../../../components'
import Head from 'next/head'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Link from 'next/link'
import { useWindWidth } from '../../../../hooks'
import { ROUTE } from '../../../../configuration'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useAppSelector } from '../../../../store'
import classNames from 'classnames'

const ChTwentyTwo: NextPage = () => {
  const { isThemeDark } = useAppSelector((state) => state.Common)
  const router = useRouter()
  const queries = useSearchParams()
  const pathName = usePathname()
  const { provider, name } = router.query
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-22 | useHooks </title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          <h2>22. useHooks in Next =&lt; 13 and higher</h2>
          <hr />

          <div className="cols">
            <div className="col-6">
              <h3>Next &lt; 13</h3>
              <mark>useRouter</mark>
              <ul className="hasVerticalPadding-3">
                <li>
                  const <strong>router</strong> = <strong>useRouter()</strong>
                </li>
                <li>
                  const &#123; name, provider &#125; = <strong>router.query</strong>
                </li>
              </ul>
              <hr />

              <h3>get: query</h3>
              <ul className="hasVerticalPadding-3">
                <li>
                  return (<br />
                  &lt;h4&gt;&#123; <strong>name</strong> &#125; &#123; <strong>provider</strong>
                  &#125;&lt;/h4&gt;
                  <br />)
                </li>
              </ul>
              <h4>Query parameter is:</h4>
              <mark className={classNames('hasBgDarkmagenta', { ['hasBgRed']: isThemeDark })}>
                {name === undefined && provider === undefined ? (
                  <span>...select Link below</span>
                ) : (
                  `${name !== undefined ? name : ''} ${provider !== undefined ? provider : ''}`
                )}
              </mark>

              <ul className="hasVerticalPadding-3">
                <li>
                  <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-twentyTwo?name=netflix`}>Netflix</Link>
                </li>
                <li>
                  <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-twentyTwo?provider=zillow-group`}>
                    Zillow Group
                  </Link>
                </li>
              </ul>
              <hr />

              <h3>get: pathname</h3>
              <ul>
                <li>
                  return (<br />
                  &lt;Link className =&#123; <strong>router.pathname</strong> = &apos;home&apos; ?
                  &apos; red &apos; : &apos;black&apos; &#125; &#125; &gt; ...link &lt;/Link&gt;
                  <br />)
                </li>
              </ul>
            </div>

            <div className="col-6">
              <h3>Next 13 &gt;</h3>
              <mark>usePathname</mark>
              <mark>useSearchParams</mark>
              <ul className="hasVerticalPadding-3">
                <li>
                  const <strong>pathName</strong> = <strong>usePathname()</strong>
                </li>
                <li>
                  const <strong>query</strong> = <strong>useSearchParams()</strong>
                </li>
              </ul>
              <hr />

              <h3>get: query</h3>
              <ul className="hasVerticalPadding-3">
                <li>
                  return (<br />
                  &lt;h4&gt; <strong>&#123;query.get(&apos;name&apos;)&#125;</strong> &lt;/h4&gt;
                  <br />)
                </li>
              </ul>

              <h4>Query parameter is:</h4>
              <mark className="hasBgDarkmagenta">{queries.get('name2')}&nbsp;</mark>

              <ul className="hasVerticalPadding-3">
                <li>
                  <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-twentyTwo?name2=netflixis`}>Netflix</Link>
                </li>
              </ul>
              <hr />

              <h3>get: pathName</h3>
              <h4>{pathName}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTwentyTwo
