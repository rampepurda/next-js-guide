import Head from "next/head"
import { NextPage } from "next"
import {useRouter} from "next/router"
import {useEffect} from "react"
import {AlertBox} from "../../../../components";


//const ChOneSlug: () => (void) = () => {
const ChOneSlug: () => void = () => {
  const router = useRouter()
  const { slug = []} = router.query
  const testRouter = router.pathname

  useEffect(() => {
    console.log(`Param length is: ${slug.length}`)
    console.log(`Param length is: ${testRouter}`)
  }, [slug])

  if(slug.length === 2) return <AlertBox className={'danger'}>you are in: 2</AlertBox>
  else {return<h2>you are in: zero</h2>}
}

export default ChOneSlug

