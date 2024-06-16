import { Input } from '../../../../components'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInputs {
  firstName: string | undefined
  lastName: string | undefined
}

export default function ChTwentySix() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    getValues,
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const submitDummyOne = async (data: IFormInputs) => {
    alert(`First Name: ${data.firstName} | Last Name: ${data.lastName}`)
    reset()
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
      color: 'red',
    },
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | useForm hook </title>
      </Head>

      <div>
        <h2>26. useForm hook vs FormEvent</h2>
        <h2>useForm</h2>
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
        <ul>
          <li>
            <code>
              import &#123; useForm, <mark>type FieldValues</mark> &#125; from
              &apos;react-hook-form&apos;
            </code>
          </li>
          <li>
            <code>
              const &#123; register, handleSubmit, watch, reset, getValues,... &#125; =
              <mark>useForm</mark>&lt;TS&gt; (&#123; defaultValue &#125;)
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
          <form name="dummyOne" onSubmit={handleSubmit(submitDummyOne)}>
            <div>
              <input
                id="name"
                className="inp"
                placeholder="first name"
                {...register('firstName', {
                  required: 'First Name is required',
                  maxLength: {
                    value: 15,
                    message: 'First Name max length can be only 20 letters',
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Use only alphabetical characters',
                  },
                })}
                aria-label="write name"
              />
              {errors.firstName && <p style={styles.error}>{`${errors.firstName?.message}`}</p>}
            </div>
            <div>
              <input
                id="lastName"
                className="inp"
                placeholder="Last name"
                {...register('lastName', {
                  required: 'Last Name is required',
                  maxLength: {
                    value: 15,
                    message: 'Last Name max length can be only 15 letters',
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Use only alphabetical characters',
                  },
                })}
                aria-label="write name"
              />
              {errors.lastName && <p style={{ color: 'red' }}>{`${errors.lastName?.message}`}</p>}
            </div>
            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </form>
          <h4>Structure:</h4>
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
