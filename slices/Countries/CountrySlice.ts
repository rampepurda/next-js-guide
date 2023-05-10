import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CountriesQL } from "../../types"
import CountriesService from '../../services/Countries'

const initialState: {
  error?: string,
  loader: boolean,
  countriesGraphQL: CountriesQL[]
} = {
  error: '',
  loader: true,
  countriesGraphQL: []
}

export const getCountries = createAsyncThunk<CountriesQL>(
  'countries/getClientDetails',
  async (_, { rejectWithValue}) => {
    try {
      return await CountriesService.getCountry()
    } catch (err: any) {
      return rejectWithValue('Ops, something wrong, we are not able to provide any data')
    }
  }
)

export const CountrySlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      // @ts-ignore
      state.countriesGraphQL = action.payload
      state.loader = false
    })
    builder.addCase(getCountries.rejected, (state, action) => {
      state.error = action.payload as string
      state.loader = false
    })
    builder.addCase(getCountries.pending, (state) => {
      state.loader = true
    })
  }
})
