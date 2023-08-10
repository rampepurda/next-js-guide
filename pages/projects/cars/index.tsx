import React, { useEffect, useState } from 'react'
import { useSelect } from '../../../hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import { Cars, InfoBox, Navigation, Select } from '../../../components'
import { navigationProjectsLinks, CarsOptions, ROUTE, carsCity } from '../../../configuration'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectCarFilter, selectCarMutation } from '../../../slices/Cars/carSelectors'
import { getFilterCar, getSelectedLocation } from '../../../slices'
import { useRouter } from 'next/router'

const CarsPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [selectedCar, setSelectedCar] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const { handleOption, Value = 'all cars' } = useSelect(
    CarsOptions,
    ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR
  )
  const filteredCars = useAppSelector(selectCarFilter)
  const carsMutation = useAppSelector(selectCarMutation)
  const handlerSearch = () => {
    dispatch(getFilterCar(selectedCar))
    dispatch(getSelectedLocation(selectedCity))
    return router.push(
      `${ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR}?_selected=${selectedCar}&location=${selectedCity}`
    )
  }

  useEffect(() => {
    //dispatch(getFilterCar(Value))
  }, [Value, filteredCars, selectedCar, selectedCity])

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
          <div>
            <h3>Find Car by Name and City:</h3>
            <div style={{ display: 'flex', justifyContent: 'start', gap: '3rem' }}>
              <Select
                ClassName="select"
                options={CarsOptions}
                OnChange={(ev) => setSelectedCar(ev.target.value)}
              />
              <Select
                ClassName="select"
                options={carsCity}
                OnChange={(ev) => setSelectedCity(ev.target.value)}
              />
              <button className="btn btn-submit" type="button" onClick={handlerSearch}>
                Search
              </button>
            </div>
            {carsMutation.length === 0 ? (
              <InfoBox className={'isDanger'}>
                <h4>
                  Sorry any <strong>{selectedCar}</strong> founded in{' '}
                  <strong>{selectedCity}</strong>, please try again
                </h4>
              </InfoBox>
            ) : (
              ''
            )}
            <Cars cars={carsMutation} />
          </div>
          <hr />

          <h3>Find Car by Name:</h3>
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
