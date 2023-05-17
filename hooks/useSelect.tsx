import { ChangeEvent, useCallback, useState } from "react"
import { OptionsInit } from "../types"
import { useRouter } from "next/router"

export const useSelect = (options: OptionsInit[], route: string) => {
  const router = useRouter()
  const [Value, setValue] = useState<string | undefined>()

  const handleOption = useCallback((ev: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = ev.target.value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const isValueAllowed = options.some((option) => option.value === selectedValue)

    setValue(isValueAllowed ? selectedValue : undefined)
    return router.push(`${route}?_selected=${Value}`)
  }, [options, Value])

  return {
    handleOption,
    Value
  }
}