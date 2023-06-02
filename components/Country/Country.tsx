import { CountriesQL } from '../../types'
import Link from "next/link"
import { ROUTE } from "../../configuration/routes"

type Props = CountriesQL

export const Country = ({
  code,
  emoji,
  name,
  }: Props) => {
  return (
    <>
      <label>Country:</label>
      <h2>{name}</h2>
      <label>Code:</label>
      <h3>{code}</h3>
      <hr style={{opacity: '40%'}} />

      <h3>
        <Link href={{
          pathname:`${ROUTE.GUIDE_DYN_ROUTE}/[code]`,
          query: {code: code}
        }}
        >
          <a style={{display:'block', textDecoration: 'none'}}>Read more about <span style={{color:'orange'}}>{name}</span></a>
        </Link>
      </h3>
    </>
  )
}
