import { NextPage } from 'next'
import { InfoBox } from '../../../../components'
import { environment } from '../../../../configuration'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ImgSwr from './ch24-use-sw.png'
import Image from 'next/image'
import { useSwr, useSwrGQL } from '../../../../hooks/useSwr'
import { Country, PhotoType } from '../../../../types'

export type CountriesResponse = {
  countries: Country[]
}

const ChTwentyFour: NextPage = () => {
  const url: string | undefined = `${environment.photosURL}`
  const { data, error } = useSwrGQL()
  const [dataCountries, setDataCountries] = useState<any>()
  const PhotosSWR = ({ url }: { url: string }) => {
    const { data, error } = useSwr(url, 10)
    const photos: PhotoType[] = data

    if (error) return <h2>Something went wrong!</h2>
    if (!photos) return <h2>Loading...</h2>

    return (
      <>
        {photos.map((photo: PhotoType, idx: number) => {
          return (
            <p key={idx}>
              <strong>{idx + 1}.</strong> {photo.title}
            </p>
          )
        })}
      </>
    )
  }

  useEffect(() => {
    setDataCountries([data])
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-24 | useSwr</title>
      </Head>

      <div>
        <h2>24. useSwr hook (React, Next) - Client-side Fetching</h2>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>
            <a href="https://swr.vercel.app/docs/with-nextjs" target="_blank" rel="noreferrer">
              Read more about useSwr hook here
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side"
              target="_blank"
              rel="noreferrer"
            >
              Read more about Client-side Fetching here
            </a>
          </li>
        </ul>
        <hr />
        <InfoBox className={'isInfo'}>
          <p>
            The name “SWR” is derived from <mark>stale-while-revalidate</mark>, a HTTP cache
            invalidation strategy. SWR is a strategy to first return the data from cache (stale),
            then send the fetch request (revalidate), and finally come with the up-to-date data.
          </p>
        </InfoBox>
        <h3>Install:</h3>
        <ul className="hasVerticalPadding-2">
          <li>
            <strong>yarn add swr</strong>
          </li>
          <li>
            <strong>npm i swr</strong>
          </li>
        </ul>
        <hr />
        <h3>Use:</h3>
        <ul className="hasVerticalPadding-2">
          <li>
            <strong>import useSWR from &apos;swr&apos;</strong>
          </li>
          <li>
            <strong>const &#123; data, error, isLoading &#125; = useSWR(key, fetcher)</strong>
            <h5>
              &apos;key&apos;: url, &apos;fetcher&apos;: It is a good practice to extract Fn as
              &apos;fetcher&apos;
            </h5>
          </li>
        </ul>
        <h4>For more info see project: next-13-with-tailwind-git</h4>
        <InfoBox className={'isDanger'}>
          <h4>useSWR outside comp where will be imported</h4>
        </InfoBox>
        <Image src={ImgSwr} alt="useSwr" aria-hidden={true} />
        <h3>fetch data.json by useSWR:</h3>
        <PhotosSWR url={url} />
        <hr />

        <h3>fetch data queries by useSWR:</h3>
        <label>Install:</label>
        <h4>graphql-request library</h4>

        <label>Import:</label>
        <code>
          <h4>import &#123;request&#125; from &apos;graphql-request&apos;</h4>
          <hr />
        </code>
        <code>
          <ul>
            <li>
              const fetcherGQL = async (query: any) =&gt; await
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              request('https://countries.trevorblades.com', query)
            </li>
            <li>
              const &#123; data, error &#125; = useSWR&lt;any&gt;(GET_COUNTRIES_QUERY, fetcherGQL)
              return &#123; data, error&#125;
            </li>
          </ul>
        </code>

        <InfoBox className={'isWarning'}>
          <p>
            I was not satisfied to get queries data in that case. Got 'data' but wasn`t able to use
            it!
            <br />
            <strong>(May the problem is in 'fetcher' typescript - check it later)</strong>
          </p>
        </InfoBox>
      </div>
    </>
  )
}

export default ChTwentyFour
