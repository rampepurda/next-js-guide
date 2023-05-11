import { useRouter } from "next/router"
import { AlertBox } from "../../../../components"

const ChOneSlug: () => void = () => {
  const router = useRouter()
  const { params = []} = router.query
  const pathName = Array.from(params)
  const configuration = {
    pathName: 'Pathname is: guide/chapters/ch-one/test/sub'
  }

  return <>
    {pathName.includes('sub') ? <h2>Welcome in Sub section</h2> : ''}
    {params.length === 1 || params.length === 2 ? <AlertBox className={'isWarning'}>{configuration.pathName}/{params.length}</AlertBox> : ''}
  </>
}

export default ChOneSlug



