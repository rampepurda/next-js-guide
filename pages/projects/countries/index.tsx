import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Countries as CountriesData, Input } from '../../../components'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { getCountries, getSearchCountry } from '../../../redux/slices'
import { selectCountryFilter } from '../../../redux/slices/Countries/countrySelectors'
import { useInput } from '../../../hooks'
import { useQuery } from '@apollo/client'
import { GET_CONTINENTS_QUERY } from '../../../graphQLApollo/queries/continents'
import { Continent } from '../../../types'

const Countries: NextPage = () => {
  const dispatch = useAppDispatch()
  const { countries } = useAppSelector((state) => state.Countries)
  const filteredCountries = useAppSelector(selectCountryFilter)
  const { handleInput, Value } = useInput()
  const continents = useQuery<{ continents: Continent[] }>(GET_CONTINENTS_QUERY)

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getSearchCountry({ SearchedCountryValue: Value }))
  }, [filteredCountries, Value])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Search Countries</title>
      </Head>
      <h2>Search for {countries.length} Countries from all Continents:</h2>
      <form className="width-is-5" name="searchCountry">
        {continents.error && <h3>Ops, something occurs</h3>}
        {continents.loading && <h3>...loading, wait a moment</h3>}
        {continents.data?.continents.map((continent) => {
          return <span key={continent.name}>{continent.name} | </span>
        })}
        <label htmlFor="searchCountry">Write below name of country you are looking for:</label>
        <Input
          id={'searchCountry'}
          ariaLabel={'search country'}
          tabIdx={1}
          onChange={handleInput}
          rest={{
            type: 'search',
            name: 'continent',
            placeholder: 'search country',
          }}
        />
      </form>
      {Value ? <CountriesData countries={filteredCountries} route={'countries'} /> : ''}
    </>
  )
}

export default Countries
