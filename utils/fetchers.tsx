import { request } from 'graphql-request'
import { environment } from '../configuration'

export const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json())
}
export const fetcherQuery = async (query: string): Promise<any> => {
  return await request(`${environment.countriesURL}`, query)
}

export const fetchInternalAPI = async (internalApiSrc: string) => {
  try {
    const res = await fetch(internalApiSrc)
    if (res.ok) {
      return await res.json()
    }
  } catch (err) {
    return err
  }
}
