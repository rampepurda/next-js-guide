import style from './Countries.module.scss'

import { Country } from '../Country'
import { CountriesQL } from "../../types"
import { useAppSelector } from "../../store/hooks"
import { Loader } from "../../components"

export const Countries = ({countries}: {countries: CountriesQL[]}) => {
  const { error, loader } = useAppSelector(state => state.Countries)
  return (
    <div>
      <div className={style.Card}>
        {error}
        {loader ? <Loader /> : ''}

        {countries?.map((country: CountriesQL, idx: number) => {
          return (
            <div
              className={style.Box}
              key={idx}
            >
              <Country {...country} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
