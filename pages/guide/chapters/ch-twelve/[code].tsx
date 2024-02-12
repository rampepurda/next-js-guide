import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Pages, ROUTE } from '../../../../configuration'
import Head from 'next/head'
import CountriesService from '../../../../services/Countries'
import Link from 'next/link'
import { Country } from '../../../../types'

/**
 * @param useQuery
 const { data } = useQuery(GET_COUNTRY_DETAIL_QUERY, {
 variables: { code },
 });

 *  getStaticProps - Run only on the Server Side - data are rendered during the build process
 *  getServerSideProps - Only Run on Client Side - data are rendered when Client ask for data (onCLick, ...)
 */

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
          <Link href={`${ROUTE.COUNTRY_DETAIL}`}>{Pages.guide.chTwelve.detailTrack.linkBack}</Link>
        </button>

        <button className="btn btn-submit" type="button">
          {' '}
          <Link href={`${ROUTE.PROJECT_COUNTRIES}`}>{Pages.projects.countries.linkBack}</Link>
        </button>
      </div>
    </>
  )
}
