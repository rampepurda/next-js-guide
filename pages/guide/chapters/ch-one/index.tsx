import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import Image from 'next/image'
import imgSlug from '../../../../public/images/ch-one/slug.png'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'
import Link from 'next/link'

/**
 * Read more about [slug] and [...slug]
 https://nextjs.org/docs/routing/dynamic-routes
 */

const ChOne: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()
  const dummyRoutes: { title: string; url: string }[] = [
    { title: 'Link Dummy I', url: '/guide/chapters/ch-one/dummyOne?chanel=netflix' },
    { title: 'Link Dummy III', url: '/guide/chapters/ch-one/dummyThree' },
    { title: 'Link Dummy II', url: '/guide/chapters/ch-one/dummyTwo' },
  ]
  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-one | Routes</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          <h2>1. Dynamic routes and Catch All Segments</h2>
          <hr />

          <h3>1.1 Dynamic routes [slug]</h3>
          <ul className="hasTypeDisc">
            <li>
              <a
                href="https://nextjs.org/docs/routing/dynamic-routes"
                target="_blank"
                rel="noreferrer"
              >
                [slug] read more
              </a>
            </li>
          </ul>
          <p>
            When you <strong>don't know the exact segment names</strong> ahead of time and want to
            create routes from dynamic data, you can use{' '}
            <strong>
              Dynamic Segments that are filled in at request time or prerendered at build time
            </strong>
            .
          </p>
          <h3>Convention</h3>
          <p>
            A Dynamic Segment can be created by wrapping a file or folder name in{' '}
            <strong>square brackets: [segmentName]. For example, [id] or [slug]</strong>.
          </p>
          <InfoBox className="isInfo">
            <h4>
              Dynamic Segments can be accessed from &nbsp;
              <a
                href="https://nextjs.org/docs/pages/api-reference/functions/use-router"
                target="_blank"
                rel="external"
              >
                useRouter
              </a>
              .
            </h4>
          </InfoBox>

          <ul>
            {dummyRoutes.map((link) => {
              return (
                <li key={link.title}>
                  <Link href={`${link.url}`}>{link.title}</Link>
                </li>
              )
            })}
          </ul>
          <hr />

          <h3>1.2 Catch all segments [...slug]</h3>
          <ul className="hasTypeDisc">
            <li>
              <a
                href="https://nextjs.org/docs/routing/dynamic-routes"
                target="_blank"
                rel="noreferrer"
              >
                [...slug] read more
              </a>
            </li>
            <li>
              Dynamic routes can be extended to catch all paths by adding three dots (...) inside
              the brackets. For example:
              <h5>
                pages/post/[...slug].js not only matches /post/a, but also /post/a/b, /post/a/b/c,
                and so on.
              </h5>
              <h5>pages/post/[...slug].js does not match /post.</h5>
            </li>
          </ul>
          <Image src={imgSlug} aria-hidden={true} alt="slug how it works" />

          <h3>1.3 Link href dynamic [slug] in Next 13 and higher.</h3>
          <ul className="hasTypeDisc">
            <li>
              <a
                href="https://nextjs.org/docs/messages/app-dir-dynamic-href"
                target="_blank"
                rel="noreferrer"
              >
                Read more here about dynamic link href
              </a>
            </li>
          </ul>
          <h3>Before:</h3>
          <code>
            &lt;Link <br />
            &nbsp;&nbsp;href=&#123;&#123;
            <br />
            &nbsp;&nbsp;&nbsp;<strong>pathname: &apos;/route/[slug]&apos;</strong>,
            <br /> &nbsp;&nbsp;&nbsp;<strong>query: &#123; slug: &apos;1&apos; &#125;</strong>,
            <br />
            &#125;&#125; &gt;link &lt;/Link&gt;
          </code>

          <h3>After:</h3>
          <code>
            &lt;Link <strong>href=&#123;&apos;/route/[slug]&apos;&#125;</strong>
            &gt;link &lt;/Link&gt;
          </code>
          <hr />

          <h3>1.4 Fetching dynamical data parameters.</h3>
          <code>
            const response = await fetch(url, &#123; <br />
            &nbsp;&#123;
            <br />
            &nbsp;&nbsp;<strong>cache</strong>: &apos;no-store&apos;,
            <br />
            &nbsp;&nbsp;<strong>next:</strong> &#123; revalidate: 5&#125;
            <br />
            &nbsp;&#125;
            <br /> &#125;)
          </code>
        </div>
      </div>
    </>
  )
}

export default ChOne
