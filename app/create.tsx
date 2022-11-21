'use client';
import React, { useState } from 'react'
import { useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

import Input from './Input';
import Title from './Title';
import TitleIcon from './TitleIcon';
import UserChip from './UserChip';

function Create() {
  const [users, setUsers] = useState([] as string[]);
  const [input, setInput] = useState('');
  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
  }

  const handleChipClick = (twitchId: string) => {
    setUsers(users.filter((user) => user !== twitchId));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter" && input) {
      e.preventDefault();
      setUsers([...users, input]);
      setInput('');
      return;
    }
  }

  const handleSubmit = () => {
    setSquad((oldSquad) => {
      return {
        ...oldSquad,
        users,
      }
    });
    setChat(users[0]);
  }

  return (
    <div className="bg-white/10 p-8 flex flex-col space-y-5 rounded-md w-72">
      <div className="flex flex-col items-center my-2">
        <TitleIcon Icon={SquaresPlusIcon} />
        <Title text="New Squad"/>
      </div>
      <div>
        <div className="text-center text-sm text-white/50 py-2 border-b-[1px] border-white/10">Members</div>
        <div className="flex flex-row items-center align-middle justify-center mt-2 mb-4 space-x-3 w-full">
          { 
            users.length ? users.map((user) => (
              <UserChip key={user} onClick={handleChipClick} twitchId={user}/>
            )) : <div className="text-xs text-white/20 py-3">None</div>
          }
        </div>
      </div>
      <Input value={input} placeholder="loltyler1" onChange={handleChange} onKeyDown={handleKeyDown}/>
      <div onClick={() => handleSubmit()} className="text-center text-black font-medium cursor-pointer w-full bg-white rounded-lg p-4">Go squad!</div>
    </div>
  )
}

export default Create