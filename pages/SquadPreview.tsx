import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { squadState } from '../atoms/squad';
import getFlexBasis from '../utils/functions';
import Tips from './Tips'
import UserChip from './UserChip';

function SquadPreview() {
    const squad = useRecoilValue(squadState);
    const setSquad = useSetRecoilState(squadState);

    const handleChipClick = (twitchId: string) => {
        setSquad((oldSquad) => oldSquad.filter((user) => user !== twitchId));
    }

    return (
        <div className="space-y-3 items-center justify-center align-middle shadow-md">
            <div className="bg-foreground border-2 border-dashed border-white/20 rounded">
            {
                squad.length ? (
                    <div className="flex flex-wrap justify-between">
                        { 
                            squad.map((user) => (
                                <UserChip style={{ flexBasis: `${getFlexBasis(squad.length)}%`}} key={user} onClick={handleChipClick} twitchId={user}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center py-8 aspect-video">
                        <Tips/>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default SquadPreview