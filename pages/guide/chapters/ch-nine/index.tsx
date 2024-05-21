import { InfoBox } from '../../../../components'
import Head from 'next/head'
import Image from 'next/image'
import imgRedirect from '../../../../public/images/ch-nine/redirects.png'

export default function ChNine() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-nine</title>
      </Head>

      <div>
        <h2>9. Redirects</h2>
        <p>
          <a
            href="https://nextjs.org/docs/api-reference/next.config.js/redirects"
            target="_blank"
            aria-label="Read more about Next Redirect"
            rel="noreferrer"
          >
            Read more about Next Redirects
          </a>
        </p>

        <InfoBox className={'isInfo'}>
          <h4>
            Redirects allow you to redirect an incoming request path to a different destination
            path. To use Redirects you can use the redirects key in <strong>next.config.js</strong>
          </h4>
        </InfoBox>

        <Image src={imgRedirect} aria-hidden={true} alt="next js redirects" />
        <ul className="hasBorderBottom">
          <li>
            <mark>redirects</mark>
            is an async function that expects an array to be returned holding objects with source,
            destination, and permanent properties
          </li>
          <li>
            <mark>source</mark>
            is the incoming request path pattern.
          </li>
          <li>
            <mark>destination</mark>
            is the path you want to route to.
          </li>
          <li>
            <mark>permanent</mark>
            <strong>true or false</strong>
          </li>
          <li>
            if <strong>true</strong> will use the <mark>308 status</mark> code which instructs
            clients/search engines to cache the redirect forever.
          </li>
          <li>
            if <strong>false</strong> will use the <mark>307 status</mark> code which is temporary
            and is not cached.
          </li>
        </ul>
      </div>
    </>
  )
}
