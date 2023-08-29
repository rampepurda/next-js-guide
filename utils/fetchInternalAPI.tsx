/**
 * Formats date from UTC Datetime string and takes localization of months into the account.
 * @param internalApiSrc - get internal API route
 * @param setData - will get appropriate data json
 */

export const fetchInternalAPI = async (internalApiSrc: string, setData: any) => {
  try {
    const res = await fetch(internalApiSrc)
    if (res.ok) {
      const data = await res.json()
      return setData(data)
    }
  } catch (err) {
    return err
  }
}
