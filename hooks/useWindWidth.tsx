import { useCallback, useEffect, useMemo, useState } from 'react'

/**
 * @const windowSize Accordingly size will use in @media queries
 * @function getWindWidth must be part of useEffect in Component to provide actual Window Size which will be in touch with @media queries
 * @function useEffect | getWindWidth must be placed here
 */

export const useWindWidth = () => {
  const isSmallDevice: number = 576
  const isMediumDevice: number = 900
  const isLargeDevice: number = 1224
  const isExtraLargeDevice: number = 1824
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
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  }
}
