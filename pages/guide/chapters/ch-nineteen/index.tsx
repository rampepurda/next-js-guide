import Head from 'next/head'
import { ROUTE } from '../../../../configuration'
import React, { useEffect, useState, FormEvent } from 'react'
import { fetchInternalAPI } from '../../../../utils'
import { CarNameTS } from '../../../../types'
import Link from 'next/link'

export default function ChNineteen() {
  const localURL: string = '/api/mock'
  const [cars, setCars] = useState<CarNameTS[]>([])
  const getLocalData = async () => {
    const data = await fetchInternalAPI(localURL)
    setCars(data)
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
    const form = event.currentTarget
    const response = await fetch(localURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify(formDataObject),
    })

    try {
      if (response) {
        alert(`Car: ${formDataObject.model} was added`)
        form.reset()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  useEffect(() => {
    getLocalData().then()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-nineteen</title>
      </Head>

      <div>
        <h2>19. Internal API routes - Next &lt;14 (handler)</h2>
        <h4 className="hasOutline">
          In Next 14 &apos;handler&apos; was got rid. For more see Tutorial Next14_app_router
        </h4>
        <h3>Internal API - PageRouter</h3>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>pages/api/name or name/subName ...</li>
          <li>
            Fn name: <strong>handler</strong> (is obliged/ rule to use)
          </li>
        </ul>
        <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-eighteen`}>
          More about Internal routes Api in Next 13 find in Chapter18-Next13
        </Link>
        <hr />

        <h3>How to get/POST Internal API</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newCar">Add New Car:</label>
          <input
            id="newCar"
            name="model"
            type="text"
            placeholder="new car"
            aria-label="write new car name you want to add"
          />
          <button type="submit">Submit</button>
        </form>
        {cars.length === 0 && <h4>...loading</h4>}
        {cars.map((car, idx) => {
          return <p key={idx}>{car.model}</p>
        })}
        <hr />
        <h3>How to get Internal API by SWR</h3>
        <ul className="hasVerticalPadding-2 hasTypeDisc">
          <li>
            <a href="https://swr.vercel.app/" rel="noreferrer" target="_blank">
              Read more about SWR
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/index.tsx"
              rel="noreferrer"
              target="_blank"
            >
              SWR example
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
