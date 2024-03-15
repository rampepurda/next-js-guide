import Head from 'next/head'
import { useState } from 'react'

export default function Tuple_union() {
  const model: [string, string, number, boolean] = ['skoda', 'fabia', 300000, true]
  const isString: string = 'Im string'
  const isNumber: number = 333
  const isBoolean: boolean = true
  const [selectedValue, setSelectedValue] = useState<string | number | boolean | undefined>()
  function unionFn(param: string | number | boolean | undefined) {
    if (param === true) {
      return 'Im boolean'
    }
    return param
  }

  return (
    <>
      <Head>
        <title>TypeScript Document | Tuple, Union</title>
      </Head>

      <div>
        <h2>Tuples, Union types</h2>

        <h3>Tuples types</h3>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://www.tutorialsteacher.com/typescript/typescript-tuple"
              rel="noreferrer"
              target="_blank"
            >
              Read more about Tuples types
            </a>
          </li>
        </ul>
        <h4 className="hasOutline">
          TypeScript tuples are like arrays with a fixed number of elements. They provide us with a
          fixed-size container that can store values of multiple types, where order and structure
          are very important. This data type is best used when we know exactly how many types we
          want to allow in an array.
        </h4>

        <code>
          const model:{' '}
          <strong>
            [<span className="color-is-orange">string, string, number, boolean</span>]
          </strong>{' '}
          = [&apos;skoda&apos;, &apos;fabia&apos;, 300000, true]
        </code>
        <h4>
          Model: <strong>{model[0]}</strong>
        </h4>
        <h4>
          Type: <strong>{model[1]}</strong>
        </h4>
        <h4>
          Price: <strong>{model[2]}Kč</strong>
        </h4>
        <h4>
          Is available?: <strong>{model[3] ? 'Yes' : 'No'}</strong>
        </h4>

        <h3>Tuple as value</h3>
        <code>
          type names = &apos;ico-star&apos; | &apos;ico-arrow&apos; | &apos;ico-email&apos;
        </code>
        <ul className="hasVerticalPadding-2">
          <li>const Image = (&#123; icoName &#125;: &#123; icoName: names &#125;) =&gt; &#123;</li>
          <li>&nbsp;return &lt;img src=&#123;`#$&#123;icoName&#125;`&#125; /&gt;</li>
          <li>&#125;</li>
        </ul>
        <hr />

        <h3>Union types</h3>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"
              rel="noreferrer"
              target="_blank"
            >
              Read more about Union types
            </a>
          </li>
        </ul>

        <h4 className="hasOutline">
          The first way to combine types you might see is a union type. A union type is a type
          formed from two or more other types, representing values that may be any one of those
          types. We refer to each of these types as the union’s members.
        </h4>

        <code>
          function unionFn (
          <strong>
            param: <span className="color-is-orange">string | number | boolean | undefined</span>
          </strong>
          ) &#123; return param &#125;
        </code>

        <h4>
          My value is: {selectedValue === undefined ? 'Im undefined' : unionFn(selectedValue)}
        </h4>
        <button type="button" onClick={() => setSelectedValue(isString)}>
          Is string
        </button>
        <button type="button" onClick={() => setSelectedValue(isBoolean)}>
          Is boolean
        </button>
        <button type="button" onClick={() => setSelectedValue(isNumber)}>
          Is number
        </button>
      </div>
    </>
  )
}
