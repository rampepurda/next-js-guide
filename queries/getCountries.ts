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
  query Countries($code: String!) {
    countries(code: $code) {
      code
      emoji
      name
    }
  }
`
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`