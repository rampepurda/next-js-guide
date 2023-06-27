import { ChangeEvent, useCallback, useState } from "react"

export const useInput = () => {
  const [Value, setValue] = useState<string | number | unknown>()

  const handleInput = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    return setValue(ev.target.value.toLowerCase())
  }, [Value])

  return {
    handleInput,
    Value
  }
}