import { Button, Input } from '../../../../components'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { environment } from '../../../../configuration'

interface BookT {
  author: string | undefined
  title: string | undefined
  price: string | number | undefined
}

export default function ChTwentySix() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    getValues,
  } = useForm<BookT>({
    defaultValues: {
      author: '',
      title: '',
      price: '',
    },
  })

  const submitBook = async (data: BookT) => {
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
  const submitDummyTwo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
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
  const styles = {
    error: {
      margin: '-.1rem 0',
      color: 'red',
    },
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | form </title>
      </Head>

      <div>
        <h2>26. Next(React) JS &lt; form &gt;</h2>
        <h2>useForm hook</h2>
        <ul className="hasVerticalPadding-3">
          <li>
            <Link href="https://react-hook-form.com/docs/useform" target="_blank">
              useForm hook - read more
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=R_Pj593TH_Q" target="_blank">
              See Video Tutorial
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=R_Pj593TH_Q" target="_blank">
              See Video Tutorial - useForm hook in React
            </Link>
          </li>
        </ul>
        <h3>Installation:</h3>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>npm install react-hook-form</li>
          <li>yarn add react-hook-form</li>
        </ul>
        <hr />
        <ul className="hasVerticalPadding-3">
          <li>
            <code>
              import &#123; useForm, <em>type FieldValues</em> &#125; from
              &apos;react-hook-form&apos;
            </code>
          </li>
          <li>
            <code>
              const &#123; register, handleSubmit, formState: &#123; errors,... &#125;, watch,
              reset, getValues,... &#125; = &nbsp;<mark>useForm</mark>&lt;TS&gt; (&#123;
              defaultValue &#125;)
            </code>
          </li>
          <li>
            <h4>register</h4>
            <p>
              This method allows you to register an input or select element and apply validation
              rules to React Hook Form. Validation rules are all based on the HTML standard and also
              allow for custom validation methods.
            </p>
          </li>
          <li>
            <h4>handleSubmit</h4>
            <p>This function will receive the form data if form validation is successful.</p>
          </li>
          <li>
            <h4>formState: &#123; errors, isSubmitting &#125;</h4>
            <p>
              This object contains information about the entire form state. It helps you to keep on
              track with the user&apos;s interaction with your form application.
            </p>
          </li>
          <li>
            <h4>getValues</h4>
            <p>
              An optimized helper for reading form values. The difference between watch and
              getValues is that getValues will not trigger re-renders or subscribe to input changes.
            </p>
          </li>
          <li>
            <h4>reset</h4>
            <p>
              Reset the entire form state, fields reference, and subscriptions. There are optional
              arguments and will allow partial form state reset.
            </p>
          </li>
        </ul>
        <hr />
        <div>
          <form name="dummyOne" onSubmit={handleSubmit(submitBook)}>
            <div>
              <input
                id="author"
                className="inp"
                placeholder="author"
                {...register('author', {
                  required: 'Author is required',
                  maxLength: {
                    value: 60,
                    message: 'First Name max length can be only until 60 letters',
                  },
                  /*
                          pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Use only alphabetical characters',
                  },
                   */
                })}
                aria-label="write name"
              />
              {errors.author && <p style={styles.error}>{`${errors.author?.message}`}</p>}
            </div>
            <div>
              <input
                id="title"
                className="inp"
                placeholder="title"
                {...register('title', {
                  required: 'Title is required',
                  maxLength: {
                    value: 100,
                    message: 'Title length is oversize. Try shorter',
                  },
                })}
                aria-label="write name"
              />
              {errors.title && <p style={styles.error}>{`${errors.title?.message}`}</p>}
            </div>
            <div>
              <input
                id="price"
                className="inp"
                type="number"
                placeholder="price in Kč"
                {...register('price', {
                  required: 'Price is required',
                  min: {
                    value: 1,
                    message: 'Min price must be higher then 0Kč',
                  },
                  max: {
                    value: 1000,
                    message: 'Max price must be lower then 1000',
                  },
                })}
                aria-label="write name"
              />
              {errors.price && <p style={styles.error}>{`${errors.price?.message}`}</p>}
            </div>
            <Button ClassName={'btn-submit'} rest={{ type: 'submit' }} title={'Submit'} />
          </form>
          <h4>Structure:</h4>
          <ul className="hasVerticalPadding-6 hasOutline">
            <li>
              const submitFn = async (<strong>data: TS</strong>) =&gt; &#123;
              <br />
              (instead data: TS appropriate Inputs values you can use predefined
              <strong>
                <em> FieldValues </em>
              </strong>
              from useForm hook.)
            </li>
            <li>
              &nbsp;const response = await fetch(url, &#123;
              <br />
              &nbsp;&nbsp;method: &lsquo;POST&lsquo;,
              <br />
              &nbsp;&nbsp;headers: &#123;&lsquo;Content-Type&lsquo;: &lsquo;application.json&lsquo;
              &#125;,
              <br />
              &nbsp;&nbsp;body: JSON.stringify<strong>(&#123; ...data&#125;)</strong>, &#123;)
            </li>
            <li>
              &nbsp;&nbsp;if(res.ok)&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<strong>reset(), watch...</strong>(useForm attribute)
              <br />
              &nbsp;&nbsp;&#125;
            </li>
            <li>&#125;</li>
            <li>
              &lt;form onSubmit=&#123;<strong>handleSubmit</strong>(submitFn) &#123;
            </li>
            <li>
              &nbsp;&lt;input <br />
              &nbsp;&nbsp;&#123;...<strong>register</strong>(&apos; name &apos;, &#123;
              <br />
              <strong>&nbsp;&nbsp;&nbsp;required:</strong> &apos;First Name is Req&apos;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;maxLength: &#123; value: , message: &apos;message&apos;&#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;pattern: &#123; &#125; <br />
              ...end the others condition
            </li>
            <li>&#125; /&gt;</li>
            <li>
              &#123;<strong>errors</strong>.name && `message`
            </li>
            <li>&lt;/form&gt;</li>
          </ul>
        </div>

        <div>
          <h2>FormEvent</h2>
          <form name="dummyTwo" onSubmit={submitDummyTwo}>
            <div>
              <Input
                id={'name'}
                ariaLabel={'write name'}
                rest={{ type: 'text', name: 'firstName' }}
                isRequired={true}
                placeholder={'first name'}
              />
            </div>
            <div>
              <Input
                id={'lastName'}
                ariaLabel={'write last name'}
                rest={{ type: 'text', name: 'lastName' }}
                isRequired={true}
                placeholder={'last name'}
              />
            </div>

            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </form>
          <hr />

          <h4>Structure:</h4>
          <ul>
            <li>
              const submitDummyTwo = async (event: FormEvent&lt;HTMLFormElement&gt;) =&gt; &#123;
            </li>
            <li>
              const formData = <strong>new FormData(event.currentTarget)</strong>
            </li>
            <li>
              const formDataObject = <strong>Object.fromEntries(formData)</strong>
            </li>
            <li> &#125;</li>
          </ul>
        </div>
        <hr />

        <h2>useForm with &apos;controller&apos; and with Material UI</h2>
        <h3>How to install MUI</h3>
        <ul>
          <li>yarn add @mui/material @emotion/react @emotion/styled</li>
          <li>yarn add @mui/x-date-pickers</li>
          <li>yarn add dayjs</li>
        </ul>
        <h4>
          For more Info please visit Tutorial: <strong>React MUI</strong> or: Tutorial/Framework/
          <strong>next-14-useForm</strong>
        </h4>
        <hr />

        <h3>Note:</h3>
        <p>When I used useForm with MUI I noted problem to reset() Form</p>
        <h4>
          For that reason I used <mark>watch</mark> to help me clear Form data.
          <Link
            href="https://react-hook-form.com/docs/useform/watch"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block' }}
          >
            Read more about <strong>watch</strong> here.
          </Link>
        </h4>
      </div>
    </>
  )
}
