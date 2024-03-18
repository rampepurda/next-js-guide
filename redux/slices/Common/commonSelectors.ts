import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../../store'

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectX = (state: AppState) => state.Common.x
const selectY = (state: AppState) => state.Common.y
const selectZ = (state: AppState) => state.Common.z
const countries = (state: AppState) => state.Countries.countriesGraphQL
const selectPhoto = (state: AppState) => state.Photo.photos

export const selectXYZ = createSelector(selectX, selectY, selectZ, (x, y, z) => {
  // do something with x, y, and z and return a result
  return x + y + z
})
