import { NextPage } from "next"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { AlertBox, Navigation } from "../../../../components"
import { environment  } from '../../../../configuration/environment'

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
          <hr />

          <h3>3.1 Predefined .env in Next JS</h3>
          <AlertBox className={'info'} >
            <h4>This loads <span className='color-is-darkmagenta'>process</span>.env.DB_HOST, <span className='color-is-darkmagenta'>process</span>.env.DB_USER, and <span className='color-is-darkmagenta'>process</span>.env.DB_PASS into the Node.js environment automatically allowing you to use them in Next.js data fetching methods and API routes.</h4>
          </AlertBox>

          <h3>3.2 .env inside next.config</h3>
          &nbsp;module.exports = &#123;<br />
          &nbsp;&nbsp;<strong>env: &#123;<br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          &nbsp;&nbsp;&nbsp; customKey: <span className='color-is-darkmagenta'>'MY_ENV'</span><br/>
          &nbsp;&#125;</strong><br/>
          &#125;<br/>
          <code> &lt;h4&gt;Welcome <strong className='color-is-darkmagenta'>&#123;process.env.MY_ENV&#125;</strong>&lt;/h4 &gt;</code>

          <h3>3.3 Exposing Environment Variables to the Browser</h3>
          <p>By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.</p>
          <p>In order to expose a variable to the browser you have to prefix the variable with NEXT_PUBLIC_. For example:</p>
          <AlertBox className={'info'}>
            <h5>NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk</h5>
          </AlertBox>
        </div>
      </div>
    </>
  )
}

export default ChThree

