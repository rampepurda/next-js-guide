import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import {
  PhotosSlice,
  CountrySlice, CommonSlice, CarSlice,
} from "../slices"

export const store = configureStore({
  reducer: {

    [CarSlice.name]: CarSlice.reducer,
    [CommonSlice.name]: CommonSlice.reducer,
    [CountrySlice.name]: CountrySlice.reducer,
    [PhotosSlice.name]: PhotosSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>