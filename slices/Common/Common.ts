import { createSlice } from '@reduxjs/toolkit'

type Init = {
  isThemeDark: boolean
}

const initialState: Init = {
  isThemeDark: false,
}

export const Common = createSlice({
  name: 'Common',
  initialState,
  reducers: {
    handleChangeTheme(state, action) {
      state.isThemeDark = action.payload
    },
  },
})

export const { handleChangeTheme } = Common.actions
