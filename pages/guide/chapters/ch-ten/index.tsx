import React,{ useState, useCallback } from "react"
import { Select } from "../../../../components/Select"
import { useSelect } from "../../../../hooks"
import { Options } from '../../../../types'
import { NextPage } from "next"
import Head from "next/head"
import { Navigation } from "../../../../components"
import {navigationGuideLinks} from "../../../../configuration/navigation"

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

const ChTen: NextPage = () => {
  const [num] = useState<number>(1)
  const incrNumber = useCallback(() => {
    return [num, num + 1, num + 2]
  }, [num])

  const {handleOption, Value} = useSelect(carsOptions)

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-ten</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
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
      </div>
    </>
  )
}

export default ChTen

