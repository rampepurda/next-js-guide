import { createSelector } from "@reduxjs/toolkit"
import { initPhotos } from "../../types"

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectX = (state: any) => state.Common.x
const selectY = (state: any) => state.Common.y
const selectZ = (state: any) => state.Common.z
const countries = (state: any) => state.Countries.countriesGraphQL
const selectPhoto = (state: any) => state.Photo.photos

export const selectXYZ = createSelector(
  selectX,
  selectY,
  selectZ,
  (x, y, z ) => {
  // do something with x, y, and z and return a result
  return x + y + z
})

/*
export const selectedPhoto = createSelector(
  selectPhoto,
  (photos) => {
    return photos.filter((photo: initPhotos) => photo.id === 23)
})
 */


