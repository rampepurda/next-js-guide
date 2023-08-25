import { initPhotos } from '../../../types'
import { NextPage } from 'next'
import Head from 'next/head'
import { Accordion, Navigation, Pagination, Photos } from '../../../components'
import { navigationProjectsLinks, Projects as project } from '../../../configuration'
import { environment } from '../../../configuration'
import { useEffect } from 'react'
import { usePaginate } from '../../../hooks'
import { paginateCurrentPost } from '../../../utils'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getPhotosWithLimit } from '../../../slices'
import { useWindWidth } from '../../../hooks/useWindWidth'
import useTranslation from 'next-translate/useTranslation'

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = () => {
  const { t } = useTranslation('projects')
  const dispatch = useAppDispatch()
  const { photos } = useAppSelector((state) => state.Photos)
  const { currentPage = 1, handlePageChange } = usePaginate('dynamic-route')
  const postPerPage: number = 10
  const itemsTotal: number = Number(photos.length)
  const currentPost = paginateCurrentPost(currentPage, photos, postPerPage)
  const { windowSize, isMediumDevice, getWindWidth } = useWindWidth()
  const accordionTitle = project.accordion.title

  useEffect(() => {
    getWindWidth()
    if (photos.length === 0) {
      dispatch(getPhotosWithLimit({ url: `${environment.photosURL}`, hasLimit: '233' }))
    }
  }, [postPerPage, photos, currentPost])

  return (
    <>
      <Head>
        <title>Next JS | Projects | Dynamic router</title>
      </Head>

      <div className="cols">
        <Accordion ClassName={'isLargeDevice'} titles={accordionTitle}>
          <Navigation links={navigationProjectsLinks} />
        </Accordion>
        {windowSize > isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationProjectsLinks} />
          </div>
        )}

        <div className="col-9 col-m-12">
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
      </div>
    </>
  )
}

export default DynamicalRouting
