import { NextPage } from "next"
import classNames from "classnames"
import { InfoBox, Navigation, Loader } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration"
//import Loader from '../../../../components/Loader/c-grid-loader.svg'
import Head from "next/head"

const ChSeventeen: NextPage = () => {
  return <>
    <Head>
      <title>Next JS | Guide | Ch-seventeen - Webpack</title>
    </Head>

    <div className='cols'>
      <div className={classNames( 'col-3 has-br')}>
        <Navigation links={navigationGuideLinks}/>
      </div>

      <div className={classNames( 'col-9')}>
        <h2>17. Webpack in React</h2>
        <a
          href='https://www.scaler.com/topics/react/webpack-in-react/'
          target='_blank'
          rel='author'
        >
          Webpack, read more here
        </a>
        <hr />

        <InfoBox className='isInfo'>
          <h4>
            Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies. It takes all of the individual JavaScript files and other assets in a project, <strong>such as images and CSS</strong>, and combines them into a single bundle that can be loaded by the browser. Webpack also has the ability to transpile modern JavaScript code (such as ES6) into older versions that can be understood by older browsers.
          </h4>
        </InfoBox>

        <h3>1. How To Import SVGs into NextJS</h3>
        <a
          href='https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f'
          target='_blank'
          rel='author'
        >
          How To Import SVGs into NextJS read more here
        </a>

        <h4>1.1 Use SVGR</h4>
        <ul className='hasTypeDisc'>
          <li>
            SVGR is a tool that <strong>allows us to import SVGs into your React applications as React components</strong>. If you have used Create-React-App in the past, you might be familiar with this, as it comes built-in.
            <h4>yarn add @svgr/webpack</h4>
          </li>
          <li>To use SVGR with our project, we need to first <strong>install the dependency @svgr/webpack</strong>, and then modify our next.config.js file as follows.</li>
        </ul>

      </div>
    </div>
  </>
}

export default ChSeventeen