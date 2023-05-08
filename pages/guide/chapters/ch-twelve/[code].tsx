import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { environment } from "../../../../configuration/environment"
import { Country } from "../../../../components/Country"
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import React, {useEffect} from "react";
import {getCountries} from "../../../../slices";
import { Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { Pages } from "../../../../configuration/common"
import Head from "next/head"
import { useQuery } from "@apollo/client"
import { GET_COUNTRIES_DETAIL_QUERY, GET_COUNTRIES_QUERY } from "../../../../queries"
import Link from "next/link";
import { ROUTE } from "../../../../configuration/routes";
import { CountriesResponse } from "../../../../services/Countries"
import graphQLClient from '../../../../services/Countries'

type Props = {
  code: {
    code: string,
    name: string,
    emoji: string,
  }
}

function CountryId() {
  const router = useRouter()
  const data: any = graphQLClient

  const dispatch = useAppDispatch()
  const { countriesGraphQL } = useAppSelector(state => state.Countries)

  useEffect(() => {
    dispatch(getCountries())
    console.log(`Countries: ${countriesGraphQL[69].code}`)
  }, [countriesGraphQL])

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
          <h3>dda</h3>
          <label>Code:</label>
          <h3>code.name</h3>
        </div>

      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const param = context.query.id
  const res = await fetch(
    `${environment.countriesURL}/${context.query.code}`
  );
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}


export default CountryId;