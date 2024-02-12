import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Countries as CountriesData, Input } from '../../../components'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../store'
import { getCountries, getSearchCountry } from '../../../slices'
import { selectCountryFilter } from '../../../slices/Countries/countrySelectors'
import { useInput } from '../../../hooks'

const Countries: NextPage = () => {
  const dispatch = useAppDispatch()
  const { countries } = useAppSelector((state) => state.Countries)
  const filteredCountries = useAppSelector(selectCountryFilter)
  const { handleInput, Value } = useInput()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getSearchCountry({ SearchedCountryValue: Value }))
  }, [filteredCountries, Value])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Search Countries</title>
      </Head>

      <div>
        <h2>Search for {countries.length} Countries </h2>
        <label htmlFor="searchCountry">Write below name of country you are looking for:</label>
        <Input
          id={'searchCountry'}
          ariaLabel={'search country'}
          tabIdx={1}
          OnChange={handleInput}
          rest={{
            type: 'search',
            placeholder: 'search country',
          }}
          isSearch={true}
        />

        {Value ? <CountriesData countries={filteredCountries} /> : ''}
      </div>
    </>
  )
}

export default Countries
