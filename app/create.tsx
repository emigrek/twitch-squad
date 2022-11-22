'use client';
import React, { useState, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import UserChip from './UserChip';

function Create() {
  const [input, setInput] = useState('');
  const squad = useRecoilValue(squadState);

  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);

  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
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
    <div className="flex flex-col">
      <div className="px-2 py-5">
        <div className="flex flex-row items-center align-middle justify-center space-x-3 w-full">
          { 
            squad.length ? squad.map((user) => (
              <UserChip key={user} onClick={handleChipClick} twitchId={user}/>
            )) : <div className="text-xs text-white/20 py-3">Enter some streamers</div>
          }
        </div>
      </div>
      <div className="flex flex-row rounded-md">
        <div className='w-full flex items-center p-3 rounded-lg bg-white/50 text-black' >
          <input 
            className="bg-transparent outline-none placeholder:text-black/50"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
      </div>
      </div>
    </div>
  )
}

export default Create