import { gql } from "@apollo/client"

export const GET_COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      code
      emoji
      name
    }
  }
`