import React from 'react'
import { Photo } from '../Photo'
import { PhotoType } from '../../types'

type Props = PhotoType[]

export const Photos = ({ photos }: { photos: Props | undefined }) => {
  return (
    <>
      {photos?.map((photo, idx) => (
        <Photo {...photo} key={idx} />
      ))}
    </>
  )
}
