import { NextPage } from 'next'
import { Navigation, InfoBox } from '../../../../components'
import Head from 'next/head'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Link from 'next/link'
import { useWindWidth } from '../../../../hooks'
import { ROUTE } from '../../../../configuration'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const ChTwentyTwo: NextPage = () => {
  const router = useRouter()
  const t4 = usePathname()
  const router2 = useSearchParams()
  const t1 = router.query
  const t2 = router.pathname
  const t3 = router.push

  const { provider, name } = router.query
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-22 | router </title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          <h2>22. router: Next =&lt; 13</h2>
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
                  const &#123; provider, name &#125; = <strong>router.query</strong>
                </li>
              </ul>

              <hr />

              <ul className="hasVerticalPadding-3">
                <li>
                  <h3>get: query</h3>
                  return (<br />
                  &lt;h4&gt;Query param is:&#123; <strong>name</strong> &#125; &#123;
                  <strong>provider</strong> &#125;&lt;/h4&gt;
                  <br />)
                </li>
                <li>
                  <h3>get: pathname</h3>
                  return (<br />
                  &lt;Link className =&#123; <strong>router.pathname</strong> = &apos;home&apos; ?
                  &apos; red &apos; : &apos;black&apos; &#125; &#125; &gt; ...link &lt;/Link&gt;
                  <br />)
                </li>
              </ul>

              <h4>
                Query parameter is: &nbsp;
                <mark className="hasBgRed">
                  {name}
                  {provider}
                </mark>
              </h4>
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
            </div>
            <div className="col-6">
              <h3>Next 13 &gt;</h3>
              <mark>usePathname</mark>
              <mark>useSearchParams</mark>
              <hr />
              <ul className="hasVerticalPadding-3">
                <li>&nbsp;</li>
                <li>
                  export const <strong>useQuery</strong> = () =&lt; &#123;
                </li>
                <li>&nbsp;const params = useSearchParams()</li>
                <li>&nbsp;const queryParam = params</li>
                <li>
                  <strong>return &#123; queryParam &#125; &#125;</strong>
                </li>
                <li>&nbsp;</li>
                <li>
                  <h3>return(</h3>
                </li>
                <li>
                  &lt;p&gt; &#123; queryParam.<strong>get(&apos;paramName&apos;)</strong>&#125;
                  &lt;/p&gt;
                </li>
                <li>)</li>
              </ul>
              <mark>const queryParam = useSearchParams</mark>
              <mark>queryParam.get(&apos;&apos;)</mark>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTwentyTwo
