import React, { useState, useEffect, useRef } from 'react'
import { SquaresPlusIcon } from '@heroicons/react/24/solid';
import { RocketLaunchIcon as RocketLaunchIconOutline } from '@heroicons/react/24/outline';
import { RocketLaunchIcon as RocketLaunchIconSolid } from '@heroicons/react/24/solid';
import { SignalIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { creatorState } from '../atoms/creator';

import UserChip from './UserChip';
import Tips from './Tips';
import { historyState } from '../atoms/history';
import Recent from './Recent';

function Create() {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  const squad = useRecoilValue(squadState);
  const creator = useRecoilValue(creatorState);

  const setSquad = useSetRecoilState(squadState);
  const setChat = useSetRecoilState(chatState);
  const setCreator = useSetRecoilState(creatorState);
  const setHistory = useSetRecoilState(historyState);

  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
  }

  const handleSubmit = () => {
    if(!squad.length) return;
    setInput('');
    setHistory((oldHistory) => [...oldHistory, squad]);
    setCreator(!creator);
  }

  const handleClickAway = () => {
    if(!squad.length) return;
    setHistory((oldHistory) => [...oldHistory, squad]);
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
    if(inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, []);

  useEffect(() => {
    if(squad.length) {
      setChat(squad[0]);
    } else {
      setChat(null);
    }
  }, [squad]);

  return (
    <div className="w-full z-[1] absolute bg-black/90 backdrop-blur-md h-full flex items-center align-middle justify-center">
      <div className='z-[3] flex flex-col space-y-5 bg-[#18181b] p-6 w-[350px] rounded-xl'>
        <div className="text-center py-3 flex flex-col items-center space-y-3">
          <SquaresPlusIcon className="h-32 w-32 text-white" />
          <h1 className="text-2xl text-white">Setup</h1>
          <div className="text-sm text-white/50">Setup squad mode from up to 6 streamers</div>
        </div>
        <div className="pt-2 p-4 bg-black/50 rounded space-y-1">
          <div className='text-white/80 font-medium text-center space-x-2 flex items-center align-middle justify-center'>
            <div>Streamers</div>
            <SignalIcon className="h-5 w-5" />
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
        </div>
        <div className="group flex flex-col rounded-md bg-white/80">
          <input 
            ref={inputRef}
            className={`${squad.length && squad.length != 6 ? 'focus:border-green-500 cursor-pointer' : 'focus:border-red-900'} transition-all bg-transparent border-4 rounded-md border-transparent w-full text-center outline-none py-2 text-lg placeholder:text-black/50`}
            value={input}
            placeholder="loltyler1"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div onClick={handleSubmit} className={`${squad.length && squad.length != 6 ? 'bg-green-500 cursor-pointer' : 'bg-red-900'} transition-colors text-center rounded p-4 font-medium select-none space-x-1 flex flex-row justify-center items-center`}>
          <div>Squad!</div>
          {
            squad.length ? (
              <RocketLaunchIconSolid className="h-5 w-5" />
            ) : (
              <RocketLaunchIconOutline className="h-5 w-5" />
            )
          }
        </div>
        <Recent/>
      </div>
      <div onClick={handleClickAway}  className="absolute z-[2] w-full h-full"></div>
    </div>
  )
}

export default Create