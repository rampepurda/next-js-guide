import { createSlice } from '@reduxjs/toolkit'
import { CarSlice } from '../Cars/CarSlice'

type Init = {
  x: number
  y: number
  z: number
  txt: string
  modes: boolean
}

const initialState: Init = {
  x: 10,
  y: 2,
  z: 3,
  txt: 'Prague',
  modes: false,
}

export const CommonSlice = createSlice({
  name: 'Common',
  initialState,
  reducers: {
    changeMode(state, action) {
      state.modes = action.payload
    },
  },
})

export const { changeMode } = CommonSlice.actions
