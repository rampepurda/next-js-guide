import { createSlice } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'
import { CarList } from '../../configuration'

type initCars = {
  selectedCar: string
  cars: CarTypes[]
  // Filter Car by Name or City
  param: {
    carName: string
    carCity: string
  }
  carsMutation: CarTypes[]
}
const initialState: initCars = {
  selectedCar: 'all cars',
  cars: CarList,
  param: {
    carName: 'all cars',
    carCity: 'all cities',
  },
  carsMutation: CarList,
}

export const CarSlice = createSlice({
  name: 'Cars',
  initialState,
  reducers: {
    getFilterCar: (state, action) => {
      state.selectedCar = action.payload
    },
    // Filter By Name and City
    getCarName: (state, action) => {
      state.param.carName = action.payload
    },
    getCarCity: (state, action) => {
      state.param.carCity = action.payload
    },
  },
})

export const { getFilterCar, getCarName, getCarCity } = CarSlice.actions
