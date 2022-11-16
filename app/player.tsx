'use client';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil";
import { squadState } from "../atoms/squad";

function Player({ twitchId }: { twitchId: string }) {
    const [player, setPlayer] = useState(null);
    const squad = useRecoilValue(squadState);

    const getFlexBasis = () => {
        const { users } = squad;
        const usersLength = users.length;

        if(usersLength === 1) return '100';
        if(usersLength > 1 && usersLength < 4) return '50';
        if(usersLength > 4) return '33';
    };

    useEffect(() => {
        const twitchPlayer = new Twitch.Embed(`player-${twitchId}`, {
            height: `100%`,
            width: `100%`,
            channel: twitchId,
            layout: "video"
        });

        setPlayer(twitchPlayer);

        return () => {
            twitchPlayer.destroy();
            setPlayer(null);
        }
    }, []);

    return (
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0" style={{ flexBasis: `${getFlexBasis()}%`}} >
            <div className="relative w-full h-full" id={`player-${twitchId}`}></div>
        </div>
    )
}

export default Player