import { Pages, ROUTE } from '../../../../configuration'
import Head from 'next/head'
import Link from 'next/link'
import { Country } from '../../../../types'
import { Country as CountryFocus, Loader } from '../../../../components/index'
import { useParams } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY_DETAIL_QUERY } from '../../../../graphQLApollo/queries'

export default function CountryDetail() {
  const params = useParams()
  const code = params.code
  const { data, error, loading } = useQuery<{ country: Country | undefined }>(
    GET_COUNTRY_DETAIL_QUERY,
    { variables: { code } }
  )

  return (
    <>
      <Head>
        <title>
          {Pages.guide.chTwelve.detailTrack.title} | {data?.country?.code}
        </title>
      </Head>

      <div>
        {(error && <h3>Ops, something happened</h3>) || (loading && <Loader />)}
        <CountryFocus country={data?.country} isCountryDetail={true} />
        <button className="btn btn-submit" type="button">
          <Link href={`${ROUTE.COUNTRY_DETAIL}`}>{Pages.guide.chTwelve.detailTrack.linkBack}</Link>
        </button>
      </div>
    </>
  )
}
