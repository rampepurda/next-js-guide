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
    <a
      href={`${ROUTE.GUIDE_DYN_ROUTE}/${name}`}
      style={{display:'block', textDecoration: 'none'}}
    >
      <label>Country:</label>
      <h2>{name}</h2>
      <label>Code:</label>
      <h3>{code}</h3>
    </a>
  )
}
