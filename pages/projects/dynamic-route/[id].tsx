import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { initPhotos } from "../../../types"
import { environment } from "../../../configuration/environment"

function ProjectFileBasedId({ photos }: { photos: initPhotos }) {
  const router = useRouter();

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
  //const param = context.query.id
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