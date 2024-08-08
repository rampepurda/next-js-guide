import Head from 'next/head'
import Link from 'next/link'
import { Button, Input } from '../../../components'

export default function ChFormAction() {
  async function handleAction(data: FormData) {
    const formData = {
      email: data.get('emailAddress'),
    }
    alert('joha')
  }
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | formAction </title>
      </Head>

      <div>
        <h2>Next(React) JS &lt;form action=&#123; &#125;&gt;</h2>
        <h4>action</h4>
        <p>
          Tells the browser where to send the contents of the form when it is submitted in either a{' '}
          <strong>GET or POST request</strong> (POST by default, unless specified otherwise by the
          method attribute), then reloads the page with the result of the request it sent.
        </p>
        <h4>
          From Next14+ goes with ACTION this new hook: <strong>useFormState()</strong> and React
          hook:&nbsp;
          <strong>useFormStatus()</strong>
        </h4>
        <p>See Next14 App-routes Tutorial</p>
        <div className="hasOutline">
          <h3>Structure</h3>
          <ul className="hasVerticalPadding-3">
            <li>
              async function handleSubmit(<strong>data</strong>:&nbsp;
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/API/FormData"
                target="_blank"
                rel="external"
              >
                <strong>FormData</strong>
              </Link>
              ) &#123;
            </li>
            <li>&nbsp;const data = &#123;</li>
            <li>
              &nbsp;&nbsp;emailAddress:&nbsp;
              <strong>
                <strong>data.get</strong>
              </strong>
              (&apos;address&apos;),
            </li>
            <li>...response(data)</li>
            <li>&nbsp;&#125;</li>
            <li>&#125;</li>
            <li></li>
            <li>
              &lt;form <strong>ref</strong>= &#123;refName&#125; <strong>action</strong>=
              &#123;async (formData: FormData ) =&gt; &#123;
            </li>
            <li>
              <span className="color-is-gray">
                (Use Fn exactly in &apos;action&apos; is possible ONLY in NEXT JS)
              </span>
            </li>
            <li>&nbsp;&nbsp;await handleSubmit(formData)</li>
            <li>&nbsp;&nbsp;refName.current?.reset()</li>
            <li>&#125;&gt;</li>
          </ul>
          <hr />
          <h5>
            Looks that <em>action</em> does not work at Next &lt; 14.
            <br />
            In React JS - fn handleSubmit <strong>requested</strong> FormData: const data: FormData
            = await request.formData()
          </h5>
        </div>
      </div>
    </>
  )
}
