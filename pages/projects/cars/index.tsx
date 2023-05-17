import React, { useState, useEffect } from "react"
import { useSelect } from "../../../hooks"
import { NextPage } from "next"
import Head from "next/head"
import { AlertBox, Cars, Navigation, Select } from "../../../components"
import { navigationProjectsLinks } from "../../../configuration/navigation"
import { CarList, CarsOptions} from "../../../configuration/common"
import { CarsInit } from '../../../types'

const CarsPage: NextPage = () => {
  const[selectedCars, setSelectedCars] = useState<CarsInit[]>([...CarList])
  const { handleOption, Value = 'all cars' } = useSelect(CarsOptions, 'cars')
  const[selectValue] = useState<string>('all cars')

  useEffect(() => {
    if(Value === 'all cars') {
      return setSelectedCars(CarList)
    }
    if(Value) {
      const selectedCar = CarList.filter((car: CarsInit) => car.name === Value)
      return setSelectedCars(selectedCar)
    }
  }, [Value, selectValue])
  return (
    <>
      <Head>
        <title>Next JS | Guide | Project-Cars</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className='col-9'>
          <h2>{Value === undefined ? 'Is undefined' : Value}</h2>

          <Select
            id='oldCars'
            ClassName='select'
            options={CarsOptions}
            OnChange={handleOption}
          />
          <AlertBox className={'isInfo'}>
            <h4>Filter Cars by Name: {Value?.toUpperCase()}, found total: {selectedCars.length}</h4>
          </AlertBox>

          <Cars cars={selectedCars} />
        </div>
      </div>
    </>
  )
}

export default CarsPage

