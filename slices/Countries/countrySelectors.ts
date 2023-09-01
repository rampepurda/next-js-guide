import { createSelector } from '@reduxjs/toolkit'
import { Country } from '../../types'
import { AppState } from '../../store'

const selectCountries = (state: AppState) => state.Countries.countries
const selectCountrySearch = (state: AppState) => state.Countries.searchCountriesValue

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

export const selectCountryFilter = createSelector(
  selectCountries,
  selectCountrySearch,
  (countries, searchCountriesValue) => {
    return countries.filter(
      (country: Country) =>
        /**
         * The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
         */
        country.name.toLowerCase().substring(0, 3) === searchCountriesValue ||
        country.name.toLowerCase() === searchCountriesValue
    )
  }
)
