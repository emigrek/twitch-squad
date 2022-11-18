import React from 'react'

import { useRecoilValue } from "recoil";
import { chatState } from "../atoms/chat";

function Chat(props: { className: string}) {
    const chatUser = useRecoilValue(chatState);

    return (
        <iframe 
            src={`https://www.twitch.tv/embed/${chatUser}/chat?parent=localhost`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
            className={props.className}
        >
        </iframe>
    )
}

export default Chat