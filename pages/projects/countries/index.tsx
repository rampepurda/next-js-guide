import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Countries as CountriesData, Input } from '../../../components'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { getSearchCountry } from '../../../redux/slices'
import { selectCountryFilter } from '../../../redux/slices/Countries/countrySelectors'
import { useInput } from '../../../hooks'
import { Continent } from '../../../types'
import ContinentsService from '../../../services/Continents'

const Countries: NextPage = () => {
  const dispatch = useAppDispatch()
  const { countries } = useAppSelector((state) => state.Countries)
  const filteredCountries = useAppSelector(selectCountryFilter)
  const { handleInput, Value } = useInput()
  const [continents, setContinents] = useState<Continent[]>([])
  const getContinents = async () => {
    const data: Continent[] = await ContinentsService.getContinents()
    setContinents(data)
  }
  useEffect(() => {
    dispatch(getSearchCountry({ SearchedCountryValue: Value }))
    getContinents().then()
  }, [filteredCountries, Value])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Search Countries</title>
      </Head>

      <div>
        <h2>Search for {countries.length} Countries</h2> from all Continents:{' '}
        {continents.map((continent) => {
          return <span key={continent.name}>{continent.name} | </span>
        })}
        <label htmlFor="searchCountry">Write below name of country you are looking for:</label>
        <Input
          id={'searchCountry'}
          ariaLabel={'search country'}
          tabIdx={1}
          OnChange={handleInput}
          rest={{
            type: 'search',
            name: 'continent',
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
