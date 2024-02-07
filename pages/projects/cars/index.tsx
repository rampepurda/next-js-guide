import style from './Cars.module.scss'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Cars, InfoBox, Navigation, Select } from '../../../components'
import { navigationProjectsLinks, CarsOptions, ROUTE, carsCity } from '../../../configuration'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectCarFilter, selectCarMutation } from '../../../slices/Cars/carSelectors'
import { getCarCity, getCarName, getFilterCar } from '../../../slices'
import CarsSearchBase from './carsSearchBase'
import { useRouter } from 'next/router'

const CarsPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { param } = useAppSelector((state) => state.Cars)
  const [selectedCar, setSelectedCar] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [isDisplay, setIsDisplay] = useState<boolean>(false)
  const filteredCars = useAppSelector(selectCarFilter)
  const carsMutation = useAppSelector(selectCarMutation)
  const handleSearch = () => {
    dispatch(getCarName(selectedCar))
    dispatch(getCarCity(selectedCity))
    return (
      // WARNING: appropriate query value is displayed later after one more click
      router.push({
        pathname: `${ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR}`,
        query: {
          car: param.car,
          city: selectedCity.length !== 0 ? selectedCity : param.city,
        },
      }),
      setIsDisplay(true)
    )
  }

  useEffect(() => {}, [filteredCars, selectedCar, selectedCity, param.car, param.city])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Project-Cars</title>
      </Head>

      <div>
        <h3>1. Find Car by Name and City:</h3>
        <div className={style.searchBox}>
          <Select
            ClassName="select"
            options={CarsOptions}
            DefaultValue={'all cities'}
            OnChange={(ev) => setSelectedCar(ev.target.value)}
          />
          <Select
            ClassName="select"
            options={carsCity}
            DefaultValue={'Select City'}
            OnChange={(ev) => setSelectedCity(ev.target.value)}
          />
          <div>
            <button
              className="btn btn-submit"
              type="button"
              onClick={(ev: React.MouseEvent<HTMLButtonElement>) => handleSearch()}
            >
              Search
            </button>
          </div>
        </div>

        {carsMutation.length === 0 ? (
          <InfoBox className="isDanger">
            <h3>Sorry any result find. Please tray again</h3>
          </InfoBox>
        ) : (
          ''
        )}
        {isDisplay ? <Cars cars={carsMutation} /> : ''}
        <hr />

        {/*
            CarsSearchBase is not Component.
             It`s just an example of more simple search variation where 'createSelector' is in used
             */}
        <CarsSearchBase />
      </div>
    </>
  )
}

export default CarsPage
