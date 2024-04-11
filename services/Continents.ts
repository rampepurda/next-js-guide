import { Continent } from '../types'
import apolloClient from '../apollo/graphql-client'
import { GET_CONTINENTS_QUERY } from '../queries/continents'

export type ContinentsResponse = {
  continents: Continent[]
}

const graphQLClient = apolloClient

class ContinentsService {
  async getContinents(): Promise<Continent[]> {
    const { data } = await graphQLClient.query<ContinentsResponse>({
      query: GET_CONTINENTS_QUERY,
    })
    return data.continents
  }
}

export default new ContinentsService()
