import React from 'react'

import { useRecoilValue } from "recoil";
import { squadState } from "../atoms/squad";

import Player from './Player';

function Squad() {
    const squad = useRecoilValue(squadState);

    if(squad.length) {
        return ( <> {squad.map((twitchId: string) => (
            <Player key={twitchId} twitchId={twitchId} />
        )) } </>)
    } else { return null }
}

export default Squad