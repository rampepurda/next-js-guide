import { GET_COUNTRY_DETAIL_QUERY, GET_COUNTRIES_QUERY } from '../queries'
import { Country } from '../types'
import apolloClient from '../apollo/graphql-client'

export type CountriesResponse = {
  countries: Country[]
}
export type CountryResponse = {
  country: Country
}

const graphQLClient = apolloClient

class CountriesService {
  async getCountry(): Promise<Country[]> {
    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_QUERY,
    })
    return data.countries
  }
  async getCountryDetail(code: string): Promise<Country> {
    const { data } = await graphQLClient.query<CountryResponse>({
      query: GET_COUNTRY_DETAIL_QUERY,
      variables: { code },
    })
    return data.country
  }
}

export default new CountriesService()
