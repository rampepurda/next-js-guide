import { NextPage } from 'next'
import { InfoBox } from '../../../../components'
import Head from 'next/head'
import { merriweather, roboto } from '../../../../fonts'
import Link from 'next/link'

const ChTwentyFive: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-25 | Font Optimization </title>
      </Head>

      <div>
        <h2>25. Font Optimization Module - how to work in Next and how to setup</h2>
        <ul className="hasTypeDisc">
          <li>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts"
              target="_blank"
            >
              Read more about Font Optimization
            </Link>
          </li>
          <li>
            <Link href="https://nextjs.org/docs/app/api-reference/components/font" target="_blank">
              Read more about Font Module
            </Link>
          </li>
        </ul>
        <hr />

        <InfoBox className={'isInfo'}>
          <h4>
            This API reference will help you understand how to use{' '}
            <Link
              href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts"
              target="_blank"
            >
              next/font/google
            </Link>
            &nbsp;and&nbsp;
            <Link
              href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts"
              target="_blank"
            >
              next/font/local
            </Link>
            . For features and usage, please see the Optimizing Fonts page.
          </h4>
        </InfoBox>

        <h2>Using Multiple Fonts</h2>
        <h4>
          You can import and use multiple fonts in your application. There are two approaches you
          can take.
        </h4>

        <ul className="hasTypeDecimal">
          <li>
            Create a utility function that exports a font
            <strong>
              <em> (api/fonts.ts)</em>
            </strong>
            , imports it, and applies its className where needed. This ensures the font is preloaded
            only when it's rendered. <strong>See examples below.</strong>
          </li>
          <li>Alternatively, you can create a CSS variable and use it with your preferred CSS</li>
        </ul>
        <h3 className={roboto.className}>Font - Roboto</h3>
        <code>
          &lt;h3 className=&#123;<strong>roboto.className</strong>&#125;&gt; Font - Roboto
          &lt;/h3&gt;
        </code>
        <h3 className={merriweather.className}>Font - Merriweather</h3>
        <code>
          &lt;h3 className=&#123;<strong>merriweather.className</strong>&#125;&gt; Font -
          Merriweather &lt;/h3&gt;
        </code>
      </div>
    </>
  )
}

export default ChTwentyFive
