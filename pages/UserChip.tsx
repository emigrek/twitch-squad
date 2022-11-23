import React from 'react'

function UserChip(props: { mini?: boolean,twitchId: string, onClick?: (twitchid: string) => void, style?: object }) {
  return (
    <div onClick={() => {
      if(props.onClick) {
        props.onClick(props.twitchId);
      }
    }} key={props.twitchId} style={props.style} className={`${props.mini ? `p-1 rounded` : `aspect-video max-h-20`} ${props.onClick ? `hover:bg-red-900 cursor-pointer` : ``} justify-center flex-grow-0 flex-shrink-0 flex space-x-2 flex-row items-center align-middle font-medium text-white transition-colors text-sm bg-black/50`}>
      <div>{props.twitchId}</div>
    </div>
  )
}

export default UserChip