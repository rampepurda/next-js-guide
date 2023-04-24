import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { CounterSlice, CommonSlice } from "../slices"

export const store = configureStore({
  reducer: {
    [CommonSlice.name]: CommonSlice.reducer,
    [CounterSlice.name]: CounterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>