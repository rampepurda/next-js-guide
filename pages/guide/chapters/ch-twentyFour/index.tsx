import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'
import ImgSwr from './ch24-use-sw.png'
import Image from 'next/image'

const ChTwentyFour: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-24 | useSwr </title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
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
          <h4>For more info see procejt: next-13-with-tailwind-git</h4>
          <InfoBox className={'isDanger'}>
            <h4>useSWR outside comp where will be imported</h4>
          </InfoBox>

          <Image src={ImgSwr} alt="useSwr" aria-hidden={true} />
        </div>
      </div>
    </>
  )
}

export default ChTwentyFour
