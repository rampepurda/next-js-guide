import { createSlice } from '@reduxjs/toolkit'

type Init = {
  isThemeDark: boolean
}

const initialState: Init = {
  isThemeDark: false,
}

export const CommonSlice = createSlice({
  name: 'Common',
  initialState,
  reducers: {
    handleChangeTheme(state, action) {
      state.isThemeDark = action.payload
    },
  },
})

export const { handleChangeTheme } = CommonSlice.actions
