import { GET_COUNTRIES_DETAIL_QUERY, GET_COUNTRIES_QUERY } from '../queries'
import { CountriesQL } from "../types"
import apolloClient from "../apollo/graphql-client"

export type CountriesResponse = {
  countries: CountriesQL
}
const graphQLClient = apolloClient

class CountriesService {
  async getCountry(): Promise<CountriesQL> {
    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_QUERY
    })
    return data.countries
  }
  async getCountryDetail(code: string): Promise<CountriesQL> {
    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_DETAIL_QUERY,
      variables: { code },
    })
    return data.countries
  }
}


export default new CountriesService()
