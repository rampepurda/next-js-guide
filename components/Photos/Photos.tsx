import React from 'react'
import { Photo } from '../Photo'
import { initPhotos } from '../../types'
import { Loader } from '../Loader/Loader'
import { useAppSelector } from '../../store/hooks'

type Props = initPhotos[]

export const Photos = ({ photos }: { photos: Props }) => {
  const { isLoading, error } = useAppSelector((state) => state.Photos)

  return (
    <>
      <>
        {isLoading && <Loader ClassName={'loader'} />}
        {error && <h4 style={{ color: 'red' }}>{error}</h4>}
      </>

      {photos.map((photo, idx) => (
        <Photo {...photo} key={idx} />
      ))}
    </>
  )
}
