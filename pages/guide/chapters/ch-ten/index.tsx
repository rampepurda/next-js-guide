import React, { useState, useEffect } from 'react'
import { useSelect } from '../../../../hooks'
import Head from 'next/head'
import { InfoBox, Cars, Select } from '../../../../components'
import { CarList, CarsOptions } from '../../../../configuration'
import { CarTypes } from '../../../../types'

export default function ChTen() {
  const [selectedCars, setSelectedCars] = useState<CarTypes[]>([...CarList])
  const { handleOption, Value } = useSelect(CarsOptions, 'ch-ten')

  useEffect(() => {
    if (Value === 'all cars') {
      return setSelectedCars(CarList)
    }
    if (Value) {
      const selectedCar = CarList.filter((car: CarTypes) => car.name === Value)
      return setSelectedCars(selectedCar)
    }
  }, [Value])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-ten</title>
      </Head>

      <div>
        <h2>10. useCallback</h2>

        <h3>Select by:</h3>

        <Select id="oldCars" ClassName="select" options={CarsOptions} OnChange={handleOption} />
        <InfoBox className={'isInfo'}>
          <h4>
            Filter Cars by Name: {Value?.toUpperCase()}, found total: {selectedCars.length}
          </h4>
        </InfoBox>

        <div>
          <Cars cars={selectedCars} />
        </div>
      </div>
    </>
  )
}
