import { request } from 'graphql-request'
import { environment } from '../configuration'

export const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json())
}
export const fetcherQuery = async (query: string): Promise<any> => {
  return await request(`${environment.countriesURL}`, query)
}
export async function Post(url: string, { arg }: { arg: Record<string, any> }) {
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json())
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
