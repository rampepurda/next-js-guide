import { NextPage } from 'next'
import { environment } from '../../../../configuration'
import Head from 'next/head'
import ImgSwr from './ch24-use-sw.png'
import Image from 'next/image'
import { useSwr, useSwrGQL } from '../../../../hooks/useSwr'
import { PhotoType } from '../../../../types'
import Link from 'next/link'

const ChTwentyFour: NextPage = () => {
  const url: string = `${environment.photosURL}`
  const { data, error, isLoading } = useSwrGQL(`query Continents {
    continents {
      name
      code
    }
  }`)

  const Photos = ({ url }: { url: string }) => {
    const { data, error } = useSwr(url, 10)
    const photos: PhotoType[] = data

    if (error) return <h2>Something went wrong!</h2>
    if (!photos) return <h2>Loading...</h2>

    return (
      <ul className="hasVerticalPadding-4">
        {photos.map((photo: PhotoType, idx: number) => {
          return (
            <li key={idx}>
              <strong>{idx + 1}.</strong> {photo.title}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-24 | useSwr</title>
      </Head>

      <div>
        <h2>24. useSwr hook (React, Next) - Client-side Fetching </h2>

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

        <ul className="hasTypeDisc hasVerticalPadding-2">
          <li>
            <h3>Install:</h3>
            <strong>yarn add swr</strong>
            <br />
            <strong>npm i swr</strong>
          </li>
          <li>
            <h3>Use:</h3>
            <strong>import useSWR from &apos;swr&apos;</strong>
            <br />
            <strong>const &#123; data, error, isLoading &#125; = useSWR(url, fetcher)</strong>
          </li>
        </ul>

        <Image src={ImgSwr} alt="useSwr" aria-hidden={true} />
        <h3>Photos.title:</h3>
        <Photos url={url} />

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
              <hr />
            </code>
          </li>
        </ul>

        <h2>get Continents</h2>
        {error ? (
          <h2>Error Fetching</h2>
        ) : (
          <>
            {isLoading && <h3>Wait, loading</h3>}
            <ul className="hasTypeDecimal hasVerticalPadding-4">
              {data?.continents.map((cont, idx: number) => {
                return <li key={idx}>{cont.name}</li>
              })}
            </ul>
          </>
        )}

        <ul className="hasOutline">
          <li>
            <h3>Fetcher, useSWR:</h3>
            <strong>type ContinentsResponse</strong> = &#123;
            <br />
            &nbsp;continents: &#123; name: string, code: string&#125; [ ] <br /> &#125;
          </li>
          <li>
            const <strong>fetcher</strong> = async (query: string): Promise&lt;
            <strong>ContinentsResponse</strong>
            &gt; =&gt; await request(&apos;url&apos;, query)
          </li>
          <li>
            const useSwr = (query: string) =&gt;&#123; <br />
            &nbsp;&nbsp;const &#123; data, error, isLoading&#125; ={' '}
            <strong>useSWR&lt;ContinentsResponse</strong>
            &gt;(<strong>GET_CONTINENTS_QUERY, fetcher</strong>)<br /> &nbsp;&nbsp;return &#123;
            data, error, isLoading&#125;
            <br />
            &#125;
            <hr />
          </li>
          <li>
            <h3>App Rendering:</h3>
            const &#123; data, error, isLoading &#125; = useSWR(`queryKey`, fetcher)
            <br />
            data?.continents.map() =&gt; &#123; ... &#125;
          </li>
        </ul>
      </div>
    </>
  )
}

export default ChTwentyFour
