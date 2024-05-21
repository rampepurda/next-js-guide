import { environment } from '../../../../configuration'
import Head from 'next/head'
import { Continent, PhotoType } from '../../../../types'
import Link from 'next/link'
import useSWR from 'swr'
import { fetcherGQL, fetcher } from '../../../../SWR/fetcher'
import { GET_CONTINENTS_QUERY } from '../../../../graphQLApollo/queries/continents'

export default function ChTwentyFour() {
  const { data, error, isLoading } = useSWR<{ continents: Continent[] } | undefined>(
    GET_CONTINENTS_QUERY,
    fetcherGQL
  )
  const Photos = () => {
    const { data, error, isLoading } = useSWR<PhotoType[]>(
      `${environment.photosURL}/?_limit=7`,
      fetcher
    )

    return (
      <>
        {error && <h2>Something went wrong!</h2>}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <ul className="hasVerticalPadding-5 hasTypeDecimal">
            {data?.map((photo: PhotoType, idx: number) => {
              return <li key={idx}>{photo.title}</li>
            })}
          </ul>
        )}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-24 | useSwr</title>
      </Head>

      <div>
        <h2>24. useSWR hook (React, Next) - Client-side Fetching </h2>

        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>
            <Link href="https://swr.vercel.app/docs/with-nextjs" target="_blank" rel="noreferrer">
              Read more about useSwr hook here
            </Link>
          </li>
          <li>
            <Link
              href="https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side"
              target="_blank"
              rel="noreferrer"
            >
              Read more about Client-side Fetching here
            </Link>
          </li>
        </ul>

        <div className="hasOutline">
          <p>
            The name “SWR” is derived from <strong>stale-while-revalidate</strong>, a HTTP cache
            invalidation strategy. SWR is a strategy to first return the data from cache (stale),
            then send the fetch request (revalidate), and finally come with the up-to-date data.
          </p>
        </div>

        <ul className="hasTypeDisc hasVerticalPadding-4">
          <li>
            <h3>Install:</h3>
            <strong>yarn add swr</strong>
            <br />
            <strong>npm i swr</strong>
          </li>
          <li>
            <h3>Import:</h3>
            import <strong>useSWR</strong> from &apos;swr&apos;
          </li>
        </ul>
        <ul className="hasOutline hasVerticalPadding-3">
          <li>
            <h3>Fetcher</h3>
            const <strong>fetcher</strong> = async (url: string): Promise&lt;
            <strong>any | undefined</strong>
            &gt; =&gt; &#123;
          </li>
          <li>&nbsp;const response = await fetch(url)</li>
          <li>&nbsp;return response.json()</li>
          <li>&#125;</li>
          <li>
            <h3>useSWR</h3>
            const &#123; data, error, isLoading &#125; = useSWR(`url`, <strong>fetcher</strong>)
          </li>
          <li>data?.map() =&gt; &#123; ... &#125;</li>
        </ul>

        <h3>Photos.title:</h3>
        <Photos />
        <hr />

        <h2>useSWR with Apollo GraphQL:</h2>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>
            <h3>Install:</h3>
            graphql-request library
          </li>
          <li>
            <h3>Import:</h3>
            <code>
              <h4>import &#123;request&#125; from &apos;graphql-request&apos;</h4>
            </code>
          </li>
        </ul>
        <ul className="hasOutline">
          <li>
            <h3>Fetcher</h3>
            const <strong>fetcher</strong> = async (query: string): Promise&lt;
            <strong>any | undefined</strong>
            &gt; =&gt; await <strong>request</strong>(&apos;url&apos;, query)
          </li>

          <li>
            <h3>useSWR</h3>
            const &#123; data, error, isLoading &#125; = useSWR(`queryKey`, <strong>fetcher</strong>
            )
            <br />
            data?.continents.map() =&gt; &#123; ... &#125;
          </li>
        </ul>
        <h3>Continents</h3>
        {error ? (
          <h2>Error Fetching</h2>
        ) : (
          <>
            {isLoading && <h3>Wait, loading</h3>}
            <ul className="hasTypeDecimal hasVerticalPadding-4">
              {data?.continents.map((cont: any, idx: number) => {
                return <li key={idx}>{cont.name}</li>
              })}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
