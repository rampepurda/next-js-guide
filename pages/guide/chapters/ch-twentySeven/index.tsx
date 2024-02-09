import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { InfoBox } from '../../../../components'

const ChTwentySeven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | use client vs use server </title>
      </Head>

      <div>
        <h2>27. &apos;use client&apos; vs &apos;use server&apos;</h2>
        <ul className="hasVerticalPadding-3">
          <li>
            <Link href="" target="_blank">
              see Tutorial here ...not DONE
            </Link>
          </li>
        </ul>
        <hr />

        <div className="cols">
          <div className="col-6">
            <h3>&apos;use client&apos;</h3>
            <InfoBox className="isInfo">
              <p>Use only in case when is absolutely necessary!</p>
            </InfoBox>
            <ul className="hasTypeDisc">
              <li>useState</li>
              <li>useEffect</li>
              <li>Interactivity (onClick...etc)</li>
              <li>&lt;Link&gt;</li>
            </ul>
          </div>
          <div className="col-6">
            <h3>&apos;use server&apos;</h3>
            <InfoBox className="isInfo">
              <p>Inside APP files are &apos;use server&apos; as default</p>
            </InfoBox>
            <ul className="hasTypeDisc">
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>&lt;Link&gt;</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChTwentySeven
