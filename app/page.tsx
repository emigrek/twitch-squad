"use client";
import React from 'react'

import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

import { chatState } from "../atoms/chat";
import { squadState } from "../atoms/squad";

import Chat from './Chat';
import Create from './Create';
import Player from './Player';
import Select from './Select';

function Home() {
  const squad = useRecoilValue(squadState);
  const setChat = useSetRecoilState(chatState);
  const options = squad.users.map((twitchId) => ({ value: twitchId, label: twitchId }));

  const handleSquadChange = (e: React.ChangeEvent) => {
    setChat(e.target.value);
  }

  if(!squad.users.length) {
    return (
      <div className='w-screen h-screen flex flex-wrap items-center align-middle justify-center'>
        <Create/>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen flex items-center align-middle justify-between gap-0">
      <div className='w-full h-screen flex flex-wrap justify-between'>
        {
          squad.users.map((twitchId: string) => (
            <Player key={twitchId} twitchId={twitchId} />
          ))
        }
      </div>
      <div className='h-screen flex flex-col items-center align-middle justify-end'>
        <Select label="Chat" className="h-[10%] w-full" options={options} onChange={handleSquadChange}/>
        <Chat className="h-[90%]"/>
      </div>
    </div>
  )
}

export default Home