import { useMemo, useState } from 'react'

/**
 * @const windowSize Accordingly size will use in @media queries
 * @function getWindWidth must be part of useEffect in Component to provide actual Window Size which will be in touch with @media queries
 */

export const useWindWidth = () => {
  const sm: number = 576
  const md: number = 900
  const lg: number = 1224
  const xl: number = 1824
  const [windowSize, setWindowSize] = useState<any>(undefined)
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth])
  }
  const getWindWidth = () => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    setWindowSize(window.innerWidth)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }

  return {
    getWindWidth,
    windowSize,
    sm,
    md,
    lg,
    xl,
  }
}
