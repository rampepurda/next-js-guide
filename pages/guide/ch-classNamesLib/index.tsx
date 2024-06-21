import classes from './ch-four.module.scss'
import Head from 'next/head'
import classNames from 'classnames'
import { useState } from 'react'

export default function ChClassNamesLib() {
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <>
      <Head>
        <title>Next JS | Guide | classNames Library</title>
      </Head>

      <div>
        <h2>classNames Library</h2>
        <hr />
        <ul className="hasBorderBottom hasTypeDisc">
          <li>
            <h3>Installation:</h3>
            <h5>yarn add classnames</h5>
            <a href="https://www.npmjs.com/package/classnames" rel="author">
              See more
            </a>
          </li>
          <li>
            <h3>Implementation:</h3>
            <h5>const isActive: boolean = true</h5>
            <code>
              &lt;div className=&#123;
              <strong>
                <span style={{ color: 'orange' }}>classNames</span>(
                <strong style={{ color: 'red' }}>
                  <br />
                  [style.ModuleStyle]: isActive && hasAccount
                </strong>
                ,
                <br /> &apos;other Condition&apos;)
              </strong>
              &#125;&gt;
            </code>
          </li>
          <li>
            <h3>if statement:</h3>
            <h5>const isActive: boolean = true</h5>
            <code>
              &lt;div className=&#123;<span style={{ color: 'orange' }}>classNames</span>
              (&apos;someClass&apos;), <strong>&#123;</strong>
              <br />
              <strong style={{ color: 'red' }}>isActive</strong> ?{' '}
              <strong>
                <span style={{ color: 'red' }}></span>.isActive :{' '}
                <span style={{ color: 'red' }}>style</span>.isNotActive
              </strong>
              <strong>&#125;</strong>)&#125;)
            </code>
          </li>
        </ul>

        <h3>ClassNames - testing if Condition</h3>
        <p className={classNames(isActive ? classes.isActive : classes.isNotActive)}>
          <strong>{isActive ? 'isActive' : 'isNotActive'}</strong>
        </p>
        <input type="checkbox" defaultChecked={isActive} onChange={() => setIsActive(!isActive)} />
      </div>
    </>
  )
}
