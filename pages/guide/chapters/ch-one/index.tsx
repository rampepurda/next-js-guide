/**
 * Read more about [...slug]
 https://nextjs.org/docs/routing/dynamic-routes
 */

import { NextPage } from "next"
import { AlertBox, Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation";
import Head from "next/head"

const ChOne: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-one | Routers</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
        </div>

        <div className='col-9'>
          <h2>1. import &#123; useRouter &#125; from 'next/router'</h2>
          <ul>
            <li><code>const router = useRouter</code></li>
            <li>&lt;a className = &#123;router.pathname == `/$&#123;pathName&#125;` ? `$&#123;style.active&#125;` : ""&#125; /&gt;</li>
          </ul>
          <hr/>

          <h3>1.2 Dynamic router</h3>
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

          <h3>1.3 Catch all routes [...slug]</h3>
          <ul className='hasTypeDisc'>
            <li>
              <a href='https://nextjs.org/docs/routing/dynamic-routes' target='_blank'>[...slug] read more</a>
            </li>
            <li>
              Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:
              <h5>pages/post/[...slug].js not only matches /post/a, but also /post/a/b, /post/a/b/c, and so on.</h5>
              <h5>pages/post/[...slug].js does not match /post.</h5>
            </li>
          </ul>

          <AlertBox className={'isInfo'} >
            <h4>Note: You can use names other than slug, such as: [...param]</h4>
          </AlertBox>
        </div>
      </div>
    </>
  )
}

export default ChOne

