import { NextPage } from 'next'
import classNames from 'classnames'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'

const ChSixteen: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-16 - JS CSS</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className={classNames('col-9')}>
          <h2>16. CSS in JS libraries</h2>
          <InfoBox className="isInfo">
            <h4>
              There are two primary methods of using Emotion. The first is{' '}
              <strong>framework agnostic</strong> and the second is{' '}
              <strong>for use with React</strong>.
            </h4>
          </InfoBox>

          <h3>1. Emotion[React, Styled]</h3>
          <ul className="hasTypeDisc">
            <li>
              <strong>Install:</strong>
              <h5>yarn add @emotion/react @emotion/styled</h5>
            </li>
            <li>
              <h5>
                <a href="https://emotion.sh/docs/install" target="_blank" rel="noreferrer">
                  Emotion includes Tutorials see here
                </a>
              </h5>
            </li>
            <li>
              <mark>styled</mark> is a way to create React components that have styles attached to
              them.
            </li>
            <li>
              See more in <strong>&apos;next-emotion-styled&apos;</strong>
            </li>
          </ul>
          <hr />

          <h3>2. CSS with PostCSS</h3>
          <h5>
            <a href="https://postcss.org/" target="_blank" rel="noreferrer">
              CSS with PostCSS see here
            </a>
          </h5>
          <h5>
            <a href="https://www.youtube.com/watch?v=ohJcZW60br0" target="_blank" rel="noreferrer">
              CSS with PostCSS Tutorials see here
            </a>
          </h5>
          <hr />

          <h3>3. React-JSS</h3>
          <h5>For more info see React TS Guide/Ch-2</h5>
        </div>
      </div>
    </>
  )
}

export default ChSixteen
