import { createSelector } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */
// Filter By Car Name
const selectCarList = (state: any) => state.Cars.cars
const selectCar = (state: any) => state.Cars.selectedCar

// Filter By Car Name and City
const selectCarsMutation = (state: any) => state.Cars.carsMutation
const selectCarName = (state: any) => state.Cars.carName
const selectCarCity = (state: any) => state.Cars.carCity

export const selectCarFilter = createSelector(selectCarList, selectCar, (cars, selectedCar) => {
  if (selectedCar === 'all cars') {
    return cars
  }
  return cars.filter((car: CarTypes) => car.name === selectedCar)
})

export const selectCarMutation = createSelector(
  selectCarsMutation,
  selectCarName,
  selectCarCity,
  (carsMutation, carName, carCity) => {
    if (carName === 'all cars' || carCity === 'all cities') {
      return carsMutation
    }
    return carsMutation.filter(
      (car: CarTypes) =>
        (car.name.includes(`${carName}`) && car.location?.includes(`${carCity}`)) ||
        (car.name.includes(`${carName}`) && carCity === 'all cities')
    )
  }
)
