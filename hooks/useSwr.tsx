import useSWR from 'swr'
import { Country, PhotoType } from '../types'
import { GET_COUNTRIES_QUERY } from '../queries'
import apolloClient from '../apollo/graphql-client'
import { request } from 'graphql-request'

/**
 * @param url fetch target
 */
export type CountriesResponse = {
  countries: Country[]
}
const graphQLClient = apolloClient

const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

export const useSwr = (url: string, limit: number) => {
  const { data, error } = useSWR(`${url}?_limit=${limit}`, fetcher)
  return { error, data }
}

const fetcherGQL = async (query: any) => await request('https://countries.trevorblades.com', query)
export const useSwrGQL = () => {
  const { data, error } = useSWR<undefined | any | unknown>(GET_COUNTRIES_QUERY, fetcherGQL)
  return { data, error }
}
