/**
 * Array.prototype.some()
 * The some() method tests whether at least one element in the array passes the test implemented
 * by the provided function. It returns true if, in the array, it finds an element for which
 * the provided function returns true; otherwise it returns false. It doesn't modify the array.
 */
import { ChangeEvent, useCallback, useState } from 'react'
import { InitOptions } from '../types'
import { useRouter } from 'next/router'

export const useSelect = (options: InitOptions[], route: string) => {
  const router = useRouter()
  const [Value, setValue] = useState<string | undefined>()

  const handleOption = useCallback(
    (ev: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = ev.target.value
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
      const isValueAllowed = options.some((option) => option.value === selectedValue)

      setValue(isValueAllowed ? selectedValue : undefined)
      return router.push(`${route}?_selected=${selectedValue}`)
    },
    [options, Value]
  )

  return {
    handleOption,
    Value,
  }
}
