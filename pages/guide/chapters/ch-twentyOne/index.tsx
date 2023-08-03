import React, { useState } from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'
import { Navigation, InfoBox, Input, FormPostBook } from '../../../../components'
import Head from 'next/head'
import { environment, navigationGuideLinks } from '../../../../configuration'
import ImgSubmitHandle from './ch21-submit-structure.png'
import ImgForm from './ch21-form.png'
import Image from 'next/image'

const ChTwentyOne: NextPage = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const endpoint = `${environment.fireBaseBookURL}`
    const data = {
      author: event.target.author.value,
      title: event.target.title.value,
      price: event.target.price.value,
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ ...data }),
      })
      if (response.ok) {
        alert(`We got Book you are asking for: Author: ${data.author}`)
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-21 | Form </title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>21. Form - what is new | knowledge refresher</h2>
          <hr />
          <FormPostBook OnSubmit={handleSubmit} />
          <hr />

          <InfoBox className={'isWarning'}>
            <h4>Data are &apos;POST&apos; to: FIREBASE(books), see .ENV</h4>
          </InfoBox>

          <Image src={ImgSubmitHandle} alt="submit handle" aria-hidden={true} />
          <hr />
          <Image src={ImgForm} alt="form focus on name param" aria-hidden={true} />
        </div>
      </div>
    </>
  )
}

export default ChTwentyOne
