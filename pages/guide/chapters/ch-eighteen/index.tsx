import Head from 'next/head'
import { NextPage } from 'next'
import { Navigation } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import imgInstallNext from './img/installnext13.png'
import Image from 'next/image'

const ChEight: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Chapter18</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>18. Next 13.4.7 - What is new?</h2>
          <ul className="hasTypeDisc">
            <li>
              <a href="https://nextjs.org/blog/next-13-4" target="_blank">
                Next.js 13.4 - read more
              </a>{' '}
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=czvSZqnpTHs" target="_blank">
                Server Actions: NextJS 13.4's Best New Feature - read more
              </a>{' '}
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                target="_blank"
              >
                API Routes - read more
              </a>{' '}
            </li>
          </ul>
          <hr />

          <h3>Structure - Layout</h3>
          <ul className="hasTypeDisc">
            <li>Use App Router as is shown below</li>
            <li>_app &rarr; layout</li>
            <li>need to write: &lt;HTML&gt; &lt;HEAD&gt; &lt;HEADER&gt;</li>
            <li>metaData &rarr; includes layout</li>
            <li>stylesheet index can not be only in layout</li>
            <li>pages/ still in use</li>
          </ul>
          <Image src={imgInstallNext} alt="next13 installationprocess" aria-hidden="true" />

          <h3>Next.js App Router</h3>
          <p>For more info lets check project: NEXT_NEW_STRUCTURE</p>
          <ul className="hasTypeDisc">
            <li>configure: next.config.js</li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                target="_blank"
              >
                API Routes - read more
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChEight
