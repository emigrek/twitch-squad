import React from 'react'

function Input(props: { onKeyDown: () => void }) {
  return (
    <input 
        onKeyDown={props.onKeyDown} 
        className='outline-none p-5 bg-white/30 rounded-xl focus:bg-white/60 transition-all placeholder:text-black w-full' 
        placeholder="split twitch names with ', '" 
    />
  )
}

export default Input