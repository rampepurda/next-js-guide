import style from '../../chapters.module.scss'

import React, { useState } from "react"
import classNames from "classnames"
import { NextPage } from "next"
import { Navigation, AlertBox } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation";
import Image from "next/image"
import imgSrc from '../../../../public/images/ch-five/email_validation.png'

const handleSubmit = (email: any) => {
  if( email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    alert('All correct')
  } else {
    alert('Email is not in correct format')
  }
}

const Index: NextPage = () => {
  const [InpEmail, setInpEmail] = useState<any>('')

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-five</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
        </div>

        <div className='col-9'>
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

          <h5>
            Next.js supports <strong>lazy loading external libraries with import()</strong> and React components with <strong>next/dynamic</strong>. Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page.
            <br/>
            <strong>Components or libraries are only imported and included in the JavaScript bundle when they're used.</strong>
          </h5>

          <div className='hasAlertBox hasAlertBox-danger'>
            <h5>Don`t use for fetch data!</h5>
          </div>
          <hr/>

          <h3>Example:</h3>
          <AlertBox className='warning'>
            <h5>Don`t use <code>&#123;Suspense&#125;</code> for fetch data!</h5>
          </AlertBox>
          <ul className={classNames(style.hasNoBorder)}>
            <li className='color-is-red'><strong>import dynamic from 'next/dynamic'</strong></li>
            <li className='color-is-red'><strong>import &#123; Suspense &#125; from 'react'</strong></li>
            <li>
              <strong>const DynamicHeader = <span className='color-is-red'>dynamic</span>(() =&gt; import('../components/header'), &#123;</strong>
            </li>
            <li>&nbsp;<strong><span className='color-is-red'>suspense</span></strong>: true,</li>
            <li>&nbsp;<strong><span className='color-is-red'>ssr</span></strong>: true, || ServerSideRendering</li>
            <li>&#125;)</li>
            <li><strong>export default function Home() &#123;</strong></li>
            <li>&nbsp;<strong>return</strong> (</li>
            <li>&nbsp;&nbsp;&lt;Suspense fallback= &#123;`Loading...`&#125;&gt;</li>
            <li>&nbsp;&nbsp;&nbsp;&lt;DynamicHeader /&gt;</li>
            <li>&nbsp;&nbsp;&lt;/Suspense&gt;</li>
            <li>&nbsp;)</li>
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

          <Image
            src={imgSrc}
            aria-hidden={true}
            alt='emailvalidation'
          />
        </div>
      </div>
    </>
  )
}

export default Index

