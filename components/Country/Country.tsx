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
        <Link
          href={{
            pathname: `${ROUTE.GUIDE_DYN_ROUTE}/[code]`,
            query: { code: code },
          }}
        >
          <button className="btn btn-submit" type="button">
            Read more about {name}
          </button>
        </Link>
      </h3>
    </>
  )
}
