import { NextPage } from 'next'
import Head from 'next/head'

const ChTwo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-two</title>
      </Head>

      <div>
        <h2>2. Interface - Declaration merging</h2>
        <h4>
          In case we use in type list more than one Interface name: Person, all will be merged to
          one object(declaration merging), see below
        </h4>
        <code>
          <strong>interface Person</strong> &#123; <strong>name:</strong> string &#125;
        </code>
        <code>
          <strong>interface Person</strong> &#123; <strong>age:</strong> number &#125;
        </code>
        <hr />

        <h4>Declaration merging</h4>
        <code>
          <strong>
            const dataPerson: <span className="color-is-darkmagenta">Person</span>
          </strong>{' '}
          <span style={{ color: 'red' }}>&#123; name: 'Michal', age: 49 &#125;</span>
        </code>
      </div>
    </>
  )
}

export default ChTwo
