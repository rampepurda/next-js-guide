import { createSlice } from "@reduxjs/toolkit"
import { CarTypes } from "../../types"
import { CarList } from "../../configuration"

type initCars = {
  filterCar: string
  cars: CarTypes[]
}
const initialState: initCars = {
  filterCar: 'all cars',
  cars: CarList
}

export const CarSlice = createSlice({
  name: 'Cars',
  initialState,
  reducers: {
    getFilterCar: (state, action) => {
      state.filterCar = action.payload
    },
  }
})

export const { getFilterCar } = CarSlice.actions
