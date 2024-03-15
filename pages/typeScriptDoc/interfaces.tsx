import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { InfoBox } from '../../components'

interface Animal {
  breed: string
}
interface Dog extends Animal {
  name: string
}

export default function Interfaces() {
  const { t } = useTranslation('projects')
  const dogs: Dog[] = [{ breed: 'kokrSpanihel', name: 'Azor' }]

  return (
    <>
      <Head>
        <title>TypeScript Document | Generic FN</title>
      </Head>

      <div>
        <h2>Interface - Declaration merging</h2>
        <p>
          <strong>Interface vs type:</strong> simplified - object vs primitive type
        </p>
        <ul className="hasTypeDisc">
          <li>
            <a
              href="https://www.typescriptlang.org/docs/handbook/interfaces.html"
              rel="noreferrer"
              target="_blank"
            >
              Read more about Interfaces
            </a>
          </li>
        </ul>

        <h3>declaration merging</h3>
        <h4>
          In case we use in type list more than one Interface name: Person, all will be merged to
          one object(declaration merging), see below
        </h4>
        <ul className="hasVerticalPadding-2">
          <li>
            <code>
              <strong>interface Person</strong> &#123; <strong>name:</strong> string &#125;
            </code>
          </li>
          <li>
            <code>
              <strong>interface Person</strong> &#123; <strong>age:</strong> number &#125;
            </code>
          </li>
        </ul>
        <code>
          <strong>
            const dataPerson: <span className="color-is-darkmagenta">Person</span>
          </strong>{' '}
          <span style={{ color: 'red' }}>&#123; name: &apos;Michal&apos;, age: 49 &#125;</span>
        </code>
        <hr />

        <h3>extends</h3>
        <ul className="hasVerticalPadding-2">
          <li>
            <code>interface Animal &#123; name: string; &#125;</code>
          </li>
          <li>
            <code>
              interface Dog <strong className="color-is-orange">extends</strong> Animal &#123;
              breed: string; &#125;
            </code>
          </li>
        </ul>
        <code>
          const dogs: Dog = &#123; name: &apos;azor&apos;, breed: &apos;kokrSpanihel&apos;&#125;
        </code>
        <label>Breed:</label>
        <h4>{dogs[0].breed}</h4>
        <label>Name:</label>
        <h4>{dogs[0].name}</h4>
      </div>
    </>
  )
}
