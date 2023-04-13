import { navData } from "../../../../types"
import Data from "../../../../data-mock/data.json"
import { NextPage } from "next"
import { Navigation } from "../../../../core-components"
import Head from "next/head"
import Image from "next/image"
import imgRedirect from '../../../../public/images/ch-nine/redirects.png'
import { AlertBox } from "../../../../components/AlertBox/AlertBox"

export const ChNine: NextPage = () => {
  const links: navData[] = Data.NavigationLeft

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-nine</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={links} />
        </div>

        <div className='col-9'>
          <h2>9. Redirects</h2>
          <p>
            <a
              href='https://nextjs.org/docs/api-reference/next.config.js/redirects'
              target='_blank'
              aria-label='Read more about Next Redirect'
              rel='noreferrer'
            >
              Read more about Next Redirects
            </a>
          </p>

          <AlertBox className={'info'}>
            <h4>
              Redirects allow you to redirect an incoming request path to a different destination path.
              To use Redirects you can use the redirects key in <span className='color-is-black'>next.config.js</span>
            </h4>
          </AlertBox>

          <Image
            src={imgRedirect}
            aria-hidden={true}
            alt='next js redirects'
          />
          <ul className='hasBorderBottom'>
            <li><mark>redirects</mark> is an async function that expects an array to be returned holding objects with source, destination, and permanent properties</li>
            <li><mark>source</mark> is the incoming request path pattern.</li>
            <li><mark>destination</mark> is the path you want to route to.</li>
            <li><mark>permanent</mark> <strong>true or false</strong></li>
            <li>if <strong>true</strong> will use the <mark>308 status</mark> code which instructs clients/search engines to cache the redirect forever.</li>
            <li>if <strong>false</strong> will use the <mark>307 status</mark> code which is temporary and is not cached.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChNine