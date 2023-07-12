/**
 * Formats date from UTC Datetime string and takes localization of months into the account.
 * @param dateUTC - UTC Datetime string
 * @param months - an object where keys are month names and their translations taken from Lokalise (months)
 * @returns formatted date
 * Data(UTC) read more below
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
 */

export const formatDateFromUTC = (dateUTC: string, months: Record<string, string>) => {
  const getDate = new Date(dateUTC)
  const day = getDate.toLocaleDateString(['en-Us'], { day: '2-digit' })
  const month = getDate.toLocaleDateString(['en-Us'], { month: 'long' })
  const year = getDate.toLocaleDateString(['en-Us'], { year: 'numeric' })

  const myMonth = months[month.toLowerCase()]

  return `${day} ${myMonth} ${year}`
}
