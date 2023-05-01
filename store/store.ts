import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import {
  CounterSlice,
  PhotosSlice,
  CountrySlice
} from "../slices"
import {Photos} from "../components/Photos";

export const store = configureStore({
  reducer: {
    [PhotosSlice.name]: PhotosSlice.reducer,
    [CountrySlice.name]: CountrySlice.reducer,
    [CounterSlice.name]: CounterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>