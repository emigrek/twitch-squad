import React from 'react'

function Input(props: { value: string, placeholder: string, onChange: () => void, onKeyDown: () => void }) {
  return (
    <div className='w-full flex items-center p-3 rounded-lg bg-white/50 text-black' >
      <input 
        value={props.value}
        onKeyDown={props.onKeyDown} 
        onChange={props.onChange}
        className="bg-transparent outline-none placeholder:text-black/50"
        placeholder={props.placeholder}
      />
    </div>
    
  )
}

export default Input