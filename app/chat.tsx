import React from 'react'

function Chat({ twitchId }: { twitchId: string }) {
    return (
        <iframe 
            src={`https://www.twitch.tv/embed/${twitchId}/chat?parent=localhost`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
            height="100%"
        >
        </iframe>
    )
}

export default Chat