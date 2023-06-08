import React, {useState, useEffect} from "react"
import { useSelect } from "../../../../hooks"
import { NextPage } from "next"
import Head from "next/head"
import { InfoBox, Cars, Navigation, Select } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration"
import { CarList, CarsOptions} from "../../../../configuration"
import { CarTypes } from '../../../../types'

const ChTen: NextPage = () => {
  const[selectedCars, setSelectedCars] = useState<CarTypes[]>([...CarList])
  const { handleOption, Value } = useSelect(CarsOptions, 'ch-ten')

  useEffect(() => {
    if(Value === 'all cars') {
      return setSelectedCars(CarList)
    }
    if(Value) {
      const selectedCar = CarList.filter((car: CarTypes) => car.name === Value)
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
          <InfoBox className={'isInfo'}>
            <h4>Filter Cars by Name: {Value?.toUpperCase()}, found total: {selectedCars.length}</h4>
          </InfoBox>

          <div>
            <Cars cars={selectedCars} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTen

