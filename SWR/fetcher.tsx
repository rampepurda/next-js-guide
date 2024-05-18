import { request } from 'graphql-request'
import { environment } from '../configuration'

export const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}
export const fetcherGQL = async (query: string): Promise<any> =>
  await request(`${environment.countriesURL}`, query)
