import { NextPage } from 'next'
import { InfoBox } from '../../../../components'
import Head from 'next/head'

const ChTwenty: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twenty | Tailwind</title>
      </Head>

      <div>
        <h2>20. Tailwind CSS</h2>
        <p>How does it work? See project: next-13-use-app-route-with-tailwind-css</p>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/styling/tailwind-css#installing-tailwind"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind css Tutorial read here
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/guides/nextjs" target="_blank" rel="noreferrer">
              Tailwind all about read here
            </a>
          </li>
        </ul>

        <hr />
        <h3>Installing Tailwind</h3>
        <p>
          Install the Tailwind CSS packages and run the init command to generate both the
          tailwind.config.js and postcss.config.js files:
        </p>
        <ul className="hasTypeDisc hasVerticalPadding-4">
          <li>
            <h4>Install Tailwind CSS with postcss & autoprefixer</h4>
            <strong>yarn add -D tailwindcss postcss autoprefixer</strong>
          </li>
          <li>
            <h4>Generate tailwind.config.js and postcss.config.js</h4>
            <strong>yarn tailwindcss init -p</strong>
          </li>
          <li>
            <h4>Modify tailwind.config.js file</h4>
            See project: <strong>next-13-use-app-route-with-tailwind</strong>)
          </li>
          <li>npm install -D tailwindcss postcss autoprefixer</li>
          <li>npx tailwindcss init -p (init tailwindcss.config, postcss.config.js)</li>
        </ul>
        <InfoBox className="isDanger">
          <h4>Don`t forget to install autoprefixer</h4>
        </InfoBox>
      </div>
    </>
  )
}

export default ChTwenty
