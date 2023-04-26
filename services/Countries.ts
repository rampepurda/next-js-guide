import { GET_COUNTRIES_QUERY } from '../queries'
import { CountriesQL } from "../types"
import apolloClient from "../apollo/graphql-client"

export type CountriesResponse = {
  countries: CountriesQL
}

class CountriesService {
  async getCountry(): Promise<CountriesQL> {
    const graphQLClient = apolloClient

    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_QUERY,
      //variables: { id },
    })

    return data.countries
  }
}


export default new CountriesService()
