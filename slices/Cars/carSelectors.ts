import { createSelector } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectCars = (state: any) => state.Cars.cars
const selectFilter = (state: any) => state.Cars.selectedCar

export const selectCarFilter = createSelector(selectCars, selectFilter, (cars, selectedCar) => {
  if (selectedCar === 'all cars') {
    return cars
  }
  return cars.filter((car: CarTypes) => car.name === selectedCar)
})
