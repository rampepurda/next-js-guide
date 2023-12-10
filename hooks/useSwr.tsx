import useSWR from 'swr'

/**
 * @param url fetch target
 * @param limit should set up limit of total items
 */
const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

export const useSwr = (url: string, limit: number) => {
  const { data, error } = useSWR(`${url}?_limit=${limit}`, fetcher)

  return { error, data }
}