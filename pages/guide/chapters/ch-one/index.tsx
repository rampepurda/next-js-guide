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

export default function ChOne() {
  const { getWindWidth } = useWindWidth()
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

      <div>
        <h2>1. Routing</h2>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
              target="_blank"
              rel="noreferrer"
            >
              Read more about routing
            </a>
          </li>
        </ul>
        <hr />

        <h2>1.1 Pages and Layout</h2>
        <mark>app/blog/page.ts &rarr; app/blog</mark>
        <h4 className="hasOutline">
          A page is UI that is unique to a route. You can define pages by exporting a component from
          a page.js file. Use nested folders to define a route and a page.js file to make the route
          publicly accessible.
          <br />
          [app/blog/page.ts = Next 14]
        </h4>

        <h2>1.2 route-groups</h2>
        <mark>app/(chapters)/ch1/page.ts &rarr; app/ch1</mark>
        <h4>Convention</h4>

        <h4 className="hasOutline">
          A route group can be created by wrapping a folder&apos;s name in parenthesis:{' '}
          <strong>(folderName)</strong>
        </h4>

        <h2>1.3 Dynamic routes [slug]</h2>
        <mark>useParams()</mark>
        <mark>useRouter()</mark>

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
          When you <strong>don&apos;t know the exact segment names</strong> ahead of time and want
          to create routes from dynamic data, you can use{' '}
          <strong>
            Dynamic Segments that are filled in at request time or prerendered at build time
          </strong>
          .
        </p>
        <h3>Convention</h3>
        <div className="hasOutline">
          <h4>
            A Dynamic Segment can be created by wrapping a file or folder name in{' '}
            <strong>square brackets: [segmentName]. For example, [id] or [slug]</strong>.
          </h4>
          <ul className="isHorizontal">
            <li>
              <Link
                href="https://nextjs.org/docs/app/api-reference/functions/use-params"
                target="_blank"
                rel="external"
              >
                Read more: useParams()
              </Link>
            </li>
            <li>
              <Link
                href="https://nextjs.org/docs/pages/api-reference/functions/use-router"
                target="_blank"
                rel="external"
              >
                Read more: useRouter()
              </Link>
            </li>
          </ul>
        </div>

        <h3>How to get params:</h3>
        <ul className="hasVerticalPadding-3">
          <li>const router = useRouter()</li>
          <li>const &#123; slug = [] &#125; = router.query</li>
          <li>const params = useParams&lt;&#123; slug: string &#125;&gt;()</li>
          <li>render:</li>
          <li>&#123; slug &#125;</li>
          <li>&#123; params.slug &#125;</li>
          <li></li>
        </ul>

        <ul className="isHorizontal">
          {dummyRoutes.map((link) => {
            return (
              <li key={link.title}>
                <Link href={`${link.url}`}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
        <hr />

        <h2>1.4 Catch all segments [...slug]</h2>
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
            Dynamic routes can be extended to catch all paths by adding three dots (...) inside the
            brackets. For example:
            <h5>
              pages/post/[...slug].js not only matches /post/a, but also /post/a/b, /post/a/b/c, and
              so on.
            </h5>
            <h5>pages/post/[...slug].js does not match /post.</h5>
          </li>
        </ul>
        <Image src={imgSlug} aria-hidden={true} alt="slug how it works" />

        <h3>1.5 Link href dynamic [slug] in Next 13 and higher.</h3>
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
          &lt;Link <strong>href=&#123;&apos;/route/slug&apos;&#125;</strong>
          &gt;link &lt;/Link&gt;
        </code>
        <hr />

        <h3>1.6 Fetching dynamical data options.</h3>
        <code>
          const response = await fetch(url, &#123; <br />
          &nbsp;&#123;
          <br />
          &nbsp;&nbsp;<strong>cache</strong>: &apos;no-store&apos; / &apos;force-cache&apos;,
          <br />
          &nbsp;&nbsp;<strong>next:</strong> &#123; revalidate: 5&#125;
          <br />
          &nbsp;&#125;
          <br /> &#125;)
        </code>
        <hr />

        <h3>1.7 Absolute vs relative path and attribute - relative</h3>
        <mark>/Absolute</mark>
        <mark>relative</mark>
        <mark>Link relative = &apos;path&apos;/&apos;route&apos;</mark>
        <ul className="hasTypeDisc">
          <li>
            <h4>/Absolute</h4>
            <code>
              &lt;Link to=&#123;`$&#123;<strong className="color-is-red">/</strong>
              photo.id&#125;`&#125;/&gt;
            </code>
          </li>
          <li>
            <h4>Relative - to parent</h4>
            <code>&lt;Link to=&#123;`$&#123;photo.id&#125;`&#125;/&gt;</code>
          </li>
          <li>
            <h4>Link relative to: &apos;path&apos;/ &apos;route&apos;</h4>
            <code>
              &lt;Link to=&#123;`$&#123;photo.id&#125;`&#125;{' '}
              <strong>relative = &apos;route&apos;</strong>&gt;
            </code>
          </li>
        </ul>
      </div>
    </>
  )
}
