import React, { useState, useEffect } from 'react'
import { useSelect } from '../../../hooks'
import Head from 'next/head'
import { Cars, Select } from '../../../components'
import { CarList, CarsOptions } from '../../../configuration'
import { CarTypes } from '../../../types'

export default function ChUseCallback() {
  const [isVisible, setIsVisible] = useState<boolean>(true)
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
    const interval = setInterval(() => {
      setIsVisible(!isVisible)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [Value, isVisible])

  return (
    <>
      <Head>
        <title>Next JS | Guide | useCallback</title>
      </Head>

      <div>
        <h2>useCallback</h2>
        <h3>Select by:</h3>
        <Select id="oldCars" ClassName="select" options={CarsOptions} OnChange={handleOption} />
        <h3>
          Filter Cars by Name: {Value?.toUpperCase()}, found total:{' '}
          <mark>{selectedCars.length}</mark>
        </h3>

        <div>
          <Cars cars={selectedCars} />
        </div>
        <hr />

        <h2>useEffect</h2>
        <ul className="hasTypeDisc hasVerticalPadding-4">
          <li>After page is rendered then reading values and dependencies useEffect includes</li>
          <li>If any dependencies are there - appropriate fn will be called only once</li>
          <li>
            includes clear Fn:
            <h4>
              useEffect(() =&gt; &#123;
              <br /> &nbsp;...effect
              <br /> &nbsp;return () =&gt; &#123; cleanup &#125;
              <br /> &#125;, [input])
            </h4>
          </li>
        </ul>

        <div style={{ height: '1rem' }}>
          {isVisible && <mark className="bg-color-is-orange">Hey, Im new!</mark>}
        </div>
      </div>
    </>
  )
}
