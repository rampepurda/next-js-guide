import { useRouter } from "next/router"
import { AlertBox } from "../../../../components"

const ChOneSlug: () => void = () => {
  const router = useRouter()
  const { params = []} = router.query
  const configuration = {
    pathName: 'Pathname is: guide/chapters/ch-one/test/sub'
  }

  return <>
    {params.length === 1 || params.length === 2 ? <AlertBox className={'isWarning'}>{configuration.pathName}/{params.length}</AlertBox> : ''}
  </>
}

export default ChOneSlug



