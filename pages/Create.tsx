import React, { useState, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { creatorState } from '../atoms/creator';

import UserChip from './UserChip';

function Create() {
  const [input, setInput] = useState('');

  const squad = useRecoilValue(squadState);
  const creator = useRecoilValue(creatorState);

  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);
  const setCreator = useSetRecoilState(creatorState);

  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
  }

  const handleSubmit = () => {
    if(!squad.length) return;
    setInput('');
    setCreator(!creator);
  }

  const handleChipClick = (twitchId: string) => {
    setSquad((oldSquad) => oldSquad.filter((user) => user !== twitchId));
  }

  const handleKeyDown: React.KeyboardEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter" && input) {
      e.preventDefault();
      setSquad((oldSquad) => [...oldSquad, input]);
      setInput('');
      return;
    }
  }

  useEffect(() => {
    if(squad.length) {
      setChat(squad[0]);
    } else {
      setChat(null);
    }
  }, [squad]);

  return (
    <div className="w-full absolute z-10 bg-black/80 backdrop-blur-md h-full flex items-center align-middle justify-center">
      <div className='flex flex-col space-y-3 bg-black/50 p-4 rounded-lg'>
        <div className="px-2 py-10">
          <div className="flex flex-row items-center align-middle justify-center space-x-3 w-full">
            { 
              squad.length ? squad.map((user) => (
                <UserChip key={user} onClick={handleChipClick} twitchId={user}/>
              )) : <div className="text-xs text-white/20 py-3">Enter some streamers</div>
            }
          </div>
        </div>
        <div className="flex flex-col rounded-md">
          <div className='w-full flex items-center rounded p-2 bg-white/50 text-black' >
              <input 
                className="bg-transparent w-full text-center outline-none placeholder:text-black/50"
                value={input}
                placeholder="loltyler1"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
          </div>
        </div>
        <div onClick={handleSubmit} className="cursor-pointer text-center rounded px-4 py-2 font-medium bg-white select-none">Go squad!</div>
      </div>
    </div>
  )
}

export default Create