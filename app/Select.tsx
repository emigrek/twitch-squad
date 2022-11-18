import React from 'react'

type Option = {
    value: string,
    label: string
}

function Select(props: { label: string, className: string, options: Option[], onChange: () => void }) {
  return (
    <>
        <label className="text-white text-lg">{props.label}</label>
        <select onChange={props.onChange} className={props.className}>
            {
                props.options.map((option: Option) => (
                    <option value={option.value}>{option.label}</option>
                ))
            }
        </select>
    </>
  )
}

export default Select