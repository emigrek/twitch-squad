import React, { useState } from 'react'

import { useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

import Input from './Input';
import Title from './Title';
import TitleIcon from './TitleIcon';

function Create() {
  const [users, setUsers] = useState([]);
  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);

  const handleChange = (e: React.ChangeEvent) => {
    if(!e.target.value) return setUsers([]);
    setUsers(e.target.value.split(','));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedEnter = e.key === 'Enter';
    if(!pressedEnter) return;
    handleSubmit();
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
    <div className="bg-white/10 p-4 rounded-md w-72">
      <div className="flex flex-col items-center my-2">
        <TitleIcon Icon={SquaresPlusIcon} />
        <Title text="Create squad"/>
      </div>
      <div className="text-center text-sm text-white/50 py-2 border-b-[1px] border-white/10">Members</div>
      <div className="flex flex-row items-center align-middle justify-center mt-2 mb-4 space-x-3 w-full">
        { 
          users.length ? users.map((user) => (
            <div className="p-2 text-sm bg-white/30 rounded-lg text-white">{user}</div>
          )) : <div className="text-xs text-white/20 py-3">None</div>
        }
      </div>
      <Input onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default Create