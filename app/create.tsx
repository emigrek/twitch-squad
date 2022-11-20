import React from 'react'

import { useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { SquaresPlusIcon } from '@heroicons/react/24/outline'

import Input from './Input';
import Title from './Title';
import TitleIcon from './TitleIcon';

function Create() {
  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);

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
    setChat(users[0]);
  }

  return (
    <div className="bg-white/10 p-4 rounded-md">
      <div className="flex flex-col items-center mb-5">
        <TitleIcon Icon={SquaresPlusIcon} />
        <Title text="Create squad"/>
      </div>
      <Input onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default Create