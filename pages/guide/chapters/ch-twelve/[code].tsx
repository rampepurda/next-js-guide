import style from './Code.module.scss'

import { useAppSelector } from "../../../../store/hooks"
import React, { useEffect, useState } from "react"
import { Navigation } from "../../../../components"
import { navigationGuideLinks, Pages } from "../../../../configuration"
import Head from "next/head"
import { GetServerSideProps } from "next"
import CountriesService from '../../../../services/Countries'
import Link from "next/link"
import classNames from "classnames"
import { ROUTE } from "../../../../configuration/routes"
import { Country } from "../../../../types"
/**
  const { data } = useQuery(GET_COUNTRY_DETAIL_QUERY, {
  variables: { code },
});
 */
type InitCountry = Country

function CountryId({ query }: {query: InitCountry}) {
  const { filterCountry } = useAppSelector(state => state.Countries)
  const [track, setTrack] = useState<InitCountry>(filterCountry)
  const getTrack = async () => {
    try {
      const data = await CountriesService.getCountryDetail(`${query.code}`)
      return setTrack(data)
    } catch (err: any) { return err.message }
  }

  useEffect(() => {
    getTrack()
  }, [filterCountry])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twelve-Country</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className={classNames('col-9 has-br', style.Card)}>
          <div>
            <label>Country name:</label>
            <h2>{track.name}</h2>
            <hr />
            <label>Country code:</label>
            <h3>{track.code}</h3>
            <hr />
            <label>Currency:</label>
            <h3>{track.currency}</h3>
            <hr />
            <label>Phone:</label>
            <h3>{track.phone}</h3>
            <hr />
            <label>Native:</label>
            <h3>{track.native}</h3>
            <hr />
            <Link href={`${ROUTE.GUIDE_DYN_ROUTE}`}>
              <button className='btn btn-submit' type='button'>
                {Pages.Guide.chTwelve.detailTrack.linkBack}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await CountriesService.getCountryDetail(`${context.query.code}`)
  return {
    props: {
      query: data
    }
  }
}
export default CountryId