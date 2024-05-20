import { Country as Countries } from '../../types'
import Link from 'next/link'
import { ROUTE } from '../../configuration'

type Props = Countries

export const Country = ({
  code,
  name,
  native,
  phone,
  currency,
  emoji,
  emojiU,
  capital,
  isCountryDetail = false,
}: Props) => {
  return (
    <>
      {isCountryDetail ? (
        <>
          <label>Country name:</label>
          <h2>{name}</h2>
          <hr />
          <label>Country code:</label>
          <h3>{code}</h3>
          <hr />
          <label>Capital:</label>
          <h3>{capital}</h3>
          <hr />
          <label>Currency:</label>
          <h3>{currency}</h3>
          <hr />
          <label>Phone:</label>
          <h3>{phone}</h3>
          <hr />
          <label>Native:</label>
          <h3>{native}</h3>
        </>
      ) : (
        <>
          <label>Country:</label>
          <h2>{name}</h2>
          <button className="btn btn-submit" type="button">
            <Link href={`${ROUTE.COUNTRY_DETAIL}/${code}`}>Read more about {name}</Link>
          </button>
        </>
      )}
    </>
  )
}
