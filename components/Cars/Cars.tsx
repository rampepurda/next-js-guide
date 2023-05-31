import { Car } from '../Car'
import { CarTypes } from "../../types"

type Props = {
  cars: CarTypes[]
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
