import React, { useEffect } from 'react'
import { useSelect } from '../../../hooks'
import { Cars, Select } from '../../../components'
import { CarsOptions, ROUTE } from '../../../configuration'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { selectCarFilter } from '../../../redux/slices/Cars/carSelectors'
import { getFilterCar } from '../../../redux/slices'

/**
 * @page CarsSearchBase - only as an example how to use 'useSelection' hook as SUB Page of Car Project
 * DIDNT USE IN THE ANOTHER PLACE YET!
 */
export const CarsSearchBase = () => {
  const dispatch = useAppDispatch()
  const { handleOption, Value = 'all cars' } = useSelect(
    CarsOptions,
    ROUTE.PAGES.PROJECTS.CARS.ROUTE.GET_SELECTED_CAR
  )
  const filteredCars = useAppSelector(selectCarFilter)

  useEffect(() => {
    dispatch(getFilterCar({ filteredCar: Value }))
  }, [Value, filteredCars])

  return (
    <>
      <h3>2. Find Car by Name:</h3>
      <Select id="oldCars" ClassName="select" options={CarsOptions} OnChange={handleOption} />
      <div>
        <mark>
          {Value?.toUpperCase()} | Total found: <strong>{filteredCars.length}</strong>
        </mark>
      </div>
      <Cars cars={filteredCars} />
    </>
  )
}

export default CarsSearchBase
