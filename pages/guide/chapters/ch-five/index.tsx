import style from '../../chapters.module.scss'

import React, { useState } from "react"
import classNames from "classnames"
import { NextPage } from "next"
import {Navigation, InfoBox, Input} from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration"
import Image from "next/image"
import imgSrc from '../../../../public/images/ch-five/email_validation.png'

const handleSubmit = (email: any) => {
  if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    alert('All correct')
  } else {
    alert('Email is not in correct format')
  }
}

const ChFive: NextPage = () => {
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
          <h2>5. Dynamic & Lazy loading</h2>

          <ul className='hasTypeDisc'>
            <li>
              <a
              href='https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading'
              target='_blank'
              rel='noreferrer'
              >
                Next Lazy loading read more
              </a>
            </li>
            <li>
              <a
              href='https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading'
              target='_blank'
              rel='noreferrer'
            >Lazy loading</a> in Next.js helps improve the initial loading performance of an application by decreasing the amount of JavaScript needed to render a route.</li>
            <li>
              It allows you to defer loading of <strong>client components</strong> and imported libraries, and only include them in the client bundle when they're needed. For example, you might want to defer loading a modal until a user clicks to open it.
            </li>
          </ul>
          <hr />

          <h3>There are two ways you can implement lazy loading in Next.js:</h3>
          <ul className='hasTypeDecimal'>
            <li>Using <strong>Dynamic Imports</strong> with <strong>next/dynamic</strong></li>
            <li>Using <strong>React.lazy()</strong> with <strong>Suspense</strong></li>
          </ul>
          <hr />

          <h3>Next/dynamic</h3>
          <InfoBox className={'isInfo'}>
            <h5>next/dynamic is a composite of React.lazy() and Suspense. It behaves the same way in the app and pages directories to allow for incremental migration.</h5>
          </InfoBox>
          <ul className={classNames(style.hasNoBorder, 'hasVerticalPadding-3')}>
            <li>const <strong className='color-is-red'>ComponentA = dynamic(()</strong> =&gt; import('../components/A'))</li>
            <li>const <strong className='color-is-red'>ComponentB = dynamic(()</strong> =&gt; import('../components/B'))</li>
            <li>const <strong className='color-is-red'>ComponentC = dynamic(()</strong> =&gt; import('../components/C'), &#123; ssr: false &#125;);</li>
            <li>
              const <strong className='color-is-red'>DynamicHeader = dynamic(()</strong> =&gt; import('../components/header'), &#123;<br />
              &nbsp; loading: () =&gt; &lt;p&gt;Loading...&lt;/p&gt;<br />
              &#125;);
            </li>
            <li>return (</li>
            <li>
              <h5>// Load immediately, but in a separate client bundle //</h5>
              <strong className='color-is-red'>&lt;ComponentA /&gt;</strong>
            </li>
            <li>
              <h5>// Load on demand, only when/if the condition is met //</h5>
              &#123;showMore && &lt;<strong className='color-is-red'>ComponentB</strong> /&gt;&#125;<br />
              &lt;button onClick=&#123;() =&gt; setShowMore(!showMore)&#125;&gt;Toggle&lt;/button&gt;
            </li>
            <li>
              <h5>// Load only on the client side //</h5>
              <strong className='color-is-red'>&lt;ComponentC /&gt;</strong>
            </li>
            <li>)</li>
          </ul>
          <hr/>

          <h3>lazy</h3>
          <InfoBox className={'isInfo'}>
            <h5><em>lazy</em> lets you defer loading component’s code until it is rendered for the first time.</h5>
          </InfoBox>
          <ul className={classNames(style.hasNoBorder)}>
            <li><strong className='color-is-red'>import</strong> &#123; lazy &#125; from 'react'</li>
            <li><strong className='color-is-red'>const</strong> MarkdownPreview = lazy(() =&gt; import('./MarkdownPreview.js'))</li>
          </ul>
          <hr />

          <h3>&lt;Suspense&gt;</h3>
          <InfoBox className={'isInfo'}>
            <h5>&lt;Suspense&gt; lets you display a fallback until its children have finished loading.</h5>
          </InfoBox>
          <ul className={classNames(style.hasNoBorder)}>
            <li><strong className='color-is-red'>import</strong> &#123; Suspense &#125; from "react"</li>
            <li>
              &lt;Suspense fallback= &#123; &lt; Loading /&gt;&#125;&gt;<br />
              &nbsp; &lt;SomeComponent /&gt;<br />
              &lt;Suspense&gt;
            </li>
          </ul>

          <h3>Usage</h3>
          <ul className='hasTypeDisc'>
            <li>Displaying a fallback while content is loading</li>
            <li>Revealing content together at once</li>
            <li>Revealing nested content as it loads</li>
            <li>Showing stale content while fresh content is loading</li>
            <li>Preventing already revealed content from hiding</li>
            <li>Indicating that a transition is happening</li>
            <li>Resetting Suspense boundaries on navigation</li>
            <li>Providing a fallback for server errors and server-only content</li>
          </ul>
          <hr />

          <h2>.match email validation</h2>
          <form name='email'>
            <label htmlFor='email'>Your email:</label>
            <Input
              id={'email'}
              ariaLabel={'write your email'}
              tabIdx={1}
              OnChange={(e) => setInpEmail(e.target.value)}
              rest={{
                type: 'email',
                placeholder: '@'
              }}
            />
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

export default ChFive

