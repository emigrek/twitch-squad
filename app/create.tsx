import React from 'react'

import { useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";

import Input from './Input';

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
      <Input onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default Create