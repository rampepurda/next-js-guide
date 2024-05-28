import { request } from 'graphql-request'
import { environment } from '../configuration'

export const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json())
}
export const fetcherQuery = async (query: string): Promise<any> =>
  await request(`${environment.countriesURL}`, query)
