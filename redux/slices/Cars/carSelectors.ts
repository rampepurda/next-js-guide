import { createSelector } from '@reduxjs/toolkit'
import { CarTypes } from '../../../types'
import { AppState } from '../../store'

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */
// Filter By Car Name
const selectCarList = (state: AppState) => state.Cars.cars
const selectCar = (state: AppState) => state.Cars.selectedCar

export const selectCarFilter = createSelector(selectCarList, selectCar, (cars, selectedCar) => {
  if (selectedCar === 'all cars') {
    return cars
  }
  return cars.filter((car: CarTypes) => car.name === selectedCar)
})

// Filter By Car Name and City
const selectCarsMutation = (state: AppState) => state.Cars.carsMutation
const selectCarName = (state: AppState) => state.Cars.param.car
const selectCarCity = (state: AppState) => state.Cars.param.city

export const selectCarMutation = createSelector(
  selectCarsMutation,
  selectCarName,
  selectCarCity,
  // follow the order: 1. selectCarsMutation = carsMutation 2. selectCarName = carName ...
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
