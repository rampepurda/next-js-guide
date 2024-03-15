import Head from 'next/head'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../../components'

export default function Stringify_local_storage() {
  const key: string = 'AcceptCookies'
  const [isAccept, setIsAccept] = useState<boolean>(false)

  useEffect(() => {
    const data = window.localStorage.getItem(key)
    if (data !== null && data === 'true') {
      setIsAccept(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(isAccept))
  }, [isAccept])

  return (
    <>
      <Head>
        <title>TypeScript Document | Stringify, parse</title>
      </Head>

      <h2>JSON.stringify/.parse, wind.localStorage.get/set()</h2>
      <p>That topic is &apos;Out of the box&apos;. It serves only as an example!</p>

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

      <h3>win.localStorage.get/setItem()</h3>

      <div className={classNames(isAccept && 'isHidden', 'hasOutline')}>
        {!isAccept && (
          <>
            <h4>You must agree with all my Terms and Condition</h4>
            <Button
              ClassName={classNames('btn-primary')}
              OnClick={(ev) => setIsAccept(true)}
              title={'Accept All'}
              rest={{ type: 'button' }}
            />
          </>
        )}
      </div>
    </>
  )
}
