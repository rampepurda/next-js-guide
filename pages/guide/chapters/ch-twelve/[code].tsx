import { GetServerSideProps } from "next"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import React, {useEffect} from "react";
import { getCountries, getCountryDetail } from "../../../../slices"
import { Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import Head from "next/head"
import CountriesService from '../../../../services/Countries'

type Props = {
  data: {
    code: string,
    emoji?: string,
    name: string
  }
}

function CountryId() {
  const dispatch = useAppDispatch()
  const { countriesGraphQL, countryDetail } = useAppSelector(state => state.Countries)

  useEffect(() => {
    dispatch(getCountries())
    // @ts-ignore
    dispatch(getCountryDetail(`${countryDetail.code}`))
  }, [countriesGraphQL, countryDetail])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twelve-Country</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>
        <div className='col-9 has-br'>
          <label>Country:</label>
          <h3>{countryDetail.code}</h3>
          <label>Code:</label>
          <h3>{countryDetail.name}</h3>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const param = context.query.id
  /*
    const res = await fetch(
    `${environment.countriesURL}/${context.query.code}`
  );
  const data = await res.json()
   */
  const data = await CountriesService.getCountry()

  return {
    props: {
      data
    }
  }
}

export default CountryId