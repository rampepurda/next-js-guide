import React, { useEffect, useState } from 'react'
import { useSelect } from '../../../hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import { Cars, Navigation, Select, FormPostBook } from '../../../components'
import { navigationProjectsLinks, CarsOptions, ROUTE, environment } from '../../../configuration'
import { useAppSelector } from '../../../store/hooks'
import { selectCarFilter } from '../../../slices/Cars/carSelectors'
import { useDispatch } from 'react-redux'
import { getFilterCar } from '../../../slices'

const CarsPage: NextPage = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const { handleOption, Value = `${CarsOptions[0].value}` } = useSelect(
    CarsOptions,
    ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR
  )
  const filteredCars = useAppSelector(selectCarFilter)

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
        alert('Done')
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  useEffect(() => {
    dispatch(getFilterCar(Value))
  }, [Value, filteredCars, name])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Project-Cars</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className="col-9">
          <FormPostBook OnSubmit={handleSubmit} />

          <h3>Filter Cars by Name:</h3>
          <Select id="oldCars" ClassName="select" options={CarsOptions} OnChange={handleOption} />
          <hr />

          <div>
            <mark>
              {Value?.toUpperCase()} | Total found: <strong>{filteredCars.length}</strong>
            </mark>
          </div>
          <Cars cars={filteredCars} />
        </div>
      </div>
    </>
  )
}

export default CarsPage
