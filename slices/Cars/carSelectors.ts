import { createSelector } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectCars = (state: any) => state.Cars.cars
const selectCarsMutation = (state: any) => state.Cars.carsMutation
const selectFilter = (state: any) => state.Cars.selectedCar
const selectLocation = (state: any) => state.Cars.selectedLocation

export const selectCarFilter = createSelector(selectCars, selectFilter, (cars, selectedCar) => {
  if (selectedCar === 'all cars') {
    return cars
  }
  return cars.filter((car: CarTypes) => car.name === selectedCar)
})

export const selectCarMutation = createSelector(
  selectCarsMutation,
  selectFilter,
  selectLocation,
  (carsMutation, selectedCar, selectedLocation) => {
    return carsMutation.filter(
      (car: CarTypes) =>
        car.name.includes(`${selectedCar}`) && car.location?.includes(`${selectedLocation}`)
    )
  }
)
