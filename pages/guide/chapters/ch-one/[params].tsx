import { useRouter } from 'next/router'
import { InfoBox } from '../../../../components'
import Link from 'next/link'
import { usePathname, useSearchParams, useServerInsertedHTML } from 'next/navigation'

const ChOneSlug: () => void = () => {
  const path = usePathname()
  const router = useRouter()
  const queries = useSearchParams()
  const { params = [] } = router.query
  const cover = {
    padding: '1rem',
  }
  const h4 = {
    margin: '.2rem 0 1rem 0',
    color: '#e79706',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  }

  return (
    <div style={cover}>
      <label>Param is:</label>
      <h4 style={h4}>{params}</h4>
      <label>PathName is:</label>
      <h4 style={h4}>{path}</h4>
      <label>If has search param queries:</label>
      <h4 style={h4}>
        {queries.get('chanel') === 'netflix' && `Query name is: ${queries.get('chanel')}`}
      </h4>
      <hr />
      <button className="btn btn-primary" type="button">
        <Link href="/guide/chapters/ch-one">Go back</Link>
      </button>
    </div>
  )
}

export default ChOneSlug
