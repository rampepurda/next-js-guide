import { createSelector } from "@reduxjs/toolkit"
import { Country } from "../../types"

/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectCountry = (state: any) => state.Countries.filterCountry
const selectFilter = (state: any) => state.Countries.filter
