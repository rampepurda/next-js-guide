import { createSlice } from '@reduxjs/toolkit'

type Init = {
  isThemeDark: boolean
  ch1SlugNavigation: string[]
}

const initialState: Init = {
  isThemeDark: false,
  ch1SlugNavigation: ['Countries', 'TabTwo'],
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
