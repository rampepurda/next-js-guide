import {ChangeEvent, useCallback, useState} from "react"
import { Options} from "../types"

export const useSelect = (options: Options[]) => {
  const [Value, setValue] = useState<string | undefined>()

  const handleOption = useCallback((ev: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = ev.target.value
    const isValueAllowed = options.some((option) => option.value === selectedValue)

    setValue(isValueAllowed ? selectedValue : undefined)
  }, [options])

  return {
    handleOption,
    Value
  }
}