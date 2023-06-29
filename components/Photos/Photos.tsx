import React from 'react'
import { Photo } from '../Photo'
import { initPhotos } from '../../types'
import { Loader } from '../Loader/Loader'
import { useAppSelector } from '../../store/hooks'

type Props = initPhotos[]

export const Photos = ({ photos }: { photos: Props }) => {
  const { isLoading, error } = useAppSelector((state) => state.Photos)

  return (
    <div>
      <div>
        {isLoading ? <Loader ClassName={'loader'} /> : ''}
        <h4>{error === '' ? '' : <span style={{ color: 'red' }}>{error}</span>}</h4>
      </div>

      {photos.map((photo, idx) => (
        <Photo {...photo} key={idx} />
      ))}
    </div>
  )
}
