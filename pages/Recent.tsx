import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { historyState } from '../atoms/history';
import { squadState } from '../atoms/squad';
import UserChip from './UserChip';

function Recent() {
    const history = useRecoilValue(historyState);
    const setSquad = useSetRecoilState(squadState);

    const uniqueHistory = history.map(e => e.join(',')).reverse().filter((e, i, a) => a.indexOf(e) === i).reverse().map(e => e.split(',')).reverse();
    
    const restore = (squad: string[]) => {
        setSquad(squad);
    };

    if(!uniqueHistory.length) return null;

    return (
        <div className='flex flex-col space-y-4 align-middle justify-center items-center'>
            <div className='text-white/50 text-center'>or use recent squad</div>
            <div className='relative w-[300px]'>
                <div className="absolute w-[50px] right-0 top-0 bottom-0 bg-gradient-to-r from-black/0 to-[#18181b] z-20 h-12 pointer-events-none"></div>
                <div className="flex flex-row items-center justify-start space-x-3 overflow-x-hidden snap-x snap-center">
                    {
                        uniqueHistory.map((squad, index) => (
                            <div onClick={() => {
                                restore(squad);
                            }} className='cursor-pointer bg-black/50 rounded-lg flex flex-row p-2 space-x-1 text-white' key={index}>
                                {squad.map((user, index) => (
                                    <UserChip mini twitchId={user}/>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Recent