import { gql } from '@apollo/client'

export const GET_CONTINENTS_QUERY = gql`
  query Continents {
    continents {
      name
      code
    }
  }
`
export const GET_CONTINENT_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        capital
      }
    }
  }
`
