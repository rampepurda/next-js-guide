import style from './Countries.module.scss'

import { Country } from '../Country'
import { Country as country } from '../../types'
import { useAppSelector } from '../../store/hooks'
import { Loader } from '../../components'

export const Countries = ({ countries }: { countries: country[] }) => {
  const { error, loader } = useAppSelector((state) => state.Countries)

  return (
    <div className={style.card}>
      <h2>{error}</h2>
      {loader ? <Loader /> : ''}

      {countries?.map((country, idx: number) => {
        return (
          <div className={style.track} key={idx}>
            <Country {...country} />
          </div>
        )
      })}
    </div>
  )
}
