/**
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { environment } from "../../configuration"

type PhotoType = {
  albumId?: number,
  id?: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}[]

const initialState: {
  amount: number,
  isLoading: boolean,
  id: number,
  error: string,
  photos: PhotoType,
  userName?: string,
} = {
  amount: 2,
  isLoading: false,
  id: 0,
  error: '',
  photos: [],
  userName: 'Dobrodej Kaderabek',
}

/**
 * CREATE THUNK WITHOUT PARAMS WITH: return rejectWithValue
 * @link = https://javascript.plainenglish.io/createasyncthunk-in-redux-toolkit-4d8d2f0412d3
 * @param=async (_, { rejectWithValue}) => {
 *
  export const getData = createAsyncThunk<{rejectValue: string}>(
  'data/test',
  async (_, { rejectWithValue}) => {
    try {
      const response = await fetch(`${environment}`)
      return response.json()
    } catch (err) {
      return rejectWithValue('Ops, something wrong, we are not able to provide any data')
    }
  }
)
 */

export const getPhotos = createAsyncThunk<PhotoType, string>(
  'users/fetchById',
  // Declare the type your function argument here:
  async (hasLimit, { rejectWithValue}) => {
    try {
      const response = await fetch(`${environment.photosURL}?_limit=${hasLimit}`)
      return response.json()
    } catch (err) {
      return rejectWithValue('Ops, something wrong, we are not able to provide any data')
    }
  }
)

export const PhotosSlice = createSlice({
  name: 'Photos',
  initialState,
  reducers: {
    UserName: (state, action) => {
      state.userName = action.payload.changeUserName
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
    Decrement: (state) => {
      state.amount--
      if (state.amount < 0) {
        alert('Amount must not be under 0')
        state.amount = 20
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(getPhotos.fulfilled, (state, action: PayloadAction<PhotoType>) => {
      state.isLoading = false
      state.photos = action.payload
    })
    builder.addCase(getPhotos.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(getPhotos.pending, (state, action) => {
      state.isLoading = true
    })
  }
})

export const {
  UserName,
  Decrement,
  incrementByAmount
} = PhotosSlice.actions

