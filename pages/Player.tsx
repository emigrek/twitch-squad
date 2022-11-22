import React from 'react'
import { useRecoilValue } from "recoil";
import { squadState } from "../atoms/squad";
import { TwitchPlayerNonInteractive } from 'react-twitch-embed';

function Player({ twitchId }: { twitchId: string }) {
    const squad = useRecoilValue(squadState);

    const getFlexBasis = () => {
        const usersLength = squad.length;

        if(usersLength === 1 || usersLength === 2) return '100';
        if(usersLength > 1 && usersLength < 4) return '50';
        if(usersLength > 4) return '33';
    };

    return (
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0" style={{ flexBasis: `${getFlexBasis()}%`}} >
            <TwitchPlayerNonInteractive
                channel={twitchId}
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Player