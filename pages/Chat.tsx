import React from 'react'

import { useRecoilValue } from "recoil";
import { chatState } from "../atoms/chat";

import { TwitchChat } from 'react-twitch-embed';

function Chat() {
    const chatUser = useRecoilValue(chatState);

    if(chatUser)
        return (
            <TwitchChat
                height="100%"
                channel={chatUser || 'twitch'}
                title={`${chatUser}'s chat`}
                className="h-[94%] mx-2 mb-2 rounded-lg"
                darkMode={true}
            />
        )
    else
        return (
            <div className="h-[90%] bg-foreground w-[350px] mx-2 mb-2  text-white/20 text-2xl flex items-center align-middle justify-center border-white/20 rounded-lg border-[0.15rem] border-dashed">
                Chat
            </div>
        )
}

export default Chat