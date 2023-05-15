import { CarsInit } from '../../types'
import style from './Car.module.scss'

type Props = CarsInit

export const Car = ({
  model,
  name,
  location,
  price,
  }: Props) => {
  return (
    <div className={style.Card}>
      <label>Car:</label>
      <h2>{name}</h2>
      <hr />

      <label>Model:</label>
      <h3>{model}</h3>
      <hr />

      <label>Price:</label>
      <h3>{price}</h3>
      <hr />

      <label>City where car is available:</label>
      <h3>{location === undefined ? 'Not defined' : location}</h3>
    </div>
  )
}
