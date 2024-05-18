import { request } from 'graphql-request'
import { environment } from '../configuration'
import { Continent } from '../types'

export const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}
export const fetcherGQL = async (query: string): Promise<any> =>
  //const {url, query} = dummy
  await request(`${environment.countriesURL}`, query)
