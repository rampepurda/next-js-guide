import React, { useState, useEffect } from "react"
import { useSelect } from "../../../hooks"
import { NextPage } from "next"
import Head from "next/head"
import { Cars, Navigation, Select } from "../../../components"
import { navigationProjectsLinks, CarsOptions, ROUTE } from "../../../configuration"
import { useAppSelector } from "../../../store/hooks"
import { selectCarFilter } from "../../../slices/Cars/carSelectors"
import { useDispatch } from "react-redux"
import { getFilterCar } from "../../../slices"

const CarsPage: NextPage = () => {
  const dispatch = useDispatch()
  const { handleOption, Value = `${CarsOptions[0].value}`} = useSelect(CarsOptions, ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR)
  const filteredCars = useAppSelector(selectCarFilter)

  useEffect(() => {
    dispatch(getFilterCar(Value))
  }, [Value, filteredCars])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Project-Cars</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className='col-9'>
          <h3>Filter Cars by Name:</h3>
          <Select
            id='oldCars'
            ClassName='select'
            options={CarsOptions}
            OnChange={handleOption}
          />
          <hr />

          <div>
            <mark>{Value?.toUpperCase()} | Total found: <strong>{filteredCars.length}</strong></mark>
          </div>
          <Cars cars={filteredCars} />
        </div>
      </div>
    </>
  )
}

export default CarsPage

