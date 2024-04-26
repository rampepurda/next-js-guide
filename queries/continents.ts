import { gql } from '@apollo/client'

export const GET_CONTINENTS_QUERY = gql`
  query Continents {
    continents {
      name
      code
    }
  }
`
