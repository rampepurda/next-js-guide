import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'
import Link from 'next/link'

const ChTwentySix: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()
  /*
            const submitUpdatedProfile = async (event: FormEvent<HTMLFormElement>) => {
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
        // WILL BE REMOVED-ONLY TESTING PURPOSE!!
        alert(
          `First Name: ${formDataObject.firstName}
           Last Name: ${formDataObject.lastName}
            Date Of Birth: ${formDataObject.dateOfBirth}
            CountrySelected: ${formDataObject.countrySelected}
            ZipCode: ${formDataObject?.zipCountryCode}
           Status: SUCCESSFULLY SEND`
        )
        reset()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }
   */

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
            <li>yarn react-hook-form</li>
          </ul>

          <hr />

          <h3>Usage:</h3>

          <code>
            import &#123; useForm, <mark>type FieldValues</mark> &#125; from
            &apos;react-hook-form&apos;
          </code>

          <h3>const register = &#123;</h3>
          <ul className="">
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
                on track with the user's interaction with your form application.
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
            </div>
            <div className="col-6">
              <h3>Next JS Form:</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTwentySix
