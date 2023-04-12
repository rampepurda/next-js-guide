import style from './ch-four.module.scss'

import { NextPage } from "next"
import Head from "next/head"
import classNames from "classnames"
import { Navigation } from "../../../../core-components"
import { navData } from "../../../../types"
import Data from "../../../../data-mock/data.json"
import { useState } from "react"

const ChFour: NextPage = () => {
  const links: navData[] = Data.NavigationLeft
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-four</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={links}/>
        </div>

        <div className='col-9'>
          <h2 className='micro'>4. classNames Library</h2>

          <ul className='hasBorderBottom'>
            <li>
              <h3>Installation:</h3>
              <h5>yarn add classnames</h5>
              <a href='https://www.npmjs.com/package/classnames' rel='author'>See more</a>
            </li>
            <li>
              <h3>Implementation:</h3>
              <h5>const isActive: boolean = true</h5>
              <code>&lt;div className=&#123;<strong><span style={{color: 'orange'}}>classNames</span>(<strong style={{color: 'red'}}>[style.ModuleStyle]: isActive && hasAccount</strong>, 'other Class')</strong>&#125;&gt;</code>
            </li>
            <li>
              <h3>if statement:</h3>
              <h5>const isActive: boolean = true</h5>
              <code>&lt;div className=&#123;<span style={{color: 'orange'}}>classNames</span>('someClass'), <strong>&#123;</strong><br/>
                <strong style={{color: 'red'}}>isActive</strong> ? <strong><span style={{color: 'red'}}></span>.isActive : <span style={{color: 'red'}}>style</span>.isNotActive</strong><strong>&#125;</strong>)&#125;)
              </code>
            </li>
          </ul>

          <h3>ClassNames - testing if Condition</h3>
          <p className={classNames(isActive ? style.isActive : style.isNotActive)}><strong>{isActive ? 'isActive' : 'isNotActive'}</strong></p>
          <input
            type="checkbox"
            defaultChecked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
        </div>
      </div>
    </>
  )
}

export default ChFour