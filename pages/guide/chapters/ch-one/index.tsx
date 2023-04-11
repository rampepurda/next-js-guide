/**
 https://nextjs.org/docs/routing/dynamic-routes
 */

import { NextPage } from "next"
import { NavSubLeft } from "../../../../core-components"
import { sideBar } from "../../../../types"
import Data from "../../../../data-mock/data.json"
import classNames from "classnames"
import Head from "next/head"
import React from "react"

const ChOne: NextPage = () => {
  const links: sideBar[] = Data.Guide.sideBar

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-one</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <NavSubLeft Links={links}/>
        </div>

        <div className='col-9'>
          <h2>1. import &#123; useRouter &#125; from 'next/router' & Link and query selector
            <code>const router = useRouter</code>
          </h2>

          <ul>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <li>&lt;a className = &#123;router.pathname == `/$&#123;pathName&#125;` ? `$&#123;style.active&#125;` : ""&#125; /&gt;</li>
          </ul>

          <h3>Link[...slug] pathname</h3>
          <ul>
            <li>
              &lt;Link
              href=&#123;&#123;
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;pathname:</strong> '/projects/file-based/[id]',
              <br/>
              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;query:</strong>: &#123; id: props.id &#125;
              <br/>
              &#125;&#125;
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChOne

