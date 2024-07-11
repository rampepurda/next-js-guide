import { createSlice } from '@reduxjs/toolkit'

type InitValue = {
  isThemeDark: boolean
  ch1SlugNavigation: string[]
  theme: string | null
}

const initialState: InitValue = {
  isThemeDark: true,
  ch1SlugNavigation: ['Countries', 'TabTwo'],
  theme: null,
}

export const Common = createSlice({
  name: 'Common',
  initialState,
  reducers: {
    handleChangeTheme(state, action) {
      state.isThemeDark = action.payload
    },
    handleThemeMode(state, action) {
      state.theme = action.payload
    },
  },
})

export const { handleChangeTheme, handleThemeMode } = Common.actions
