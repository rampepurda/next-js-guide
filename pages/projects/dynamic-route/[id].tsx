import { GetServerSideProps } from "next"
import { initPhotos } from "../../../types"
import { environment } from "../../../configuration/environment"
import Image from "next/image";

interface Props {
  photo: initPhotos
}

function ProjectFileBasedId({ photo }: Props ) {
  return (
    <div style={{padding: '1rem'}}>
      <h2>{photo.title}</h2>
      <Image
        src={`${photo.url}`}
        alt={`${photo.title}`}
        height={400}
        width={400}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${environment.photosURL}/${context.query.id}`
  );
  const photo = await res.json()

  return {
    props: {
      photo
    }
  }
}

export default ProjectFileBasedId