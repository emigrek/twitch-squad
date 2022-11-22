import Chat from './Chat';
import Navbar from './Navbar';
import Squad from "./Squad";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center align-middle justify-between gap-0">
      <div className="w-full h-screen flex flex-wrap justify-between">
        <Squad/>
      </div>
      <div className='w-[350] h-screen flex flex-col items-center align-middle justify-end bg-[#18181b]'>
        <Navbar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home