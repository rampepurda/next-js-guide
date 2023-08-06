import { NextPage } from 'next'
import classNames from 'classnames'
import { InfoBox, Navigation, Loader } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'

const ChSeventeen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-seventeen - Webpack</title>
      </Head>

      <div className="cols">
        <div className={classNames('col-3 has-br')}>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className={classNames('col-9')}>
          <h2>17. Webpack in React</h2>
          <a
            href="https://www.scaler.com/topics/react/webpack-in-react/"
            target="_blank"
            rel="noreferrer"
          >
            Webpack, read more here
          </a>
          <hr />

          <InfoBox className="isInfo">
            <h4>
              Webpack in react is a JavaScript module bundler that is commonly used with React to
              bundle and manage dependencies. It takes all of the individual JavaScript files and
              other assets in a project, <strong>such as images and CSS</strong>, and combines them
              into a single bundle that can be loaded by the browser. Webpack also has the ability
              to transpile modern JavaScript code (such as ES6) into older versions that can be
              understood by older browsers.
            </h4>
          </InfoBox>

          <h3>1. How To Import SVGs into NextJS - use SVGR</h3>
          <a
            href="https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f"
            target="_blank"
            rel="noreferrer"
          >
            How To Import SVGs into NextJS read more here
          </a>

          <ul className="hasTypeDisc">
            <li>
              SVGR is a tool that{' '}
              <strong>
                allows us to import SVGs into your React applications as React components
              </strong>
            </li>
            <li>
              To use{' '}
              <a
                href="https://react-svgr.com/docs/options/"
                target="_blank"
                aria-label="read more about svgr"
                rel="noreferrer"
              >
                SVGR
              </a>{' '}
              with our project, we need to first{' '}
              <strong>install the dependency @svgr/webpack</strong>, and then modify our
              next.config.js file as follows.
            </li>
            <li>
              <strong>yarn add @svgr/webpack</strong>
            </li>
            <li>
              <a
                href="https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>svg and Web Accessibility read here</strong>
              </a>
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
          <InfoBox className="isDanger">
            <h4>! READ MORE ABOUT SVGR OPTIONS IN: &apos;next.config.js&apos; !</h4>
          </InfoBox>

          <Loader ClassName={'loader'} />
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
      </div>
    </>
  )
}

export default ChSeventeen
