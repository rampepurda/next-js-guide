import { NextPage } from 'next'
import { Navigation, InfoBox, FormPostBook } from '../../../../components'
import Head from 'next/head'
import { environment, navigationGuideLinks } from '../../../../configuration'
import Link from 'next/link'
import { usePostBook } from '../../../../hooks'
import { ROUTE } from '../../../../configuration'
import { useRouter } from 'next/router'

const ChTwentyTwo: NextPage = () => {
  const router = useRouter()
  const { provider, name } = router.query
  const { handleSubmit } = usePostBook(
    `${environment.fireBaseBookURL}`,
    'Book you asking for was send to us'
  )
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-22 | useSearchParams </title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>22. useSearchParams: Next =&lt; 13</h2>
          <hr />

          <div className="cols">
            <div className="col-6">
              <h3>Next &lt; 13</h3>
              <InfoBox className={'isInfo'}>
                <ul className="hasVerticalPadding-3">
                  <li>
                    const router = <strong>useRouter()</strong>
                  </li>
                  <li>
                    <strong>const &#123; provider, name &#125;</strong> = router.query
                  </li>
                  <li>&nbsp;</li>
                  <li>
                    <strong>return</strong> ( &lt;h4&gt;Query param is:&#123; name &#125; &#123;
                    provider &#125;&lt;/h4&gt;)
                  </li>
                </ul>
              </InfoBox>

              <h4>
                Query parameter is: &nbsp;
                <mark>
                  &nbsp;
                  {name}
                  {provider}&nbsp;
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
              <h3>Next 13</h3>
              <InfoBox className={'isInfo'}>
                <ul className="hasVerticalPadding-3">
                  <li>
                    <h3>useHook</h3>
                  </li>
                  <li>
                    import <strong>&#123; useSearchParams &#125;</strong> from
                    &quot;next/navigation&quot;
                  </li>
                  <li></li>
                  <li>
                    export const <strong>useQuery</strong> = () =&lt; &#123;
                  </li>
                  <li>&nbsp;const params = useSearchParams()</li>
                  <li>&nbsp;const queryParam = params</li>
                  <li>
                    <strong>return &#123; queryParam &#125; &#125;</strong>
                  </li>
                  <li>
                    <h3>page</h3>
                  </li>
                  <li>...return (</li>
                  <li>
                    &lt;p&gt; &#123; queryParam.<strong>get(&apos;paramName&apos;)</strong>&#125;
                    &lt;/p&gt
                  </li>
                  <li>)</li>
                </ul>
              </InfoBox>
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
