import { PhotoType } from '../../../types'
import Head from 'next/head'
import { Pagination, Photos, Loader } from '../../../components'
import { usePaginate } from '../../../hooks'
import { paginateCurrentPost } from '../../../utils'
import useSWR from 'swr'
import { environment } from '../../../configuration'
import { fetcher } from '../../../SWR/fetcher'

export const DynamicalRouting = () => {
  const { data, error, isLoading } = useSWR<PhotoType[] | undefined>(
    `${environment.photosURL}/?_limit=201`,
    fetcher
  )
  const { currentPage = 1, handlePageChange } = usePaginate('dynamic-route')
  const postPerPage: number = 10
  const itemsTotal: number = Number(data?.length)
  const currentPost: PhotoType[] = paginateCurrentPost(currentPage, data, postPerPage)

  return (
    <>
      <Head>
        <title>Next JS | Projects | Dynamic router</title>
      </Head>

      <div>
        <h2>Photos</h2>
        {isLoading && <Loader />}
        {error && <h2>Ops, something happened</h2>}

        <Pagination
          currentPage={currentPage}
          itemsTotal={itemsTotal}
          postPerPage={postPerPage}
          paginate={handlePageChange}
        />
        <h4>
          Items total: <mark>{itemsTotal}</mark>
        </h4>

        <Photos photos={currentPost} />
      </div>
    </>
  )
}

export default DynamicalRouting
