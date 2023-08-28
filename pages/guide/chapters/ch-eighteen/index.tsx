import Head from 'next/head'
import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import imgInstallNext from './img/installnext13.png'
import imgNextWithoutApiRouter from './img/installnext13-app-router-no.png'
import Image from 'next/image'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'

const ChEight: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Chapter18</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          <h2>18. Next 13.4.7 - What is new?</h2>
          <ul className="hasTypeDisc hasVerticalPadding-3">
            <li>
              <a href="https://nextjs.org/blog/next-13-4" rel="noreferrer" target="_blank">
                Next.js 13.4 - read more
              </a>{' '}
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=czvSZqnpTHs"
                rel="noreferrer"
                target="_blank"
              >
                Server Actions: NextJS 13.4 s Best New Feature - read more
              </a>{' '}
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                rel="noreferrer"
                target="_blank"
              >
                API Routes - read more
              </a>{' '}
            </li>
          </ul>
          <hr />
          <h3>Use App Route: layout structure</h3>
          <InfoBox className="isDanger">
            <p>
              Use App Route (recommended) Yes - during installation: REMEMBER - is still in Beta
              version!!
            </p>
          </InfoBox>
          <ul className="hasTypeDisc">
            <li>Use App Router as is shown below</li>
            <li>_app &rarr; layout</li>
            <li>Don`t need to write: &lt;HTML&gt; &lt;HEAD&gt; &lt;HEADER&gt;</li>
            <li>metaData &rarr; includes layout</li>
            <li>stylesheet index can not be only in layout</li>
            <li>pages/ still in use</li>
          </ul>
          <Image src={imgInstallNext} alt="next13 installationprocess" aria-hidden="true" />
          <h3>Next.js Internal App Routers</h3>
          <p>For more info lets check project: NEXT-13-USE-APP-ROUTE-WITH-tailwind</p>
          <InfoBox className="isDanger">
            <p>REMEMBER: In case using Internal Api Routes const must be outside of default Fn!</p>
          </InfoBox>
          <ul className="hasTypeDisc">
            <li>configure: next.config.js</li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                target="_blank"
                rel="noreferrer"
              >
                API Routes - read more
              </a>{' '}
            </li>
          </ul>
          <hr />

          <h3>Custom Document (api/_document.tsx)</h3>
          <a
            href="https://nextjs.org/docs/pages/building-your-application/routing/custom-document"
            rel="noreferrer"
            target="_blank"
          >
            Read more about document here
          </a>
          <h4>During installation - ticked as is shown below:</h4>
          <Image
            src={imgNextWithoutApiRouter}
            alt="next13 install without api router"
            aria-hidden="true"
          />
          <h4>
            A custom Document can update the &lt;html&gt; and &lt;body&gt; tags used to render a
            Page. To override the default Document, create the file pages/_document
          </h4>
          <InfoBox className="isInfo">
            <h4>Next13 automatically generated _document for us.</h4>
            <h4>Next&lt;13 we need to manually create _document</h4>
          </InfoBox>
          <a
            href="https://nextjs.org/docs/pages/building-your-application/routing/custom-document"
            rel="noreferrer"
            target="_blank"
          >
            Read more about document here
          </a>
          <hr />

          <h3>&lt;Link&gt; & NextJS 13</h3>
          <InfoBox className="isDanger">
            <h4>
              Up to NextJS 13, you needed to add a{' '}
              <strong>nested &lt;a&gt; element in your &lt;Link&gt;s</strong> if you wanted to add
              custom <strong>attributes (e.g., className)</strong> to the anchor element.
            </h4>
          </InfoBox>

          <h4>With NextJS 13 or higher, this is no longer needed, you can instead just write:</h4>
          <ul className="hasVerticalPadding-2">
            <li>&lt;Link href=&quot;/&quot; className=&quot;some-class&quot;&gt;</li>
            <li>
              &nbsp;<strong>Click me</strong>
            </li>
            <li>&lt;/Link&gt;</li>
          </ul>
          <h3>and</h3>
          <ul className="hasVerticalPadding-2">
            <li>&lt;Link href=&quot;/&quot; className=&quot;some-class&quot;&gt;</li>
            <li>
              &nbsp;<strong>&lt;span&gt;Click me&lt;/span&gt;</strong>
            </li>
            <li>&lt;/Link&gt;</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChEight
