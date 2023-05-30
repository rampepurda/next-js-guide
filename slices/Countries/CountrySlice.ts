import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CountriesQL } from "../../types"
import CountriesService from '../../services/Countries'
import { Message } from "../../configuration/common"

const initialState: {
  error?: string,
  loader: boolean,
  countriesGraphQL: CountriesQL[],
  countryDetail: CountriesQL
} = {
  error: '',
  loader: true,
  countriesGraphQL: [],
  countryDetail: {
    code: 'CZ dummy',
    name: 'Czech Republic dummy',
    emoji: ''
  }
}

export const getCountries = createAsyncThunk<CountriesQL>(
  'countries/getCountries',
  async (_, { rejectWithValue}) => {
    try {
      return await CountriesService.getCountry()
    } catch (err: any) {
      return rejectWithValue(Message.error)
    }
  }
)

export const getCountryDetail = createAsyncThunk<CountriesQL, {code: string} >(
  'country/getCountryDetails',
  async ({code}, { rejectWithValue}) => {
    try {
      return await CountriesService.getCountryDetail(code)
    } catch (err: unknown) {
      return rejectWithValue(Message.error)
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
    // GET COUNTRY DETAIL
    builder.addCase(getCountryDetail.fulfilled, (state, action) => {
      state.countryDetail = action.payload
    })
  }
})
