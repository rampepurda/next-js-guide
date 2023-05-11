import { GetServerSideProps } from "next"
import { initPhotos } from "../../../types"
import { environment } from "../../../configuration/environment"

interface Props {
  photos: initPhotos
}

function ProjectFileBasedId({ photos }: Props ) {
  return (
    <div>
      <h2>{photos.title}</h2>
      <img
        src={`${photos.url}`}
        alt={`${photos.title}`}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${environment.photosURL}/${context.query.id}`
  );
  const photos = await res.json()

  return {
    props: {
      photos
    }
  }
}

export default ProjectFileBasedId;