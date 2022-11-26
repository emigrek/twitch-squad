import Chat from './Chat';
import Navbar from './Navbar';
import Squad from "./Squad";
import Setup from './Setup';

import { useRecoilValue } from "recoil";
import { creatorState } from "../atoms/creator";


function Home() {
  const creator = useRecoilValue(creatorState);
  
  return (
    <div className="w-full flex flex-col sm:flex-row items-center align-middle justify-between gap-0">
      { creator ? (<Setup/>) : null }
      <div className="w-full h-screen flex flex-wrap justify-between">
        <Squad/>
      </div>
      <div className='h-screen flex flex-col items-center align-middle justify-end bg-background'>
        <Navbar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home