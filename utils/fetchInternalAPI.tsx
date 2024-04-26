/**
 * Formats date from UTC Datetime string and takes localization of months into the account.
 * @param internalApiSrc - get internal API route
 */

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
