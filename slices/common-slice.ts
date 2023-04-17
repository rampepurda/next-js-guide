import React, {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

type PhotoType = Array<{
  albumId?: number,
  id?: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}>

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

export const getPhotos = createAsyncThunk<PhotoType, { hasLimit: string }, { rejectValue: string }>(
  'users/fetchById',
  // Declare the type your function argument here:
  async (hasLimit, { rejectWithValue}) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${hasLimit}`)
      return response.json()
    } catch (err) {
      return rejectWithValue('Ops, something wrong, we are not able to provide any data')
    }
  }
)

export const SlCommon = createSlice({
  name: 'common',
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
} = SlCommon.actions

//export const ActionCommon = SlCommon.actions
// exporting the reducer here, as we need to add this to the store
//export default SlCommon.reducer

