import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PhotoType } from '../../../types'

/**
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */

const initialState: {
  amount: number
  isLoading: boolean
  id: number
  error: string
  photos: PhotoType[]
  userName?: string
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

export const getPhotosWithLimit = createAsyncThunk<PhotoType[], { url: string; hasLimit: number }>(
  'photos/GET',
  async (params, { rejectWithValue }): Promise<any> => {
    const { url, hasLimit } = params
    try {
      const response = await fetch(`${url}?_limit=${hasLimit}`, {
        /* In Case data are dynamic makes sense use THUNK with appropriate attributes as is shown below:
                cache: 'no-store',
        next: {
          revalidate: 5,
        },
         */
      })
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
    changeUserName: (state, action) => {
      state.userName = action.payload.changeUserName
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.amount += action.payload
    },
    decrement: (state) => {
      state.amount--
      if (state.amount < 0) {
        alert('Amount must not be under 0')
        state.amount = 20
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getPhotosWithLimit.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
      state.isLoading = false
      state.photos = action.payload
    })
    builder.addCase(getPhotosWithLimit.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(getPhotosWithLimit.pending, (state, action) => {
      state.isLoading = true
    })
  },
})

export const { changeUserName } = PhotosSlice.actions
