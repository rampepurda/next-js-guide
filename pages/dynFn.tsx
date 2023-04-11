export function Homer() {
  return (
    <>
      <h2>Dynamic Fn</h2>
    </>
  )
}
import dynamic from "next/dynamic"
import { Suspense } from 'react'

const DynamicHeader = dynamic(() => import('./dynFn'), {
  suspense: true,
})

const Homers = () => {
  return (
    <>
      <h2>Dynamic Fn is here!</h2>
      <p>Im going from Pages</p>
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
      </Suspense>
    </>
  )
}
export default Homers