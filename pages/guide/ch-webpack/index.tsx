import { Loader } from '../../../components'
import Head from 'next/head'
import Link from 'next/link'

export default function ChWebpack() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Webpack</title>
      </Head>

      <div>
        <h2>Webpack in React</h2>
        <Link
          href="https://www.scaler.com/topics/react/webpack-in-react/"
          target="_blank"
          rel="noreferrer"
        >
          Webpack, read more here
        </Link>

        <h4 className="hasOutline">
          Webpack in react is a JavaScript module bundler that is commonly used with React to bundle
          and manage dependencies. It takes all of the individual JavaScript files and other assets
          in a project, <strong>such as images and CSS</strong>, and combines them into a single
          bundle that can be loaded by the browser. Webpack also has the ability to transpile modern
          JavaScript code (such as ES6) into older versions that can be understood by older
          browsers.
        </h4>

        <h3>1. How to use &apos; svg &apos; format as Component in Next &lt; 13 = Install SVGR</h3>
        <Link
          href="https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f"
          target="_blank"
          rel="noreferrer"
        >
          How To Import SVGs into NextJS read more here
        </Link>

        <ul className="hasTypeDisc">
          <li>
            SVGR is a tool that&nbsp;
            <strong>
              allows us to import SVGs into your React applications as React components
            </strong>
            <h4>import GridLoaderSWG from &apos;./c-grid-loader.svg&apos;</h4>
            <h4>&lt;div&gt; &lt;GridLoaderSWG /&gt; &lt;/div&gt;</h4>
            <Loader ClassName={'loader'} />
          </li>
          <li>
            To use{' '}
            <Link
              href="https://react-svgr.com/docs/options/"
              target="_blank"
              aria-label="read more about svgr"
              rel="noreferrer"
            >
              SVGR
            </Link>{' '}
            with our project, we need to first <strong>install the dependency @svgr/webpack</strong>
            , and then modify our next.config.js file as follows.
          </li>
          <li>
            <strong>yarn add @svgr/webpack</strong>
          </li>
          <li>
            <Link
              href="https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>svg and Web Accessibility read here</strong>
            </Link>
            <a
              href="https://www.w3.org/TR/SVG11/struct.html#DescriptionAndTitleElements"
              rel="noreferrer"
              target="_blank"
              style={{ display: 'block' }}
            >
              <strong>svg Web Accessibility attributes here</strong>
            </a>
          </li>
        </ul>
        <h4>! READ MORE ABOUT SVGR OPTIONS IN: &apos;next.config.js&apos; !</h4>

        <h3>2. Web Accessibility: svg and aria-labelledby</h3>
        <ul className="hasVerticalPadding-3">
          <li>
            &lt;svg xmlns...{' '}
            <strong>aria-hidden=&quot;true&quot; aria-labelledby=&quot;title&quot;</strong>&gt;
          </li>
          <li>
            &nbsp;&nbsp;<strong>&lt;title id=&quot;title&quot;&gt;Loading&lt;/title&gt;</strong>
          </li>
          <li>&nbsp;&nbsp;design</li>
          <li>&lt;/svg&gt;</li>
        </ul>
      </div>
    </>
  )
}
