import { NextPage } from "next"
import classNames from "classnames"
import { Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import Head from "next/head"

const ChSixteen: NextPage = () => {
  return <>
    <Head>
      <title>Next JS | Guide | Ch-16 - JS CSS</title>
    </Head>

    <div className='cols'>
      <div className={classNames( 'col-3 has-br')}>
        <Navigation links={navigationGuideLinks}/>
      </div>

      <div className={classNames( 'col-9')}>
        <h2>16. CSS in JS libraries</h2>
        <hr/>

        <ul className='hasTypeDecimal'>
          <li>
            <strong>Emotion[CSS, Styled]</strong>
            <h5>yarn add @emotion/react</h5>
            <h5>yarn add @emotion/styled</h5>
            <h5>
              <a
                href='https://emotion.sh/docs/install'
                target='_blank'
                rel='author'
              >
                Emotion, how to Install, Tutorials see here
              </a>
            </h5>
            <mark>styled</mark> is a way to create React components that have styles attached to them.
            <h5>Where is in used?:</h5>
            Project: next-apollo-server
          </li>
          <li>
            <strong>React-JSS</strong>
            <h5>For more info see React TS Guide/Ch-2</h5>
          </li>
        </ul>
      </div>
    </div>
  </>
}

export default ChSixteen