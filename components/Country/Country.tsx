import { Country as Countries } from '../../types'
import Link from 'next/link'
import { ROUTE } from '../../configuration'

type Props = Countries

export const Country = ({ code, name, native, phone, currency, emoji, emojiU }: Props) => {
  return (
    <>
      <label>Country:</label>
      <h2>{name}</h2>

      <h3>
        <button className="btn btn-submit" type="button">
          <Link
            href={{
              pathname: `${ROUTE.COUNTRY_DETAIL}/[code]`,
              query: { code: code },
            }}
          >
            Read more about {name}
          </Link>
        </button>
      </h3>
    </>
  )
}
