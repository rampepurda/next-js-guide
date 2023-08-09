import { createSlice } from '@reduxjs/toolkit'
import { CarTypes } from '../../types'
import { CarList } from '../../configuration'

type initCars = {
  selectedCar: string
  cars: CarTypes[]
}
const initialState: initCars = {
  selectedCar: 'all cars',
  cars: CarList,
}

export const CarSlice = createSlice({
  name: 'Cars',
  initialState,
  reducers: {
    getFilterCar: (state, action) => {
      state.selectedCar = action.payload
    },
  },
})

export const { getFilterCar } = CarSlice.actions
