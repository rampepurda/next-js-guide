import { useState } from 'react'

/**
 * @const windowSize Accordingly size will use in @media queries
 * @function getWindWidth must be part of useEffect in Component to provide actual Window Size which will be in touch with @media queries
 */

export const useWindWidth = () => {
  const [windowSize, setWindowSize] = useState<any>(undefined)

  function getWindWidth() {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', function () {
      setWindowSize(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', function () {
        setWindowSize(window.innerWidth)
      })
    }
  }

  return {
    getWindWidth,
    windowSize,
  }
}
