import React,{ useState, useCallback } from "react"
import { useSelect } from "../../../../hooks"
import { Select } from "../../../Select";
import { Options } from '../../../../types'

const carsOptions: Options[] = [
  {
    value: 'audi',
    label: 'Audi',
},
  {
    value: 'skoda',
    label: 'Skoda',
  }
]

export const ChTen = ({ID}: {ID: number}) => {
  const [num, setNum] = useState<number>(1)
  const incrNumber = useCallback(() => {
    return [num, num + 1, num + 2]
  }, [num])

  const {handleOption, Value} = useSelect(carsOptions)

  return (
    <div style={{display: ID === 10 ? 'block' : 'none'}}>
      <h2>10. useCallback</h2>

      <h4>Filter Cars by Name:</h4>
      <Select
        id='oldCars'
        ClassName='select'
        options={carsOptions}
        OnChange={handleOption}
      />

      { Value === 'audi' ? <h2>Selected: Audi </h2> : null}
      { Value === 'skoda' ? <h2>Selected: Skoda </h2> : null}
    </div>
  )
}

