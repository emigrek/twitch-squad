'use client';
import React, { useEffect, useState } from 'react'

function Player({ twitchId }: { twitchId: string }) {
    const [player, setPlayer] = useState(null);

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
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0" style={{ flexBasis: `100%`}} >
            <div className="relative w-full h-full" id={`player-${twitchId}`}></div>
        </div>
    )
}

export default Player