import React, { useState, useEffect } from 'react'
import { SquaresPlusIcon } from '@heroicons/react/24/solid';
import { RocketLaunchIcon as RocketLaunchIconOutline } from '@heroicons/react/24/outline';
import { RocketLaunchIcon as RocketLaunchIconSolid } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { creatorState } from '../atoms/creator';

import UserChip from './UserChip';
import Tips from './Tips';

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

  const handleClickAway = () => {
    if(!squad.length) return;
    setCreator(!creator);
  }

  const handleChipClick = (twitchId: string) => {
    setSquad((oldSquad) => oldSquad.filter((user) => user !== twitchId));
  }

  const handleKeyDown: React.KeyboardEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter" && input) {
      e.preventDefault();
      if(squad.includes(input) || squad.length >= 6) return;
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
    <div className="w-full z-[1] absolute bg-black/90 backdrop-blur-md h-full flex items-center align-middle justify-center">
      <div className='z-[3] flex flex-col space-y-4 bg-white/10 p-6 w-[350px] rounded-xl'>
        <div className="text-center py-3 flex flex-col items-center">
          <SquaresPlusIcon className="h-32 w-32 text-white" />
          <h1 className="text-2xl text-white">Create</h1>
          <div className="text-sm text-white/50">Setup squad mode from up to 6 streamers</div>
        </div>
        <div className="pb-8 pt-6 px-8 bg-white/5 border-2 border-dashed border-white/20 p-2 rounded">
          <div className="flex flex-wrap flex-row items-center align-middle justify-center w-full gap-1">
            { 
              squad.length ? squad.map((user) => (
                <UserChip key={user} onClick={handleChipClick} twitchId={user}/>
              )) : (
                <Tips/>
              ) 
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
        <div onClick={handleSubmit} className={`${squad.length ? 'bg-green-500 cursor-pointer' : 'bg-red-500/50'} transition-colors text-center rounded p-4 font-medium select-none space-x-1 flex flex-row justify-center items-center`}>
          <div>Squad!</div>
          {
            squad.length ? (
              <RocketLaunchIconSolid className="h-5 w-5" />
            ) : (
              <RocketLaunchIconOutline className="h-5 w-5" />
            )
          }
        </div>
      </div>
      <div onClick={handleClickAway}  className="absolute z-[2] w-full h-full"></div>
    </div>
  )
}

export default Create