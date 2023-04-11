import React from "react"
import {NextPage} from "next";
import Head from "next/head";
import classNames from "classnames";
import {NavSubLeft} from "../../../../core-components";

const ChThree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-three</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>

        </div>

        <div className='col-9'>
          <h2>3. Environment .env</h2>

          <h4>This loads <span className='color-is-darkmagenta'>process</span>.env.DB_HOST, <span className='color-is-darkmagenta'>process</span>.env.DB_USER, and <span className='color-is-darkmagenta'>process</span>.env.DB_PASS into the Node.js environment automatically allowing you to use them in Next.js data fetching methods and API routes.</h4>
          <ul>
            <li>DB_HOST=localhost</li>
            <li>DB_USER=localhost</li>
            <li>DB_PASS=localhost</li>
          </ul>

          <h3>.env inside next.config</h3>
          <ul>
            <li>
              &nbsp;module.exports = &#123;<br />
              &nbsp;&nbsp;<strong>env &#123;<br />
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              &nbsp;&nbsp;&nbsp; customKey: <span className='color-is-darkmagenta'>'my-value-demo'</span><br/>
              &nbsp;&#125;</strong><br/>
              &#125;
            </li>
          </ul>
          <code> &lt;h4&gt;Welcome <strong className='color-is-darkmagenta'>&#123;process.env.customKey&#125;</strong>&lt;/h4 &gt;</code>
          <h4>Welcome
            <span className='color-is-darkmagenta'>
          <a
            href={process.env.urlIdnes}
            target='_blank'
            rel='noreferrer'
          >
          {process.env.customKey}
        </a>
        </span>
          </h4>
        </div>
      </div>
    </>
  )
}

