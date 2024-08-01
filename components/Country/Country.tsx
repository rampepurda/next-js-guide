import { Country as CountryT } from '../../types'
import Link from 'next/link'

export const Country = ({
  country,
  route,
  isCountryDetail = false,
}: {
  country: CountryT | undefined
  route?: string
  isCountryDetail?: boolean
}) => {
  return (
    <>
      {isCountryDetail ? (
        <>
          <label>Country name:</label>
          <h2>{country?.name}</h2>
          <hr />
          <label>Country code:</label>
          <h3>{country?.code}</h3>
          <hr />
          <label>Capital:</label>
          <h3>{country?.capital}</h3>
          <hr />
          <label>Currency:</label>
          <h3>{country?.currency}</h3>
          <hr />
          <label>Phone:</label>
          <h3>{country?.phone}</h3>
          <hr />
          <label>Native:</label>
          <h3>{country?.native}</h3>
        </>
      ) : (
        <>
          <label>Country:</label>
          <h2>{country?.name}</h2>
          <button className="btn btn-submit" type="button">
            <Link href={`${route}/${country?.code}`}>Read more about {country?.name}</Link>
          </button>
        </>
      )}
    </>
  )
}
