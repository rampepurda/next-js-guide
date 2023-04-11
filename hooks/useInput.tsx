import {ChangeEvent, useCallback, useState} from "react"

export const useInput = () => {
  const [Value, setValue] = useState<string | number | unknown>()

  const handleInput = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = ev.target.value

    setValue(selectedValue)
  }, [Value])

  return {
    handleInput,
    Value
  }
}