import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

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

export const getCountries = createAsyncThunk<PhotoType, { hasLimit: string }, { rejectValue: string }>(
  'countries/Apollo GraphQL',
  async (hasLimit, { rejectWithValue}) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${hasLimit}`)
      return response.json()
    } catch (err) {
      return rejectWithValue('Ops, something wrong, we are not able to provide any data')
    }
  }
)

export const CountrySlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {
  }
})


