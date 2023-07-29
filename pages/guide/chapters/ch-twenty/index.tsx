import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import React from 'react'

const ChTwenty: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twenty | Tailwind</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>20. Tailwind CSS</h2>
          <p>How does it work? See project: next-13-with-tailwind-css</p>
          <a
            href="https://nextjs.org/docs/app/building-your-application/styling/tailwind-css#installing-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind css Tutorial read here
          </a>
          <hr />
          <h3>Installing Tailwind</h3>
          <p>
            Install the Tailwind CSS packages and run the init command to generate both the
            tailwind.config.js and postcss.config.js files:
          </p>
          <ul className="hasTypeDisc hasVerticalPadding-2">
            <li>npm install -D tailwindcss postcss autoprefixer</li>
            <li>yarn add tailwindcss</li>
            <li>npx tailwindcss init -p (init tailwindcss.config, postcss.config.js)</li>
            <li>yarn add autoprefixer</li>
          </ul>
          <InfoBox className="isDanger">
            <h4>Install: autoprefixer</h4>
            <h4>
              Till I did not install autoprefixer (See: next-13-use-app-route-with-tailwind) doesn`t
              work!
            </h4>
          </InfoBox>
        </div>
      </div>
    </>
  )
}

export default ChTwenty
