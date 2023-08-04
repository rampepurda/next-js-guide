import { NextPage } from 'next'
import Head from 'next/head'
import { InfoBox, Navigation } from '../../../../components'
import { navigationGuideLinks, ROUTE } from '../../../../configuration'
import React, { useEffect, useState } from 'react'
import { getInternalAPI } from '../../../../utils'
import { CarTypes } from '../../../../types'
import Link from 'next/link'

const ChNineteen: NextPage = () => {
  const [internalData, setInternalData] = useState<CarTypes[]>([])
  const loading = (data: CarTypes[]) => {
    return <h4>{data.length === 0 ? <h2>...Loading</h2> : ''}</h4>
  }

  useEffect(() => {
    getInternalAPI('/api/mock', setInternalData)
  }, [])
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-nineteen</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>19. Internal API routes</h2>
          <hr />

          <h3>Internal API</h3>
          <ul className="hasTypeDisc hasVerticalPadding-3">
            <li>pages/api/name or name/subName ...</li>
            <li>pages/api/mock</li>
            <li>
              Fn name: <strong>handler</strong> (is obliged/ rule to use)
            </li>
          </ul>
          <InfoBox className="isInfo">
            <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-eighteen`}>
              <a>More about Internal routes Api in Next 13 find in Chapter18-Next13</a>
            </Link>
          </InfoBox>
          <hr />

          <h3>How to get Internal API</h3>
          <ul className="hasVerticalPadding-2">
            <li>const getInternalAPI = async () =&gt; &#123;</li>
            <li>&nbsp;try &#123;</li>
            <li>
              &nbsp;&nbsp;const res = await fetch(<strong>&apos;/app/mock&apos;</strong>)
            </li>
            <li>&nbsp;&nbsp;if (res.ok) &#123;</li>
            <li>&nbsp;&nbsp;&nbsp;const data = await res.json()</li>
            <li>
              &nbsp;&nbsp;&nbsp;<strong>return setData(data)</strong>
            </li>
            <li>&nbsp;&nbsp;&#125;</li>
            <li>&nbsp;&#125; catch (err) &#123;&#123; return err&#125;&#125;</li>
          </ul>
          <h4>See example below:</h4>
          {loading(internalData)}
          {internalData.map((car: CarTypes, idx) => {
            return <div key={idx}>Model: {car.model}</div>
          })}
          <hr />

          <h3>How to get Internal API by SWR</h3>
          <ul className="hasVerticalPadding-2 hasTypeDisc">
            <li>
              {' '}
              <a href="https://swr.vercel.app/" rel="noreferrer" target="_blank">
                Read more about SWR
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/index.tsx"
                rel="noreferrer"
                target="_blank"
              >
                SWR example
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChNineteen
