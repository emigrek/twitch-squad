import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import Select from './Select';
import NavbarItem from './NavbarItem';
import { creatorState } from '../atoms/creator';

function Navbar() {
    const squad = useRecoilValue(squadState);
    const chat = useRecoilValue(chatState);
    const creator = useRecoilValue(creatorState);

    const setChat = useSetRecoilState(chatState);
    const setCreator = useSetRecoilState(creatorState);

    const options = squad.map((twitchId) => ({ value: twitchId, label: twitchId }));

    const handleSquadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setChat(e.target.value);
    }

    return (
        <div className="h-[6%] bg-background w-full my-4 xl:my-0 px-3 flex flex-row items-center align-middle justify-between text-white">
            <NavbarItem onClick={() => setCreator(!creator) }>
                <SquaresPlusIcon className="h-5 w-5" />
                <div className='font-medium'>Setup</div>
            </NavbarItem>
            { chat ? (
                <NavbarItem outlined>
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                    <Select options={options} onChange={handleSquadChange}/>
                </NavbarItem>
            ) : null }
        </div>
    )
}

export default Navbar