/**
 * Read more about [...slug]
 https://nextjs.org/docs/routing/dynamic-routes
 */

import { NextPage } from "next"
import { InfoBox, Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration"
import Head from "next/head"
import Image from "next/image"
import imgSlug from '../../../../public/images/ch-one/slug.png'

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
            <li>const router = useRouter</li>
            <li>&lt;a className = &#123;router.pathname == `/$&#123;pathName&#125;` ? `$&#123;style.active&#125;` : ""&#125; /&gt;</li>
          </ul>
          <hr/>

          <h3>1.1 Dynamic router</h3>
          <ul>
            <li>
              &lt;Link
              href=&#123;&#123;
              <br/>

              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;pathname:</strong> '/projects/file-based/[id]',
              <br/>
              <strong className='color-is-red'>&nbsp;&nbsp;&nbsp;query:</strong> &#123; id: props.id &#125;
              <br/>
              &#125;&#125;
            </li>
          </ul>

          <h3>1.2 Catch all routes [...slug]</h3>
          <ul className='hasTypeDisc'>
            <li>
              <a href='https://nextjs.org/docs/routing/dynamic-routes' target='_blank'>[...slug] read more</a>
            </li>
            <li>
              Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:
              <h5>pages/post/[...slug].js not only matches /post/a, but also /post/a/b, /post/a/b/c, and so on.</h5>
              <h5>pages/post/[...slug].js does not match /post.</h5>
            </li>
            <li>
              <h4>Add <mark>as</mark> parameter to Link</h4>
              <ul className='hasVerticalPadding-2'>
                <li><strong>&lt;Link</strong></li>
                <li>&nbsp;&nbsp;&lt;href = &#123; /post/[...slug] &#125;</li>
                <li><mark>&lt;as = &#123; /post/2020/books &#125;</mark></li>
                <li><strong>&gt;</strong></li>
                <li><strong>&lt;/Link&gt;</strong></li>
              </ul>
            </li>
          </ul>

          <InfoBox className={'isInfo'} >
            <h4>Note: You can use names other than slug, such as: [...param]</h4>
          </InfoBox>

          <Image src={imgSlug} aria-hidden={true} alt='slug how it works' />
        </div>
      </div>
    </>
  )
}

export default ChOne

