'use client';
import React from 'react'

import { useRecoilValue } from "recoil";
import { chatState } from "../atoms/chat";
import { TwitchChat } from 'react-twitch-embed';

function Chat() {
    const chatUser = useRecoilValue(chatState);

    return (
        <TwitchChat
            height="100%"
            channel={chatUser || 'twitch'}
            title={`${chatUser}'s chat`}
            className="h-[90%]"
            darkMode={true}
        />
    )
       
}

export default Chat