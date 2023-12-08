import { NextPage } from 'next'
import classNames from 'classnames'
import { InfoBox, Cars, Navigation, Select } from '../../../../components'
import { breakPoints, navigationGuideLinks, Pages } from '../../../../configuration'
import Head from 'next/head'
import { selectXYZ } from '../../../../slices/Common/commonSelectors'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { useSelect, useWindWidth } from '../../../../hooks'
import { CarsOptions } from '../../../../configuration'
import { selectCarFilter } from '../../../../slices/Cars/carSelectors'
import React, { useEffect } from 'react'
import { getFilterCar } from '../../../../slices'
import Image from 'next/image'
import imgCreateSelector from '../../../../public/images/ch-fourteen/createSelector.png'

const ChFourteen: NextPage = () => {
  const totalSum = useAppSelector(selectXYZ)
  const dispatch = useAppDispatch()
  const { cars, selectedCar } = useAppSelector((state) => state.Cars)
  const { handleOption, Value = selectedCar } = useSelect(CarsOptions, '')
  const filteredCars = useAppSelector(selectCarFilter)
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
    dispatch(getFilterCar(Value))
  }, [Value, cars, filteredCars, selectedCar])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-Fourteen - createSelector</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className={classNames('col-9')}>
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
              Less logic is needed to calculate those additional values and keep them in sync with
              the rest of the data
            </li>
            <li>The original state is still there as a reference and isn&apos;t being replaced</li>
          </ul>
          <hr />

          <h4>
            Selectors are primarily used to encapsulate logic for looking up specific values from
            state, logic for actually deriving values, and improving performance by avoiding
            unnecessary recalculations.
          </h4>
          <InfoBox className={'isInfo'}>
            <ul>
              <li>
                <strong>Arrow function, direct lookup</strong>
                <h5>const selectEntities = state =&gt; state.entities</h5>
              </li>
              <li>
                <strong>Function declaration, mapping over an array to derive values</strong>
                <h5>
                  function selectItemIds(state) &#123;
                  <br />
                  &nbsp;return state.items.map(item =&gt; item.id)
                </h5>
                &#123;
              </li>
              <li>
                <strong>Function declaration, encapsulating a deep lookup</strong>
                <h5>
                  function selectSomeSpecificField(state) &#123;
                  <br />
                  &nbsp;return state.some.deeply.nested.field
                  <br />
                  &#125;
                </h5>
              </li>
              <li>
                <strong>Arrow function, deriving values from an array</strong>
                <h5>
                  const selectItemsWhoseNamesStartWith = (items, namePrefix) =&gt;
                  <br />
                  &nbsp;items.filter(item =&gt; item.name.startsWith(namePrefix))
                  <br />
                </h5>
              </li>
            </ul>
          </InfoBox>
          <h4>
            A selector function can have any name you want. However, we recommend prefixing selector
            function names with the word <mark>select</mark> combined with a description of the
            value being selected.
          </h4>
          <hr />

          <h3>Examples:</h3>
          <h4>slice/Cars/carSlice.ts</h4>
          <ul className="hasTypeDisc">
            <li>Defined InitialValues and Action to be in used</li>
          </ul>
          <hr />

          <h4>slice/Cars/carSelector.ts</h4>
          <ul>
            <li className="hasVerticalPadding-2">
              <strong>const selectCars = (state: any) =&gt; state.Cars.cars</strong>|| Imported from
              CarSlice
            </li>
            <li className="hasVerticalPadding-2">
              <strong>const selectFilter = (state: any) =&gt; state.Cars.filterCar</strong>
              || Imported from CarSlice
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
      </div>
    </>
  )
}

export default ChFourteen
