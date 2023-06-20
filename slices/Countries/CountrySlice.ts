import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Country } from "../../types"
import CountriesService from '../../services/Countries'
import { Message } from "../../configuration"

const initialState: {
  error?: string,
  filter: string,
  loader: boolean,
  countries: Country[],
  filterCountry: Country
} = {
  error: '',
  filter: '',
  loader: true,
  countries: [],
  filterCountry: {
    code: 'CZ',
    name: 'CZECH REPUBLIC',
    emoji: ''
  }
}

export const getCountries = createAsyncThunk<Country>(
  'countries/getCountries',
  async (_, { rejectWithValue}) => {
    try {
      return await CountriesService.getCountry()
    } catch (err: any) {
      return rejectWithValue(Message.error)
    }
  }
)

export const CountrySlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {
    filteredCar: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      // @ts-ignore
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
  }
})

