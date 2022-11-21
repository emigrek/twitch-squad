'use client';
import { useRecoilValue } from "recoil";
import { squadState } from "../atoms/squad";

import Chat from './Chat';
import Create from './Create';
import Navbar from './Navbar';
import Player from './Player';

function Home() {
  const squad = useRecoilValue(squadState);

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
        <Navbar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home