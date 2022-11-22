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
                className="h-[90%]"
                darkMode={true}
            />
        )
    else
        return (
            <div className="h-[90%] w-[350px] text-white/20 text-2xl flex items-center align-middle justify-center border-white/20 rounded-lg border-[0.35rem] border-dashed">
                Chat
            </div>
        )
}

export default Chat