import useSWR from 'swr'
import { request } from 'graphql-request'
import { Continent } from '../types'
import { environment } from '../configuration'

/**
 * @param url fetch target
 */

export type ContinentsResponse = {
  continents: Continent[]
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

export const useSwr = (url: string, limit: number) => {
  const { data, error } = useSWR(`${url}?_limit=${limit}`, fetcher)
  return { error, data }
}

const fetcherGQL = async (query: string): Promise<ContinentsResponse> =>
  await request(`${environment.countriesURL}`, query)

export const useSwrGQL = (query: string) => {
  const { data, error, isLoading } = useSWR<ContinentsResponse>(query, fetcherGQL)
  return { data, error, isLoading }
}
