import style from '../../../../components/Input/Input.module.scss'
import { NextPage } from 'next'
import { InfoBox, Input } from '../../../../components'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

interface IFormInputs {
  firstNameDummy: string
  lastNameDummy: string
}

const ChTwentySix: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    getValues,
  } = useForm<IFormInputs>({
    defaultValues: {
      firstNameDummy: '',
      lastNameDummy: '',
    },
  })

  const submitDummyOne = async (data: IFormInputs) => {
    alert(`First Name: ${data.firstNameDummy} | Last Name: ${data.lastNameDummy}`)
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

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | useForm hook </title>
      </Head>

      <div>
        <h2>26. useForm hook in Next JS</h2>
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
        <hr />

        <h3>Installation:</h3>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>npm install react-hook-form</li>
          <li>yarn add react-hook-form</li>
        </ul>
        <hr />

        <h3>Usage:</h3>
        <code>
          import &#123; useForm, <mark>type FieldValues</mark> &#125; from
          &apos;react-hook-form&apos;
        </code>

        <h3>const register = &#123;</h3>
        <ul>
          <li>
            <mark>register</mark>
            <h4>
              This method allows you to register an input or select element and apply validation
              rules to React Hook Form. Validation rules are all based on the HTML standard and also
              allow for custom validation methods.
            </h4>
          </li>
          <li>
            <mark>handleSubmit</mark>
            <h4>This function will receive the form data if form validation is successful.</h4>
          </li>
          <li>
            <mark>formState: &#123; errors, isSubmitting &#125;</mark>
            <h4>
              This object contains information about the entire form state. It helps you to keep on
              track with the user&apos;s interaction with your form application.
            </h4>
          </li>
          <li>
            <mark>getValues</mark>
            <h4>
              An optimized helper for reading form values. The difference between watch and
              getValues is that getValues will not trigger re-renders or subscribe to input changes.
            </h4>
          </li>
          <li>
            <mark>reset</mark>
            <h4>
              Reset the entire form state, fields reference, and subscriptions. There are optional
              arguments and will allow partial form state reset.
            </h4>
          </li>
        </ul>
        <h3>&#125; = useForm</h3>
        <hr />

        <div className="cols">
          <div className="col-6 has-br">
            <h3>Next JS Form - useForm hook:</h3>
            <form name="dummyOne" onSubmit={handleSubmit(submitDummyOne)}>
              <div>
                <input
                  id="nameOne"
                  className={style.Input}
                  placeholder="first name"
                  {...register('firstNameDummy', {
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
                {errors.firstNameDummy && (
                  <p style={{ color: 'red' }}>{`${errors.firstNameDummy?.message}`}</p>
                )}
              </div>
              <div>
                <input
                  id="lastNameOne"
                  className={style.Input}
                  placeholder="Last name"
                  {...register('lastNameDummy', {
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
                {errors.lastNameDummy && (
                  <p style={{ color: 'red' }}>{`${errors.lastNameDummy?.message}`}</p>
                )}
              </div>

              <button className="btn btn-submit" type="submit">
                Submit
              </button>
            </form>
            <hr />

            <h4>onSubmit difference:</h4>
            <InfoBox className="isDanger">
              <h3>Note:</h3>
              <p>
                We are using TS, that`s why instead undefined (data: <strong>FieldValues</strong>)
                use data type as is shown below:
              </p>
              <hr />

              <h3>Don`t forget:</h3>
              <code>
                const &#123;...&#125; ={' '}
                <strong>useForm&lt;IFormInputs&gt;(&#123; defaultValues:</strong> &#123; firstName:
                &apos; &apos;, lastName: &apos; &apos;, &#125;..etc,
              </code>
            </InfoBox>
            <ul>
              <li>
                interface IFormInputs &#123;
                <br />
                firstName string <br /> lastName: string &#125;
              </li>
              <li>
                const submitDummyOne = async
                <strong>
                  (data: <strong>IFormInputs</strong>)
                </strong>
                =&gt; &#123;
              </li>
              <li>alert(data.firstName)</li>
              <li>
                <mark>reset()</mark>
              </li>
              <li>&#125;</li>
            </ul>
          </div>

          <div className="col-6">
            <h3>Next JS Form:</h3>
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

            <h4>onSubmit difference:</h4>
            <code>
              <ul>
                <li>
                  const submitDummyTwo = async (event: FormEvent&lt;HTMLFormElement&gt;) =&gt;
                  &#123;
                </li>
                <li>
                  const formData = <strong>new FormData(event.currentTarget)</strong>
                </li>
                <li>
                  const formDataObject = <strong>Object.fromEntries(formData)</strong>
                </li>
                <li> &#125;</li>
              </ul>
            </code>
          </div>
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
          <a
            href="https://react-hook-form.com/docs/useform/watch"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block' }}
          >
            Read more about <strong>watch</strong> here.
          </a>{' '}
        </h4>
      </div>
    </>
  )
}

export default ChTwentySix
