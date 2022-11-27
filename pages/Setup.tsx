import React, { useState, useEffect } from 'react'
import { RocketLaunchIcon as RocketLaunchIconOutline } from '@heroicons/react/24/outline';
import { RocketLaunchIcon as RocketLaunchIconSolid } from '@heroicons/react/24/solid';

import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import { creatorState } from '../atoms/creator';

import Recent from './Recent';
import SquadPreview from './SquadPreview';
import Input from './Input';
import Button from './Button';

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
    updateHistory(squad);
    setCreator(!creator);
  }

  const handleClickAway = () => {
    if(!squad.length) return;
    updateHistory(squad);
    setCreator(!creator);
  }

  const updateHistory = (squad: string[]) => {
    var history = JSON.parse(localStorage.getItem('squad-history') || '[]');
    var unique = [...history, squad].map(e => e.join(',')).reverse().filter((e, i, a) => a.indexOf(e) === i).reverse().map(e => e.split(',')).reverse();
    localStorage.setItem('squad-history', JSON.stringify(unique));
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
    <div className="w-full z-[1] absolute bg-black/80 backdrop-blur-lg h-screen flex items-center align-middle justify-center">
      <div className='z-[3] flex flex-col space-y-7 bg-background p-6 w-[350px] rounded-xl'>
        <SquadPreview/>
        <div className="flex flex-col space-y-2">
          <Input placeholder="loltyler1" value={input} onChange={handleChange} onKeyDown={handleKeyDown}/>
          <Button onClick={handleSubmit} className={`${squad.length && squad.length != 6 ? 'bg-green-600 transition-all hover:bg-green-500 cursor-pointer shadow-lg shadow-green-600/50' : 'bg-red-900'} text-black transition-colors text-center rounded p-4 font-medium select-none space-x-1 flex flex-row justify-center items-center`}>
            <div>Squad!</div>
            {
              squad.length ? (
                <RocketLaunchIconSolid className="h-5 w-5" />
              ) : (
                <RocketLaunchIconOutline className="h-5 w-5" />
              )
            }
          </Button>
          <Recent/>
        </div>
      </div>
      <div onClick={handleClickAway} className="absolute z-[2] w-full h-full transition-all cursor-pointer"></div>
    </div>
  )
}

export default Create