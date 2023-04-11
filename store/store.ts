import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import {counterSlice, SlCommon} from "../slices"

export const store = configureStore({
  reducer: {
    [SlCommon.name]: SlCommon.reducer,
    [counterSlice.name]: counterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>