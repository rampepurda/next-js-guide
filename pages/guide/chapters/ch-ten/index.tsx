import React, {useState, useCallback, useEffect} from "react"
import { useSelect } from "../../../../hooks"
import { NextPage } from "next"
import Head from "next/head"
import { AlertBox, Cars, Navigation, Select } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { CarList, CarsOptions} from "../../../../configuration/common"
import { CarsInit } from '../../../../types'

const ChTen: NextPage = () => {
  const[selectedCars, setSelectedCars] = useState<CarsInit[]>([...CarList])
  const { handleOption, Value } = useSelect(CarsOptions)

  useEffect(() => {
    if(Value === 'all cars') {
      return setSelectedCars(CarList)
    }
    if(Value) {
      const selectedCar = CarList.filter((car: CarsInit) => car.name === Value)
      return setSelectedCars(selectedCar)
    }
}, [Value])

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

          <h3>Select by:</h3>

          <Select
            id='oldCars'
            ClassName='select'
            options={CarsOptions}
            OnChange={handleOption}
          />
          <AlertBox className={'isInfo'}>
            <h4>Filter Cars by Name: {Value?.toUpperCase()}, found total: {selectedCars.length}</h4>
          </AlertBox>

          <div>
            <Cars cars={selectedCars} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTen

