import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Country } from '../../types'
import CountriesService from '../../services/Countries'
import { Message } from '../../configuration'

const initialState: {
  error?: string
  searchCountriesValue: string
  loader: boolean
  countries: Country[]
} = {
  error: '',
  searchCountriesValue: '',
  loader: true,
  countries: [],
}

export const getCountries = createAsyncThunk<Country[]>(
  'countries/getCountries',
  async (_, { rejectWithValue }) => {
    try {
      return await CountriesService.getCountry()
    } catch (err: unknown) {
      return rejectWithValue(Message.error)
    }
  }
)

export const CountrySlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {
    getSearchCountry: (state, action) => {
      state.searchCountriesValue = action.payload.SearchedCountryValue
    },
  },
  extraReducers(builder) {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload
      state.loader = false
    })
    builder.addCase(getCountries.rejected, (state, action) => {
      state.error = action.payload as string
      state.loader = false
    })
    builder.addCase(getCountries.pending, (state) => {
      state.loader = true
    })
  },
})

export const { getSearchCountry } = CountrySlice.actions
