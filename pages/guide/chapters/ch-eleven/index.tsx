import { NextPage } from "next"
import { Navigation, InfoBox } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration"
import Image from "next/image"
import imgNextConfig from '../../../../public/images/ch-eleven/nextconfig.png'

export const ChEleven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-eleven</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
          <h2>11. &lt;Image /&gt;</h2>
          <a
            href='https://nextjs.org/docs/api-reference/next/image'
            target='_blank'
            rel='chapter'
          >
            Read more
          </a>
          <hr />

          <h3>src</h3>
          <ul className='hasTypeDisc'>
            <li>A statically imported image file, or</li>
            <li>A path string. This can be either an absolute external URL, or an internal path depending on the loader prop.</li>
          </ul>
          <h3>External Image</h3>
          <InfoBox className='info'>
            <h4>External images must be configured in next.config.js using the remotePatterns property.</h4>
          </InfoBox>
          <Image
            src={imgNextConfig}
            aria-hidden={true}
            alt='next configuration'
          />

          <h3>Image Component with Next.js</h3>
          <a
            href='https://image-component.nextjs.gallery/'
            target='_blank'
            rel='chapter'
          >
            Read more
          </a>
          <ul className='hasTypeDisc'>
            <li>Responsive to viewport</li>
            <li>Fill dimensions of parent element</li>
            <li>Blur-up placeholder</li>
            <li>Shimmer placeholder</li>
            <li>Color placeholder</li>
            <li>Text on background image</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChEleven