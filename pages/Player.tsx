import React from 'react'
import { TwitchPlayerNonInteractive } from 'react-twitch-embed';

import { useRecoilValue } from "recoil";
import { squadState } from "../atoms/squad";

import getFlexBasis from '../utils/functions';

function Player({ twitchId }: { twitchId: string }) {
    const squad = useRecoilValue(squadState);
    
    return (
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0" style={{ flexBasis: `${getFlexBasis(squad.length)}%`}} >
            <TwitchPlayerNonInteractive
                channel={twitchId}
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Player