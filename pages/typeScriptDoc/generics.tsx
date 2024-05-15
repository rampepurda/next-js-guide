import Head from 'next/head'
import { GenericsModelSituationPage } from './genericsModelSituation'

export default function Generics() {
  function dummyGenerics<T>(dataArray: T[], value: T) {
    return [value, [...dataArray]]
  }
  const dummyGenericsArray = <T,>(dataArray: T[], value: T) => {
    return [value, [...dataArray]]
  }
  const nums: number[] = [1, 2, 3]
  const words: string[] = ['Hello', 'Kitty', 'dummy']

  return (
    <>
      <Head>
        <title>TypeScript Document | Generic FN</title>
      </Head>

      <div>
        <h2>Generics</h2>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://www.typescriptlang.org/docs/handbook/2/generics.html"
              rel="noreferrer"
              target="_blank"
            >
              Read more about Generics
            </a>
          </li>
        </ul>

        <div className="hasOutline">
          <h4>
            A major part of software engineering is{' '}
            <strong>
              building components that not only have well-defined and consistent APIs, but are also
              reusable
            </strong>
            . Components that are capable of working on the data of today as well as the data of
            tomorrow will give you the most flexible capabilities for building up large software
            systems.
          </h4>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <mark>
            Is convection to use <strong>&lt;T&gt;</strong> as &apos;type&apos;
          </mark>
        </div>

        <ul className="hasVerticalPadding-2">
          <li>
            function dummyGenerics<strong className="color-is-red">&lt;T&gt;</strong>(dataArray:
            T[], value: T) &#123;
          </li>
          <li>&nbsp; return [value, [...dataArray]]</li>
          <li>&#125;</li>
        </ul>
        <h4>Array Function</h4>
        <ul className="hasVerticalPadding-2">
          <li>
            const dummyGenerics = <strong className="color-is-red">&lt;T,&gt;</strong> (dataArray:
            T[], value: T) =&gt;&#123;
          </li>
          <li>&nbsp; return [value, [...dataArray]]</li>
          <li>&#125;</li>
          <li>
            const nums: <strong>number[]</strong> = [1, 2, 3]
          </li>
          <li>
            const words: <strong>string[]</strong> = [&apos;Hello&apos;, &apos;Kitty&apos;,
            &apos;dummy&apos;]
          </li>
        </ul>

        <h3>Render:</h3>
        <h4>{dummyGenericsArray(nums, 2)}</h4>
        <h4>{dummyGenericsArray(words, 'I`m value, im on the first place ')}</h4>

        <ul>
          <li>
            <code>
              &#123;dummyGenericsArray(<strong>nums, 2</strong>)&#125;
            </code>
          </li>
          <li>
            <code>
              &#123;dummyGenericsArray(<strong>words, &apos;I`m value...&apos;</strong>)&#125;
            </code>
          </li>
        </ul>
      </div>
      <hr />
      <GenericsModelSituationPage />
    </>
  )
}
