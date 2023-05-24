import { NextPage } from "next"
import classNames from "classnames"
import { Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import Head from "next/head"

const ChThirteen: NextPage = () => {
  return <>
    <Head>
      <title>Next JS | Guide | Ch-Thirteen - Auth0</title>
    </Head>

    <div className='cols'>
      <div className={classNames( 'col-3 has-br')}>
        <Navigation links={navigationGuideLinks}/>
      </div>

      <div className={classNames( 'col-9')}>
        <h2>13. Auth0</h2>
        <h3>Create Account on Auth0</h3>
        <ul className='hasTypeDecimal'>
          <li>
            <a
              href='https://auth0.com'
              target='_blank'
              rel='author'
            >
              Visit Auth0
            </a>
          </li>
          <li>
            Create Account and setup accordingly: &nbsp;
            <a
              href='https://www.youtube.com/watch?v=yufqeJLP1rI'
              target='_blank'
              rel='author'
            >
              See Auth0 setup Tutorial
            </a>
          </li>
          <li>
            <a
              href='https://github.com/auth0/nextjs-auth0'
              target='_blank'
              rel='author'
            >
              More about How to setup Auth0 & your App see here
            </a>
          </li>
        </ul>
        <hr />

        <h3>Setup your App</h3>
        <ul className='hasTypeDecimal'>
          <li><strong>Install:</strong> yarn add auth0</li>
          <li>.env add credential (see GITHUB tutorial)</li>
          <li>
            <strong>Create file: auth inside pages/app and inside auth create file: [auth0].js</strong>
          </li>
          <li>Setup [auth0].js accordingly GITHUB tutorial </li>
          <li>In pages/index <strong>import &#123; useUser&#125; from '@auth0/nextjs-auth0/client'</strong></li>
          <li>In pages/app <strong>import &#123; UserProvider &#125; from '@auth0/nextjs-auth0/client'</strong></li>
          <li>In pages/app return &lt; UserProvider &gt; Layout &lt; UserProvider &gt;</li>
        </ul>
        <hr />

        <h3>AccessToken and JWT decoding</h3>
        <ul className='hasTypeDisc'>
          <li>f12, Application/use Filter with param token</li>
          <li><strong>Token decoding</strong> via <a href='https://jwt.io/' target='_blank'> JWT.io</a></li>
          <li>See more in file: How-to-do/AccessToken</li>
        </ul>
      </div>
    </div>
  </>
}

export default ChThirteen