import { ChangeEvent, useCallback, useState } from "react"
import { OptionsInit } from "../types"

export const useSelect = (options: OptionsInit[]) => {
  const [Value, setValue] = useState<string | undefined>()

  const handleOption = useCallback((ev: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = ev.target.value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const isValueAllowed = options.some((option) => option.value === selectedValue)

    setValue(isValueAllowed ? selectedValue : undefined)
  }, [options, Value])

  return {
    handleOption,
    Value
  }
}