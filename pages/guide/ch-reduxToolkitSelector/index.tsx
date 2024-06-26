import { Cars, Select } from '../../../components'
import { Pages } from '../../../configuration'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useSelect } from '../../../hooks'
import { CarsOptions } from '../../../configuration'
import { selectCarFilter } from '../../../redux/slices/Cars/carSelectors'
import React, { useEffect } from 'react'
import { getFilterCar } from '../../../redux/slices'
import Image from 'next/image'
import imgCreateSelector from '../../../public/images/ch-fourteen/createSelector.png'

export default function ChRTSelector() {
  const dispatch = useAppDispatch()
  const { cars, selectedCar } = useAppSelector((state) => state.Cars)
  const { handleOption, Value = selectedCar } = useSelect(CarsOptions, '')
  const filteredCars = useAppSelector(selectCarFilter)

  useEffect(() => {
    dispatch(getFilterCar({ filteredCar: Value }))
  }, [Value, cars, filteredCars, selectedCar])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-Fourteen - createSelector</title>
      </Head>

      <div>
        <h2>{Pages.guide.chFourteen.headline}</h2>
        <a
          href="https://redux.js.org/usage/deriving-data-selectors#writing-memoized-selectors-with-reselect"
          target="_blank"
          rel="noreferrer"
        >
          createSelector see More
        </a>
        <ul className="hasTypeDecimal">
          <li>The actual state is easier to read</li>
          <li>
            Less logic is needed to calculate those additional values and keep them in sync with the
            rest of the data
          </li>
          <li>The original state is still there as a reference and isn&apos;t being replaced</li>
        </ul>
        <hr />

        <h4>
          Selectors are primarily used to encapsulate logic for looking up specific values from
          state, logic for actually deriving values, and improving performance by avoiding
          unnecessary recalculations.
        </h4>
        <div className="hasOutline">
          <ul>
            <li>
              <h3>Arrow function, direct lookup</h3>
              const selectEntities = state =&gt; state.entities
            </li>
            <li>
              <h3>Function declaration, mapping over an array to derive values</h3>
              function selectItemIds(state) &#123;
              <br />
              &nbsp;return state.items.map(item =&gt; item.id)
              <br />
              &#125;
            </li>
            <li>
              <h3>Function declaration, encapsulating a deep lookup</h3>
              function selectSomeSpecificField(state) &#123;
              <br />
              &nbsp;return state.some.deeply.nested.field
              <br />
              &#125;
            </li>
            <li>
              <h3>Arrow function, deriving values from an array</h3>
              const selectItemsWhoseNamesStartWith = (items, namePrefix) =&gt;
              <br />
              &nbsp;items.filter(item =&gt; item.name.startsWith(namePrefix))
            </li>
          </ul>
        </div>
        <h4>
          A selector function can have any name you want. However, we recommend prefixing selector
          function names with the word <mark>select</mark> combined with a description of the value
          being selected.
        </h4>
        <hr />

        <h3>Examples:</h3>
        <h4>slice/Cars/carSlice.ts</h4>
        <ul className="hasTypeDisc">
          <li>Defined InitialValues and Action to be in used</li>
        </ul>
        <hr />

        <h4>slice/Cars/carSelector.ts</h4>
        <ul className="hasVerticalPadding-2">
          <li>
            <strong>const selectCars</strong> = (state: any) =&gt; state.Cars.cars
          </li>
          <li>
            <strong>const selectFilter</strong> = (state: any) =&gt; state.Cars.filterCar
          </li>
        </ul>
        <Image src={imgCreateSelector} alt="how create selector" aria-hidden={true} />
        <hr />

        <h4>pages/cars/index</h4>
        <ul>
          <li>
            <strong>const dispatch = useAppDispatch()</strong>
          </li>
          <li>
            <strong>
              const &#123; cars, filterCar &#125; = useAppSelector(state =&gt; state.Cars
            </strong>
            )
          </li>
          <li>
            <strong>const filteredCars = useAppSelector(selectCarFilter)</strong>
          </li>
          <li>
            <strong>return ( &lt;Cars cars = &#123;filteredCars&#125; /&gt; )</strong>
          </li>
        </ul>
        <Select id="oldCars" ClassName="select" options={CarsOptions} OnChange={handleOption} />

        <div>
          <mark>
            {Value?.toUpperCase()} | Total found: <strong>{filteredCars.length}</strong>
          </mark>
        </div>
        <Cars cars={filteredCars} />
        <hr />
        <h4>See more: slice/Common/commonSelector.ts</h4>
      </div>
    </>
  )
}
