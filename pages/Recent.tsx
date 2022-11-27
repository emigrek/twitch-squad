import React, { useEffect, useState } from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid';

import { useSetRecoilState } from 'recoil';
import { squadState } from '../atoms/squad';

import UserChip from './UserChip';

function Recent() {
    const setSquad = useSetRecoilState(squadState);
    const [localHistory, setLocalHistory] = useState<string[][]>([]);
    
    const restore = (squad: string[]) => {
        setSquad(squad);
    };

    useEffect(() => {
        var local = JSON.parse(localStorage.getItem('squad-history') || '[]');
        setLocalHistory(local);
    }, []);

    if(!localHistory.length) return null;

    return (
        <div className='flex flex-col space-y-2 align-middle justify-center items-center'>
            <div className='text-white/40 text-center flex flex-row items-center justify-center space-x-1'>
                <div>
                    or use <span className="text-blue-500 font-medium">recent<SparklesIcon className='ml-1 h-4 w-4 inline-block'/></span> squads
                </div>
            </div>
            <div className='relative w-[300px] p-2'>
                <div className="absolute w-[50px] right-0 top-0 bottom-0 bg-gradient-to-r from-black/0 to-background z-20 h-18 pointer-events-none"></div>
                <div className="flex flex-row items-center justify-start space-x-3 overflow-x-hidden snap-x snap-center">
                    {
                        localHistory.map((squad, index) => (
                            <div onClick={() => {
                                restore(squad);
                            }} className='cursor-pointer hover:shadow-lg hover:shadow-blue-700/50 hover:bg-blue-700 bg-blue-800/80 transition-all rounded-lg flex flex-row p-2 space-x-1 text-white' key={index}>
                                {squad.map((user, index) => (
                                    <UserChip mini key={index} twitchId={user}/>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Recent;