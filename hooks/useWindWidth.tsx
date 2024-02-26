import { useState } from 'react'

/**
 * @const windowSize Accordingly size will use in @media queries
 * @function getWindWidth must be part of useEffect in Component to provide actual Window Size which will be in touch with @media queries
 */

export const useWindHeight = () => {
  const [windowHeight, setWindowHeight] = useState<any>(undefined)

  function getWindWHeight() {
    setWindowHeight(window.innerHeight)
    window.addEventListener('resize', function () {
      setWindowHeight(window.innerHeight)
    })
    return () => {
      window.removeEventListener('resize', function () {
        setWindowHeight(window.innerHeight)
      })
    }
  }

  return {
    getWindWHeight,
    windowHeight,
  }
}

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
