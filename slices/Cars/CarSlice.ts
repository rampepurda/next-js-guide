import { createSlice } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'
import { CarList } from '../../configuration'

type initCars = {
  selectedCar: string
  cars: CarTypes[]
  // Filter Car by Name or City
  param: {
    car: string
    city: string
  }
  carsMutation: CarTypes[]
}
const initialState: initCars = {
  selectedCar: 'all cars',
  cars: CarList,
  param: {
    car: '',
    city: '',
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
      state.param.car = action.payload
    },
    getCarCity: (state, action) => {
      state.param.city = action.payload
    },
  },
})

export const { getFilterCar, getCarName, getCarCity } = CarSlice.actions
