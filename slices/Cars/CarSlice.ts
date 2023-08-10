import { createSlice } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'
import { CarList } from '../../configuration'

type initCars = {
  selectedCar: string
  selectedLocation: string
  cars: CarTypes[]
  carsMutation: CarTypes[]
}
const initialState: initCars = {
  selectedCar: 'all cars',
  selectedLocation: '',
  cars: CarList,
  carsMutation: CarList,
}

export const CarSlice = createSlice({
  name: 'Cars',
  initialState,
  reducers: {
    getFilterCar: (state, action) => {
      state.selectedCar = action.payload
    },
    getSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload
    },
  },
})

export const { getFilterCar, getSelectedLocation } = CarSlice.actions
