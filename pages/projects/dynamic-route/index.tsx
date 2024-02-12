import { PhotoType } from '../../../types'
import { NextPage } from 'next'
import Head from 'next/head'
import { Navigation, Pagination, Photos } from '../../../components'
import { navigationProjectsLinks } from '../../../configuration'
import { useEffect } from 'react'
import { usePaginate } from '../../../hooks'
import { paginateCurrentPost } from '../../../utils'
import { useAppSelector } from '../../../store'

interface initValues {
  photos: PhotoType[]
}

export const DynamicalRouting: NextPage<initValues> = () => {
  const { photos } = useAppSelector((state) => state.Photos)
  const { currentPage = 1, handlePageChange } = usePaginate('dynamic-route')
  const postPerPage: number = 10
  const itemsTotal: number = Number(photos.length)
  const currentPost = paginateCurrentPost(currentPage, photos, postPerPage)

  useEffect(() => {}, [postPerPage, photos, currentPost])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Dynamic router</title>
      </Head>

      <div>
        {!photos ? <h4>...loading, wait</h4> : ''}

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
