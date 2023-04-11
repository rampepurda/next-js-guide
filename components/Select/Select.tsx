import React, {ChangeEvent} from "react"

type Options = {
  label: string,
  value: string
}
type Props = {
  ClassName: string,
  icon?: string,
  id: string,
  options: Options[],
  OnChange: (ev: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ClassName, icon, id, options, OnChange}: Props) => {
return (
  <select
    id={id}
    className={ClassName}
    onChange={OnChange}
  >
    { options.map(({label, value}, inx: number) => (
      <option
        key={inx}
        value={value}
      >
        {label}
      </option>
    ))}

  </select>
)
}
