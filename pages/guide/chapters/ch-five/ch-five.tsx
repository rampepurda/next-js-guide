import style from '../chapters.module.scss'

import React, {useState} from "react"
import classNames from "classnames"

const handleSubmit = (email: any) => {
  if( email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    alert('All correct')
  } else {
    alert('Email is not in correct format')
  }
}

export const ChFive = ({ID}: {ID: number}) => {
  const [InpEmail, setInpEmail] = useState<any>('')

  return (
    <div
      className={classNames(style.ChaptersModuleSheet)}
      style={{display: ID === 5 ? 'block' : 'none'}}
    >
      <h2>5. Next JS Dynamic Import</h2>
      <p>
        <a
          href='https://nextjs.org/docs/advanced-features/dynamic-import'
          target='_blank'
          rel='noreferrer'
        >
          See more about dynamic @import types includes: named export && with SSR
        </a>
      </p>

      <p style={{fontSize: '1.3rem'}}>
        Next.js supports <strong>lazy loading external libraries with import()</strong> and React components with <strong>next/dynamic</strong>. Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page.
        <br/>
        <strong>Components or libraries are only imported and included in the JavaScript bundle when they're used.</strong>
      </p>

      <h3>Example:</h3>
      <ul className={classNames(style.hasNoBorder)}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li className='color-is-red'><strong>import dynamic from 'next/dynamic'</strong></li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li className='color-is-red'><strong>import &#123; Suspense &#125; from 'react'</strong></li>
        <li>&nbsp;</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <strong>const DynamicHeader = <span className='color-is-red'>dynamic</span>(() =&gt; import('../components/header'), &#123;</strong>
         </li>
        <li>&nbsp;<strong><span className='color-is-red'>suspense</span></strong>: true,</li>
        <li>&nbsp;<strong><span className='color-is-red'>ssr</span></strong>: true, || ServerSideRendering</li>
        <li>&#125;)</li>
        <li>&nbsp;</li>
        <li><strong>export default function Home() &#123;</strong></li>
        <li>&nbsp;return (</li>
        <li>&nbsp;&nbsp;&lt;Suspense fallback= &#123;`Loading...`&#125;&gt;</li>
        <li>&nbsp;&nbsp;&nbsp;&lt;DynamicHeader /&gt;</li>
        <li>&nbsp;&nbsp;&lt;/Suspense&gt;</li>
        <li>&nbsp;)</li>
        <li>&#125;</li>
      </ul>
      <hr/>

      <h2>.match email validation</h2>
      <form name='email'>
        <label htmlFor='email'>Email:</label>
        <p>
          <input
            id='email'
            type='email'
            placeholder='@'
            aria-label='email'
            onChange={(e) => setInpEmail(e.target.value)}
          />
        </p>

        <button
          className='btn btn-submit'
          type='button'
          onClick={(e) => {
            e.preventDefault()
            handleSubmit(InpEmail)
          }}
        >
          Submit
        </button>
      </form>

      <img src='./images/ch-five/email_validation.png' aria-hidden={true} alt='email validation'/>
    </div>
  )
}

