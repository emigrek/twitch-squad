import React from 'react'

type Option = {
  value: string,
  label: string
}

function Select(props: { options: Option[], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <select onChange={props.onChange} className="font-medium cursor-pointer text-center outline-none text-white bg-transparent focus:bg-black rounded-md">
      {
        props.options?.map((option: Option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))
      }
    </select>
  )
}

export default Select