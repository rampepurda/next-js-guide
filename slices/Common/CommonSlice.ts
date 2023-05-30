import { createSlice } from "@reduxjs/toolkit"

type Init = {
  x: number,
  y: number,
  z: number,
  txt: string
}

const initialState: Init = {
  x: 10,
  y: 2,
  z: 3,
  txt: 'Prague'
}

export const CommonSlice = createSlice({
  name: 'Common',
  initialState,
  reducers: {
  }
})
