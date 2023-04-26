import { CountriesQL } from '../../types'
import Image from "next/image"

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
    </>
  )
}
