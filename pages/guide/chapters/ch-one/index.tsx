/**
 * Read more about [...slug]
 https://nextjs.org/docs/routing/dynamic-routes
 */

import { NextPage } from "next"
import { Navigation } from "../../../../core-components"
import { navData } from "../../../../types"
import Data from "../../../../data-mock/data.json"
import Head from "next/head"

const ChOne: NextPage = () => {
  const links: navData[] = Data.NavigationLeft

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-one | Routers</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={links}/>
        </div>

        <div className='col-9'>
          <h2>1. import &#123; useRouter &#125; from 'next/router'</h2>
          <ul>
            <li><code>const router = useRouter</code></li>
            <li>&lt;a className = &#123;router.pathname == `/$&#123;pathName&#125;` ? `$&#123;style.active&#125;` : ""&#125; /&gt;</li>
          </ul>
          <hr/>

          <h2>2. Dynamic router</h2>
          <ul>
            <li>
              &lt;Link
              href=&#123;&#123;
              <br/>

              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;pathname:</strong> '/projects/file-based/[id]',
              <br/>
              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;query:</strong>: &#123; id: props.id &#125;
              <br/>
              &#125;&#125;
            </li>
          </ul>
          <hr/>

          <h2>3. Dynamic router [...slug]</h2>
        </div>
      </div>
    </>
  )
}

export default ChOne

