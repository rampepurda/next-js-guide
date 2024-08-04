import Head from 'next/head'
import Link from 'next/link'

export default function ChReduxRTKQuery() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | RTK Query</title>
      </Head>

      <div>
        <h2>Redux-Toolkit: RTK Query</h2>
        <div className="hasOutline">
          <h4>
            RTK Query takes inspiration from many other data fetching libraries in the ecosystem.
            Much like the Redux core library was inspired by tools like Flux and Elm, RTK Query
            builds on API design patterns and feature concepts popularized by libraries like
            <em>&nbsp;React Query, SWR, Apollo, and Urql</em>. RTK Query has been written from
            scratch, but tries to use the best concepts from those libraries and other data fetching
            tools, with an eye towards leveraging the unique strengths and capabilities of Redux.
          </h4>
          <Link
            href="https://redux-toolkit.js.org/rtk-query/overview"
            target="_blank"
            rel="noreferrer"
          >
            ...Read more here
          </Link>
        </div>

        <h2>Structure:</h2>
        <p>
          Dont need to install anything else. If RTK is already installed all tools for RTK Query
          are included.
        </p>
        <ul className="hasTypeDecimal hasVerticalPadding-3">
          <li>RTK file create: features</li>
          <li>create &apos;apiSlice&apos;</li>
          <li>setup &apos;store&apos;</li>
          <li>
            cover &lt;<strong>ApiProvider</strong> api= &#123;nameApi&#125;&gt; content &lt;/
            <strong>ApiProvider</strong>&gt;
          </li>
          <li>
            usage:
            <h5>
              import &#123;useGetAllProductsQuery&#125; from
              &apos;/../redux/features/apiSlices&apos;`
            </h5>
            <code>const &#123;(isLoading, data)&#125; = useGetAllProductsQuery()</code>
          </li>
        </ul>

        <h3>Read and check more here</h3>
        <ul className="hasVerticalPadding-3">
          <li>
            <Link
              href="https://redux-toolkit.js.org/rtk-query/overview"
              target="_blank"
              rel="noreferrer"
            >
              RTK Query
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=-8WEd578fFw"
              target="_blank"
              rel="noreferrer"
            >
              RTK Query Tutorial
            </Link>
          </li>
          <li>See structure in this Project: &apos;redux&apos; file</li>
        </ul>

        <h3>Conclusion:</h3>
        <p>
          Personally did not decide to use RTK Query, because can not see any reason or improvement
          .
        </p>
      </div>
    </>
  )
}
