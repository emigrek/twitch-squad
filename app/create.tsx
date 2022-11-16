import React from 'react'

function Create({ setSquad }: { setSquad: Function }) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const users = e.target.value.split(', ');
    const pressedEnter = e.key === 'Enter';

    if (pressedEnter) {
      setSquad({ users });
    }
  }

  return (
    <div>
      <input className='outline-none p-4 bg-white/30 rounded focus:bg-white/60 transition-all placeholder:text-black' placeholder="split twitch names with ', '" onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Create