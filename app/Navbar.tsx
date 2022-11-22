import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import Select from './Select';
import NavbarItem from './NavbarItem';
import Create from './Create';

function Navbar() {
    const squad = useRecoilValue(squadState);
    const chat = useRecoilValue(chatState);
    const setChat = useSetRecoilState(chatState);

    const options = squad.map((twitchId) => ({ value: twitchId, label: twitchId }));

    const handleSquadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setChat(e.target.value);
    }

    return (
        <div className="h-[20%] bg-[#18181b] w-full flex flex-col items-center align-middle justify-between text-white px-4">
            <Create/>
            { chat ? (
                <NavbarItem>
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white" />
                    <Select options={options} onChange={handleSquadChange}/>
                </NavbarItem>
            ) : null }
        </div>
    )
}

export default Navbar