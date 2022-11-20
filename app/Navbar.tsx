import React from 'react'
import MiniIcon from './MiniIcon'

import { SquaresPlusIcon } from '@heroicons/react/24/solid'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

import { useRecoilValue, useSetRecoilState } from "recoil";
import { squadState } from "../atoms/squad";
import { chatState } from "../atoms/chat";
import Select from './Select';
import NavbarItem from './NavbarItem';

function Navbar() {
    const squad = useRecoilValue(squadState);

    const setChat = useSetRecoilState(chatState);
    const setSquad = useSetRecoilState(squadState);

    const options = squad.users.map((twitchId) => ({ value: twitchId, label: twitchId }));

    const handleSquadChange = (e: React.ChangeEvent) => {
        setChat(e.target.value);
    }

    const handleSquadClear = () => {
        setSquad({
            users: []
        })
    }

    return (
        <div className="h-[10%] bg-[#18181b] w-full flex items-center align-middle justify-between text-white px-4">
            <NavbarItem onClick={handleSquadClear}>
                <MiniIcon Icon={SquaresPlusIcon}/>
                <div className='font-medium'>Creator</div>
            </NavbarItem>
            <NavbarItem>
                <MiniIcon Icon={ChatBubbleOvalLeftEllipsisIcon}/>
                <Select options={options} onChange={handleSquadChange}/>
            </NavbarItem>
        </div>
    )
}

export default Navbar