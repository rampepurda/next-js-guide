import { NextPage } from "next"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { InfoBox, Navigation } from "../../../../components"

const ChThree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-three</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
        </div>

        <div className='col-9'>
          <h2>3. Environment .env</h2>
          <p>You will work with sensitive information? Then use <strong>.env</strong></p>
          <hr />

          <h3>3.1 Predefined .env in Next JS</h3>
          <InfoBox className={'isInfo'} >
            <h4>This loads <span className='color-is-black'>process</span>.env.DB_HOST, <span className='color-is-black'>process</span>.env.DB_USER, and <span className='color-is-black'>process</span>.env.DB_PASS into the Node.js environment automatically allowing you to use them in Next.js data fetching methods and API routes.</h4>
          </InfoBox>

          <h3>3.2 .env inside next.config</h3>
          &nbsp;module.exports = &#123;<br />
          &nbsp;&nbsp;<strong>env: &#123;<br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          &nbsp;&nbsp;&nbsp;customKey: <span className='color-is-darkmagenta'>'my-value'</span><br/>
          &nbsp;&#125;</strong><br/>
          &#125;<br/>
          <code> &lt;h4&gt;Welcome <strong className='color-is-darkmagenta'>&#123;process.env.customKey&#125;</strong>&lt;/h4 &gt;</code>
          <hr />

          <h3>3.3 Exposing Environment Variables to the Browser</h3>
          <p>By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.</p>
          <p>In order to expose a variable to the browser you have to prefix the variable with NEXT_PUBLIC_. For example:</p>
          <InfoBox className={'isInfo'}>
            <h5>NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk</h5>
            <code>&lt;p&gt; &#123;process.env.NEXT_PUBLIC_ANALYTICS_ID&#125;&lt;/p&gt;</code>
            <hr />
            <h5>Result: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h5>
          </InfoBox>

          <h3>3.4 Exposing Environment Variables outside of the Root</h3>
          <ul className='hasTypeDecimal'>
            <li>Install: yarn add dotenv</li>
            <li>Install: yarn add cross-env</li>
            <li>
              Update next.config.ts:
              <h5><code>require('dotenv').config(&#123; path: process.env.ENV_FILE_PATH &#125;)</code></h5>
            </li>
            <li>
              Update package.json:
              <h5><code>script: &#123; build: "cross-env ENV_FILE_PATH=env/.env.development next build"&#125;</code></h5>
            </li>
          </ul>
          <InfoBox className={'isWarning'}>
            <h5>Tried to set up environment outside of ROOT by 'dotenv', without success yet</h5>
            <p>Actual structure is: .env.development(inRoot) imported to config/environment.ts and taken for example in Apollo Client as uri.</p>
            <code style={{display: 'block'}}>import &#123; environment &#125; from '../configuration/environment'</code>
            <code>uri: environment.clientURL,</code>
          </InfoBox>
        </div>
      </div>
    </>
  )
}

export default ChThree

