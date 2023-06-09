import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Navigation, Countries as CountriesData, Input } from '../../../components'
import Head from 'next/head'
import { navigationProjectsLinks } from '../../../configuration'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getCountries, getSearchCountry } from '../../../slices'
import { selectCountryFilter } from '../../../slices/Countries/countrySelectors'
import { useInput } from '../../../hooks'

const Countries: NextPage = () => {
  const dispatch = useAppDispatch()
  const filteredCountries = useAppSelector(selectCountryFilter)
  const { handleInput, Value } = useInput()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getSearchCountry({ SearchedCountryValue: Value }))
  }, [filteredCountries, Value])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Countries search</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className="col-9">
          <h2>Search for Countries</h2>
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
      </div>
    </>
  )
}

export default Countries
