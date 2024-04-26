import { Continent } from '../../types'
import ContinentsService from '../../services/Continents'
import { useEffect, useState } from 'react'

export const Continents = () => {
  const [continents, setContinents] = useState<Continent[]>([])
  const getContinents = async () => {
    const dataContinents = await ContinentsService.getContinents()
    return setContinents([...dataContinents])
  }
  useEffect(() => {
    getContinents().then()
  }, [])

  return (
    <ul className="hasTypeDecimal hasVerticalPadding-3">
      {continents.map((continent) => {
        return (
          <li id={continent.code} key={continent.code}>
            {continent.name}
          </li>
        )
      })}
    </ul>
  )
}
