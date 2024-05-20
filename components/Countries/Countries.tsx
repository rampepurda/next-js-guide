import classes from './Countries.module.scss'
import { Country } from '../Country'
import { Country as country } from '../../types'

export const Countries = ({ countries }: { countries: country[] | undefined }) => {
  /**
   * For Countries I`he decided to use only useQuery(apollo/client)
   * @const error, loader, data - In case redux slice/extraReducers is calling somewhere in the Project
   *   const { error, loader } = useAppSelector((state) => state.Countries)
   */

  return (
    <div className={classes.card}>
      {countries?.map((country, idx: number) => {
        return (
          <section className={classes.track} key={idx}>
            <Country {...country} />
          </section>
        )
      })}
    </div>
  )
}
