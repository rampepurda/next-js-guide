import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import {
  PhotosSlice,
  CountrySlice, CommonSlice,
} from "../slices"

export const store = configureStore({
  reducer: {
    [PhotosSlice.name]: PhotosSlice.reducer,
    [CountrySlice.name]: CountrySlice.reducer,
    [CommonSlice.name]: CommonSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>