/**
 * @param UUID is shortcut of:  Universally unique identifier, generated content
 */

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
export const GET_COUNTRIES_DETAIL_QUERY = gql`
  query Countries($code: code) {
    countries(code: $code) {
      code
      emoji
      name
    }
  }
`
export const GET_DETAIL_QUERY = gql`
  query GetDog($dogId: ID!) {
  dog(id: $dogId) {
    name
    breed
  }
}
`
