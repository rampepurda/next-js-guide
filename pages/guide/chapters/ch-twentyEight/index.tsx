import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ChTwentyEight: NextPage = () => {
  const exam1: string = 'This txt includes <strong>strong</strong> tag'
  const exam2: string = 'This txt includes <b onmouseover="alert(\'mouseover\');">alert</b>'

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-28 | dangerously Set Inner HTML</title>
      </Head>

      <div>
        <h2>28. dangerously Set Inner HTML</h2>
        <ul className="hasVerticalPadding-3">
          <li>
            <Link
              href="https://refine.dev/blog/use-react-dangerouslysetinnerhtml/#when-to-use-dangerouslysetinnerhtml"
              target="_blank"
            >
              see more about dangerously Set Inner HTML
            </Link>
          </li>
        </ul>
        <hr />

        <h3>What is dangerouslySetInnerHTML?</h3>
        <p>
          React dangerouslySetInnerHTML is an HTML property that makes it easy to programmatically
          set the HTML elements from an external source. It has replaced the innerHTML used in the
          browser DOM. dangerouslySetInnerHTML helps React know how to handle the HTML elements in a
          component where the contents are to be rendered.
        </p>

        <h3>How to apply</h3>
        <code>
          &lt;p dangerouslySetInnerHTML=&#123;&#123; __html: cardOne.description &#125;&#125; /&gt;
        </code>

        <h3>See examples:</h3>
        <p dangerouslySetInnerHTML={{ __html: exam1 }} />
        <p dangerouslySetInnerHTML={{ __html: exam2 }} />
        <ul>
          <li>
            <code>
              const exam1: string = &apos;This txt includes{' '}
              <span className="color-is-darkorange"> &lt;strong&gt;</span>
              strong<span className="color-is-darkorange"> &lt;/strong&gt;</span> tag&apos;
            </code>
          </li>
          <li>
            <code>
              const exam1: string = &apos;This txt includes{' '}
              <span className="color-is-darkorange"> &lt;b onmouseover=&quot;alert&quot;&gt;</span>
              alert<span className="color-is-darkorange"> &lt;/b&gt;</span>&apos;
            </code>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ChTwentyEight
