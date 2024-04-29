import style from '../../chapters.module.scss'
import React, { useState } from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'
import { InfoBox, Input } from '../../../../components'
import Head from 'next/head'
import Image from 'next/image'
import imgSrc from '../../../../public/images/ch-five/email_validation.png'
import dynamic from 'next/dynamic'
const TermsCond = dynamic<{ title: string }>(
  () => import('../../../../components/TermsCondition').then((mod) => mod.TermsCondition),
  {
    ssr: false,
  }
)

const ChFive: NextPage = () => {
  const [InpEmail, setInpEmail] = useState<any>('')
  const handleSubmit = (email: string) => {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert('All correct')
    } else {
      alert('Email is not in correct format')
    }
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-five</title>
      </Head>

      <div>
        <h2>5. Dynamic & Lazy loading</h2>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading"
              target="_blank"
              rel="noreferrer"
            >
              Next Lazy loading read more
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading"
              target="_blank"
              rel="noreferrer"
            >
              Lazy loading
            </a>{' '}
            in Next.js helps improve the initial loading performance of an application by decreasing
            the amount of JavaScript needed to render a route.
          </li>
          <li>
            It allows you to defer loading of <strong>client components</strong> and imported
            libraries, and only include them in the client bundle when they're needed. For example,
            you might want to defer loading a modal until a user clicks to open it.
          </li>
        </ul>
        <hr />
        <h3>There are two ways you can implement lazy loading in Next.js:</h3>
        <ul className="hasTypeDecimal">
          <li>
            Using <strong>Dynamic Imports</strong> with <strong>next/dynamic</strong>
          </li>
          <li>
            Using <strong>React.lazy()</strong> with <strong>Suspense</strong>
          </li>
        </ul>
        <hr />
        <h2>dynamic loading</h2>
        <div className="hasOutline">
          <p>
            next/dynamic is a composite of React.lazy() and Suspense. It behaves the same way in the
            app and pages directories to allow for incremental migration.
          </p>
        </div>

        <h3>Rendering process</h3>
        <ul className="hasTypeDecimal">
          <li>the component will not be included in the page's initial JavaScript bundle.</li>
          <li>The page will render the Suspense fallback first</li>
          <li>followed by the component when the Suspense boundary is resolved.</li>
        </ul>

        <ul className={classNames(style.hasNoBorder, 'hasVerticalPadding-3', 'hasOutline')}>
          <li>
            <h3>
              Remember: must be imported as <em>'export default'</em>
            </h3>
            <code>
              import &#123;ComponentA&#125; from './TermsCondition'
              <br />
              <strong>export default</strong> ComponentA
            </code>
            <hr />
          </li>
          <li>
            const <strong className="color-is-red">ComponentA = dynamic(()</strong> =&gt;
            import('../components/A'))
          </li>
          <li>
            const <strong className="color-is-red">ComponentB = dynamic(()</strong> =&gt;
            import('../components/B'))
          </li>
          <li>
            const <strong className="color-is-red">ComponentC = dynamic(()</strong> =&gt;
            import('../components/C'), &#123; ssr: false &#125;);
          </li>
          <li>
            const <strong className="color-is-red">DynamicHeader = dynamic(()</strong> =&gt;
            import('../components/header'), &#123;
            <br />
            &nbsp; loading: () =&gt; &lt;p&gt;Loading...&lt;/p&gt;
            <br />
            &#125;);
          </li>
          <li>&nbsp;</li>
          <li>return (</li>
          <li>
            <strong className="color-is-red">&lt;ComponentA /&gt;</strong>
            <h5>Load immediately, but in a separate client bundle</h5>
          </li>
          <li>
            &#123;showMore && &lt;<strong className="color-is-red">ComponentB</strong> /&gt;&#125;
            <h5>Load on demand, only when/if the condition is met</h5>
            &lt;button onClick=&#123;() =&gt; setShowMore(!showMore)&#125;&gt;Toggle&lt;/button&gt;
          </li>
          <li>
            <strong className="color-is-red">&lt;ComponentC /&gt;</strong>
            <h5>Load only on the client side</h5>
          </li>
          <li>)</li>
        </ul>
        <h3>With named exports</h3>
        <div className="hasOutline">
          <code>
            const TermsCond = dynamic&lt;&#123; title: string&#125;&gt;(
            <br />
            () =&gt; import('./TermsCondition').then((mod) =&gt; mod.TermsCondition), &#123;ssr:
            false,&#125;
          </code>
        </div>
        <h4>See dynamic example on window.localStorage.get/setItem</h4>
        <TermsCond title={'Accept All'} />
        <h3>JSON.stringify()</h3>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
              rel="noreferrer"
              target="_blank"
            >
              Read more about JSON.stringify
            </a>
          </li>
        </ul>
        <p>
          The <strong>JSON.stringify()</strong> static method converts a JavaScript value to a JSON
          string, optionally replacing values if a replacer function is specified or optionally
          including only the specified properties if a replacer array is specified.
        </p>
        <h3>JSON.parse()</h3>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
              rel="noreferrer"
              target="_blank"
            >
              Read more about JSON.parse
            </a>
          </li>
        </ul>
        <p>
          The <strong>JSON.parse()</strong> static method parses a JSON string, constructing the
          JavaScript value or object described by the string. An optional reviver function can be
          provided to perform a transformation on the resulting object before it is returned.
        </p>
        <hr />
        <h2>lazy loading</h2>
        <InfoBox className={'isInfo'}>
          <h5>
            <em>lazy</em> lets you defer loading component’s code until it is rendered for the first
            time.
          </h5>
        </InfoBox>
        <ul className={classNames(style.hasNoBorder)}>
          <li>
            <strong className="color-is-red">import</strong> &#123; lazy &#125; from 'react'
          </li>
          <li>
            <strong className="color-is-red">const</strong> MarkdownPreview = lazy(() =&gt;
            import('./MarkdownPreview.js'))
          </li>
        </ul>
        <hr />
        <h3>&lt;Suspense&gt;</h3>
        <InfoBox className={'isInfo'}>
          <h5>
            &lt;Suspense&gt; lets you display a fallback until its children have finished loading.
          </h5>
        </InfoBox>
        <ul className={classNames(style.hasNoBorder)}>
          <li>
            <strong className="color-is-red">import</strong> &#123; Suspense &#125; from "react"
          </li>
          <li>
            &lt;Suspense fallback= &#123; &lt; Loading /&gt;&#125;&gt;
            <br />
            &nbsp; &lt;SomeComponent /&gt;
            <br />
            &lt;Suspense&gt;
          </li>
        </ul>
        <h3>Usage</h3>
        <ul className="hasTypeDisc">
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
        <form name="email">
          <label htmlFor="email">Your email:</label>
          <Input
            id={'email'}
            ariaLabel={'write your email'}
            tabIdx={1}
            OnChange={(e) => setInpEmail(e.target.value)}
            rest={{
              type: 'email',
              placeholder: '@',
            }}
          />
          <button
            className="btn btn-submit"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              handleSubmit(InpEmail)
            }}
          >
            Submit
          </button>
        </form>
        <Image src={imgSrc} aria-hidden={true} alt="emailvalidation" />
      </div>
    </>
  )
}

export default ChFive
