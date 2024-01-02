import { NextPage } from 'next'
import { InfoBox, Navigation } from '../../../../components'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import { useWindWidth } from '../../../../hooks'
import { useEffect } from 'react'
import { merriweather, roboto } from '../../../../fonts'
import Link from 'next/link'

const ChTwentySix: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

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

          <code>
            import &#123; useForm, type FieldValues &#125; from &apos;react-hook-form&apos;
          </code>

          <h3>const register = &#123;</h3>
          <ul className="">
            <li>
              <mark>register</mark>
            </li>
            <li>
              <mark>handleSubmit</mark>
            </li>
            <li>
              <mark>formState: &#123; errors, isSubmitting &#125;</mark>
            </li>
            <li>
              <mark>getValues</mark>
            </li>
            <li>
              <mark>reset</mark>
            </li>
          </ul>
          <h3>&#125; = useForm</h3>
          {/*
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
          */}
        </div>
      </div>
    </>
  )
}

export default ChTwentySix
