"use client";
import React, { useState } from 'react'
import Chat from './chat';
import Create from './create';
import Player from './player'
import Squad from './types/Squad';

function Home() {
  const [squad, setSquad] = useState<Squad>({
    users: ['marcindubiel']
  });

  if(!squad) {
    return (
      <div className='w-screen h-screen flex flex-wrap items-center align-middle justify-center'>
        <Create setSquad={setSquad} />
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
      <div className='h-screen flex items-center align-middle justify-end'>
        <Chat twitchId={squad.users[0]}/>
      </div>
    </div>
  )
}

export default Home