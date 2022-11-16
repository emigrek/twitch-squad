import React from 'react'
import { useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";

function Create() {
  const setSquad = useSetRecoilState(squadState);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const users = e.target.value.split(', ');
    const pressedEnter = e.key === 'Enter';

    if(!pressedEnter) return;

    setSquad((oldSquad) => {
      return {
        ...oldSquad,
        users,
      }
    });
  }

  return (
    <div>
      <input className='outline-none p-4 bg-white/30 rounded focus:bg-white/60 transition-all placeholder:text-black' placeholder="split twitch names with ', '" onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Create