import { Photo } from '../Photo'
import { PhotoType } from '../../types'

type Props = PhotoType[]

export const Photos = ({ photos }: { photos: Props | undefined }) => {
  const styles = {
    cover: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 45%)',
      alignContent: 'center',
      justifyContent: 'left',
      gap: '1rem',
      maxWidth: '100%',
      margin: '1rem 0',
    },
  }

  return (
    <div style={styles.cover}>
      {photos?.map((photo, idx) => (
        <Photo {...photo} key={idx} />
      ))}
    </div>
  )
}
