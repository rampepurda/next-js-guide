import style from './Code.module.scss'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Navigation } from '../../../../components'
import { navigationGuideLinks, Pages, ROUTE, trackCountry } from '../../../../configuration'
import Head from 'next/head'
import CountriesService from '../../../../services/Countries'
import Link from 'next/link'
import classNames from 'classnames'
import { Country } from '../../../../types'

type InitCountry = Country

export const getServerSideProps = (async (context) => {
  const data = await CountriesService.getCountryDetail(`${context.query.code}`)
  return { props: { country: data } }
}) satisfies GetServerSideProps<{
  country: InitCountry
}>

export default function CountryDetail({
  country,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>
          {Pages.guide.chTwelve.detailTrack.title} | {country.code}
        </title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className={classNames('col-9 has-br', style.Card)}>
          <div>
            <label>Country name:</label>
            <h2>{country.name}</h2>
            <hr />
            <label>Country code:</label>
            <h3>{country.code}</h3>
            <hr />
            <label>Capital:</label>
            <h3>{country.capital}</h3>
            <hr />
            <label>Currency:</label>
            <h3>{country.currency}</h3>
            <hr />
            <label>Phone:</label>
            <h3>{country.phone}</h3>
            <hr />
            <label>Native:</label>
            <h3>{country.native}</h3>
            <hr />

            <button className="btn btn-submit" type="button">
              <Link href={`${ROUTE.COUNTRY_DETAIL}`}>
                {Pages.guide.chTwelve.detailTrack.linkBack}
              </Link>
            </button>

            <button className="btn btn-submit" type="button">
              {' '}
              <Link href={`${ROUTE.PROJECT_COUNTRIES}`}>{Pages.projects.countries.linkBack}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * @param useQuery
 const { data } = useQuery(GET_COUNTRY_DETAIL_QUERY, {
 variables: { code },
 });

 * RECT NEXT Js - Client Side Rendering
 * https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
 * @function getStaticProps - Run only on the Server Side - data are rendered during the build process
 * @function getServerSideProps - Only Run on Client Side - data are rendered when Client ask for data (onCLick, ...)
 */
