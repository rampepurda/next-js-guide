import { NextPage } from "next"
import classNames from "classnames"
import {AlertBox, Navigation} from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import Head from "next/head"
import { selectXYZ } from "../../../../slices/Common/commonSelectors"
import { useAppSelector } from "../../../../store/hooks"

const ChFourteen: NextPage = () => {
  const { x, y , txt } = useAppSelector(state => state.Common)
  const totalSum: any = useAppSelector(selectXYZ)
  //const filterPhoto: any = useAppSelector(selectedPhoto)

  return <>
    <Head>
      <title>Next JS | Guide | Ch-Fourteen - createSelector</title>
    </Head>

    <div className='cols'>
      <div className={classNames( 'col-3 has-br')}>
        <Navigation links={navigationGuideLinks}/>
      </div>

      <div className={classNames( 'col-9')}>
        <h2>14. createSelector with Toolkit</h2>
        <a
          href='https://redux.js.org/usage/deriving-data-selectors#writing-memoized-selectors-with-reselect'
          target='_blank'
        >
          createSelector see More
        </a>
        <ul className='hasTypeDecimal'>
          <li>The actual state is easier to read</li>
          <li>Less logic is needed to calculate those additional values and keep them in sync with the rest of the data</li>
          <li>The original state is still there as a reference and isn't being replaced</li>
        </ul>
        <hr />

        <h4>Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.</h4>
        <AlertBox className={'isInfo'}>
          <ul>
            <li>
              // Arrow function, direct lookup
              <h5>const selectEntities = state =&gt; state.entities</h5>
            </li>
            <li>
              // Function declaration, mapping over an array to derive values
              <h5>function selectItemIds(state) &#123;<br />
              &nbsp;return state.items.map(item =&gt; item.id)</h5>
              &#123;
            </li>
            <li>
              // Function declaration, encapsulating a deep lookup
              <h5>function selectSomeSpecificField(state) &#123;<br />
                &nbsp;return state.some.deeply.nested.field<br />
              &#125;
              </h5>
            </li>
            <li>
              // Arrow function, deriving values from an array
              <h5>const selectItemsWhoseNamesStartWith = (items, namePrefix) =&gt;<br />
                &nbsp;items.filter(item =&lt; item.name.startsWith(namePrefix))<br />
              </h5>
            </li>
          </ul>
        </AlertBox>

        <h2>{totalSum}</h2>
        <h2>{[x, txt]}</h2>
      </div>
    </div>
  </>
}

export default ChFourteen