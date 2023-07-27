import Head from 'next/head'
import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
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
          <ul className="hasTypeDisc hasVerticalPadding-3">
            <li>
              <a href="https://nextjs.org/blog/next-13-4" rel='noreferrer' target="_blank">
                Next.js 13.4 - read more
              </a>{' '}
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=czvSZqnpTHs" rel='noreferrer' target="_blank">
                Server Actions: NextJS 13.4 s Best New Feature - read more
              </a>{' '}
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                rel='noreferrer'
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
          <p>For more info lets check project: NEXT_NEW_STRUCTURE</p>
          <ul className="hasTypeDisc">
            <li>configure: next.config.js</li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                target="_blank"
                rel='noreferrer'
              >
                API Routes - read more
              </a>{' '}
            </li>
          </ul>
          <hr />
          <h3>&lt;Link&gt; & NextJS 13</h3>
          <p>
            Up to NextJS 13, you needed to add a <strong>nested &lt;a&gt; element in your &lt;Link&gt;s</strong> if
            you wanted to add custom attributes (e.g., className) to the anchor element.
          </p>
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
