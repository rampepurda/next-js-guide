import { Button, Input } from '../../../components'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { environment } from '../../../configuration'
import { BooksPage } from '../../booksPage'

interface FormDataTS {
  author: string | undefined
  title: string | undefined
  price: string | number | undefined
}

export default function ChFormAction() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    getValues,
  } = useForm<FormDataTS>({
    defaultValues: {
      author: '',
      title: '',
      price: '',
    },
  })
  const submitFormEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
    const form = event.currentTarget
    const response = await fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify(formDataObject),
    })

    try {
      if (response) {
        alert(
          `First Name: ${formDataObject.firstName}
           Last Name: ${formDataObject.lastName}`
        )
        form.reset()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }
  const submitBook = async (data: FormDataTS) => {
    const response = await fetch(`${environment.fireBaseBookURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({ ...data }),
    })
    if (response.ok) {
      alert(`Author: ${data.author} | Title: ${data.title}, successful send`)
      reset()
    } else {
      alert('Problems during sending occurred. Please try again.')
    }
  }
  const styles = {
    error: {
      margin: '-.1rem 0',
      color: 'red',
    },
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
              const handleSubmit = async (formData:&nbsp;
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/API/FormData"
                target="_blank"
                rel="external"
              >
                <strong>FormData</strong>
              </Link>
              ) =&gt; &#123;
            </li>
            <li>&nbsp;const data = &#123;</li>
            <li>
              &nbsp;&nbsp;name: <strong>formData.get</strong>(&lsquo;name&lsquo;),
            </li>
            <li>...response(data)</li>
            <li>&nbsp;&#125;</li>
            <li>&#125;</li>
            <li></li>
            <li>
              &lt;form ref= &#123;refName&#125; action= &#123;async (formData: FormData ) =&gt;
              &#123;
            </li>
            <li>
              <span className="color-is-gray">
                (Use Fn exactly in 'action' is possible ONLY in NEXT JS)
              </span>
            </li>
            <li>&nbsp;&nbsp;await handleSubmit(formData)</li>
            <li>&nbsp;&nbsp;refName.current?.reset()</li>
            <li>&#125;&gt;</li>
          </ul>
        </div>
      </div>
    </>
  )
}
