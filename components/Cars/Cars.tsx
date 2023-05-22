import { Car } from '../Car'
import { CarsInit } from "../../types"

type Props = {
  cars: CarsInit[]
}

export const Cars = ({cars}: Props) => {
  return (
    <>
      {cars?.map((car, idx: number) => {
        return (
          <Car {...car} key={idx} />
        )
      })
      }
    </>
  )
}
