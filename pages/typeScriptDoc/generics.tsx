import Head from 'next/head'
import { GenericsModelSituationPage } from './genericsModelSituation'
import Link from 'next/link'

export default function Generics() {
  return (
    <>
      <Head>
        <title>TypeScript Document | Generic FN</title>
      </Head>

      <div>
        <h2>Generics</h2>
        <ul className="hasTypeDisc">
          <li>
            <Link
              href="https://www.typescriptlang.org/docs/handbook/2/generics.html"
              rel="noreferrer"
              target="_blank"
            >
              Read more about Generics
            </Link>
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
      </div>

      <GenericsModelSituationPage />
    </>
  )
}
