import { createSelector } from "@reduxjs/toolkit"
import { Country } from "../../types"

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectCountries = (state: any) => state.Countries.countries
const selectCountrySearch = (state: any) => state.Countries.searchCountriesValue

export const selectCountryFilter = createSelector(
  selectCountries,
  selectCountrySearch,
  (countries, searchCountriesValue ) => {
    return countries.filter((country: Country) => country.name.toLowerCase().substring(0,3) === searchCountriesValue || country.name.toLowerCase() === searchCountriesValue)
  })