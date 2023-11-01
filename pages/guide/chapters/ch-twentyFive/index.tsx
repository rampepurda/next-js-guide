import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'

const ChTwentyFive: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-25 | Font </title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          <h2>25. Font - how to work in Next and how to setup</h2>
        </div>
      </div>
    </>
  )
}

export default ChTwentyFive
