import style from '../../../../components/Input/Input.module.scss'
import { NextPage } from 'next'
import { InfoBox, Input, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

const ChTwentySix: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    getValues,
  } = useForm()

  const submitDummyOne = async (data: FieldValues) => {
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

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | useForm hook </title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
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
                rules to React Hook Form. Validation rules are all based on the HTML standard and
                also allow for custom validation methods.
              </h4>
            </li>
            <li>
              <mark>handleSubmit</mark>
              <h4>This function will receive the form data if form validation is successful.</h4>
            </li>
            <li>
              <mark>formState: &#123; errors, isSubmitting &#125;</mark>
              <h4>
                This object contains information about the entire form state. It helps you to keep
                on track with the user&apos;s interaction with your form application.
              </h4>
            </li>
            <li>
              <mark>getValues</mark>
              <h4>
                An optimized helper for reading form values. The difference between watch and
                getValues is that getValues will not trigger re-renders or subscribe to input
                changes.
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
              <ul>
                <li>
                  const submitDummyOne = async
                  <strong>
                    (data: <mark>FieldValues</mark>)
                  </strong>
                  =&gt; &#123;
                </li>
                <li>alert(`First Name: $&#123;data.firstNameDummy&#125;`)</li>
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

          <InfoBox className="isDanger">
            <h3>NOTE:</h3>
            <p>
              Looks that when I`ve used Component &apos;Input&apos; useForm hook stopped working
            </p>
          </InfoBox>
          <hr />

          <h2>useForm with &apos;controller&apos; and with Material UI</h2>
          <p>
            For more Info please see Tutorial:{' '}
            <em>
              <strong>React MUI</strong>
            </em>{' '}
            or project:{' '}
            <em>
              <strong>Newsweek</strong>
            </em>
          </p>

          <h3>How to install MUI</h3>
          <ul>
            <li>yarn add @mui/material @emotion/react @emotion/styled</li>
            <li>yarn add @mui/x-date-pickers</li>
            <li>yarn add dayjs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChTwentySix
