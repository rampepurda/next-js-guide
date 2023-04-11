import { Cards } from "../../../ui";
import { initPhotos } from "../../../types";
import { GetServerSideProps, NextPage } from "next"

interface initValues {
  id: number
  photos: [initPhotos]
}

export const DynamicRouter: NextPage<initValues> = ({ photos, id}) => {
  return (
    <div style={{display: id === 1 ? 'block' : 'none'}}>
      <h2>File Based</h2>
      { !photos ? <h4>...loading, wait</h4> : ''}

      { photos?.map((photo, index: number) => {
        return (
          <Cards props={photo} key={index}/>
        )
      })}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req} = context
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const photos = await res.json()

  console.log(`Requested Objects are: ${req}`)
  return {
    props: { photos }
  }
}
