import { InfoBox, SlideShow } from '../../../../components'
import Head from 'next/head'
import Image from 'next/image'
import imgNextConfig from '../../../../public/images/ch-eleven/nextconfig.png'
import { dataSlideshow } from '../../../../__mock__/dataMock'

export default function ChEleven() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-eleven</title>
      </Head>

      <div>
        <h2>11. &lt;Image /&gt;</h2>
        <a
          href="https://nextjs.org/docs/app/building-your-application/optimizing/images"
          target="_blank"
          rel="noreferrer"
        >
          Read more about &lt;Image&gt; 14
        </a>
        <div>
          <a
            href="https://nextjs.org/docs/api-reference/next/image"
            target="_blank"
            rel="noreferrer"
          >
            Read more about &lt;Image&gt;
          </a>
        </div>

        <hr />
        <h3>src</h3>
        <ul className="hasTypeDisc">
          <li>A statically imported image file</li>
          <li>
            A path string. This can be either an absolute external URL, or an internal path
            depending on the loader prop.
          </li>
        </ul>
        <h3>1. Local Image</h3>
        <h4>
          To use a <strong>local image</strong>, <strong>import</strong> your .jpg, .png, or .webp
          image files. Next.js will <strong>automatically determine the width and height</strong> of
          your image based on the imported file. These values are used to prevent{' '}
          <em>Cumulative Layout Shift</em> while your image is loading.
        </h4>
        <InfoBox className="isWarning">
          <h4>
            Warning: Dynamic await import() or require() are not supported. The import must be
            static so it can be analyzed at build time.
          </h4>
        </InfoBox>
        <h3>2. Remote Images</h3>
        <h4>To use a remote image, the src property should be a URL string.</h4>
        <ul className="hasTypeDisc">
          <li>
            Since Next.js does not have access to remote files during the build process, you'll need
            to provide the <strong>width, height</strong> and optional blurDataURL props manually.
          </li>
          <li>
            The <strong>width and height</strong> attributes are used to infer the correct{' '}
            <strong>
              <em>aspect ratio</em>
            </strong>{' '}
            of image and avoid layout shift from the image loading in. The width and height do not
            determine the rendered size of the image file. Learn more about Image Sizing.
          </li>
        </ul>
        <h3>3. External Image</h3>
        <InfoBox className="isWarning">
          <h4>
            External images must be configured in next.config.js using the remotePatterns property.
          </h4>
        </InfoBox>
        <Image src={imgNextConfig} aria-hidden={true} alt="next configuration" />
        <h3>Image Component with Next.js</h3>
        <a href="https://image-component.nextjs.gallery/" target="_blank" rel="noreferrer">
          Read more
        </a>
        <ul className="hasTypeDisc">
          <li>Responsive to viewport</li>
          <li>Fill dimensions of parent element</li>
          <li>Blur-up placeholder</li>
          <li>Shimmer placeholder</li>
          <li>Color placeholder</li>
          <li>Text on background image</li>
        </ul>
      </div>
      <hr />

      <h2>Slideshow component</h2>
      <h4>For more about the Code structure see: Components/SlideShow</h4>
      <SlideShow images={dataSlideshow} />
    </>
  )
}
