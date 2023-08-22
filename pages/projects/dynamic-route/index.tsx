import { initPhotos } from '../../../types'
import { NextPage } from 'next'
import Head from 'next/head'
import { Navigation, Pagination, Photos } from '../../../components'
import { navigationProjectsLinks } from '../../../configuration'
import { environment } from '../../../configuration'
import { useEffect } from 'react'
import { usePaginate } from '../../../hooks'
import { paginateCurrentPost } from '../../../utils'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getPhotosWithLimit } from '../../../slices'

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = () => {
  const dispatch = useAppDispatch()
  const { photos } = useAppSelector((state) => state.Photos)
  const { currentPage = 1, handlePageChange } = usePaginate('dynamic-route')
  const postPerPage: number = 10
  const itemsTotal: number = Number(photos.length)
  const currentPost = paginateCurrentPost(currentPage, photos, postPerPage)

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getPhotosWithLimit({ url: `${environment.photosURL}`, hasLimit: '111' }))
    }
  }, [postPerPage, photos, currentPost])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Dynamic router</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationProjectsLinks} />
        </div>
        <div className="col-9">
          {!photos ? <h4>...loading, wait</h4> : ''}

          <Pagination
            currentPage={currentPage}
            itemsTotal={itemsTotal}
            postPerPage={postPerPage}
            paginate={handlePageChange}
          />
          <label>Total items: {itemsTotal}</label>
          <Photos photos={currentPost} />
        </div>
      </div>
    </>
  )
}

export default DynamicalRouting
