import classes from './Countries.module.scss'
import { Country } from '../Country'
import { Country as country } from '../../types'

export const Countries = ({
  countries,
  route,
}: {
  countries: country[] | undefined
  route?: string
}) => {
  return (
    <div className={classes.card}>
      {countries?.map((country, idx: number) => {
        return (
          <section className={classes.track} key={idx}>
            <Country country={country} route={route} />
          </section>
        )
      })}
    </div>
  )
}
