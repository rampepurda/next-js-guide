import Head from 'next/head'
import { ROUTE } from '../../../configuration'
import React, { FormEvent } from 'react'
import { fetcher } from '../../../utils/fetchers'
import { CarNameTS } from '../../../types'
import Link from 'next/link'
import { Button, Input } from '../../../components'
import useSWR from 'swr'

export default function ChInternalAPI() {
  const localURL: string = '/api/data/cars'
  const cars = useSWR<CarNameTS[] | undefined>(localURL, fetcher)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
    const form = event.currentTarget

    try {
      const response = await fetch(localURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify(formDataObject),
      })
      if (response) {
        alert(`Car: ${formDataObject.model} was added`)
        form.reset()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`localURL/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id),
      })
      if (response) {
        alert(`Car: ${id} was deleted`)
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | Internal API</title>
      </Head>

      <div>
        <h2>Internal API routes - Next &lt;14 (handler)</h2>
        <h4 className="hasOutline">
          In Next 14 &apos;handler&apos; was got rid. For more see Tutorial Next14_app_router
        </h4>
        <h2>Pages Router - API router: handler </h2>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>pages/api/name or name/subName ...</li>
          <li>
            Fn name: <strong>handler</strong> (is obliged/ rule to use)
          </li>
        </ul>
        <Link href={`${ROUTE.GUIDE_CHAPTERS}/ch-eighteen`}>
          More about Internal routes Api in Next 13 find in Chapter18-Next13
        </Link>
        <div className="hasOutline">
          <h3>Structure:</h3>
          <ul className="hasVerticalPadding-4">
            <li>
              export default async function <strong>handler</strong>(req: NextApiRequest, res:
              NextApiResponse) &#123;
            </li>
            <li>&nbsp;switch (req.method) &#123;</li>
            <li>
              &nbsp;&nbsp;<strong>case: &apos;GET&apos;:</strong>
            </li>
            <li>&nbsp;&nbsp;&nbsp;res.status(200).json(data)</li>
            <li>&nbsp;&nbsp;break;</li>
            <li>
              &nbsp;&nbsp;<strong>case: &apos;POST&apos;:</strong>
            </li>
            <li>&nbsp;&nbsp;&nbsp;const dataNew = await req.body</li>
            <li>&nbsp;&nbsp;&nbsp;const dataNewItem = const dataItem = JSON.parse(dataNew)</li>
            <li>&nbsp;&nbsp;&nbsp;res.status(200).json(data.push(dataNewItem))</li>
            <li>&nbsp;&nbsp;break;</li>
            <li>&nbsp;&#125;</li>
            <li>&#125;</li>
          </ul>
        </div>
        <form className="width-is-4" onSubmit={handleSubmit}>
          <label htmlFor="newCar">Add New Car:</label>
          <Input
            id={'postCar'}
            ariaLabel={'write new car name you want to add'}
            rest={{ type: 'text', name: 'model', placeholder: ' car ' }}
          />
          <Button ClassName={'btn-submit'} rest={{ type: 'submit' }}>
            Submit
          </Button>
        </form>
        {(cars.isLoading && <h4>...loading</h4>) ||
          (cars.error && <h4>Ops, something happened</h4>)}
        {cars.data?.map((car, idx) => {
          return (
            <p key={idx}>
              <strong>{idx + 1}.</strong> {car.model}
            </p>
          )
        })}
        <h2>Pages router: Dynamic API routes</h2>
        <div className="hasOutline">
          <h3>Structure:</h3>
          <ul className="hasVerticalPadding-4">
            <li>
              export default async function handler(req: NextApiRequest, res: NextApiResponse)
              &#123;
            </li>
            <li>&nbsp;const &#123; query &#125; = req</li>
            <li>&nbsp; const id = parseInt(query.id as string)</li>
            <li>&nbsp;const carID = cars.find((car: CarNameTS) =&gt; car.id === Number(id))</li>
            <li>&nbsp;return res.status(200).json(carID)</li>
            <li>&nbsp;&#125;</li>
            <li>&#125;</li>
          </ul>
        </div>
      </div>
    </>
  )
}
