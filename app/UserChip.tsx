import React from 'react'

function UserChip(props: { twitchId: string, onClick: (twitchid: string) => void }) {
  return (
    <div onClick={() => {
      props.onClick(props.twitchId)
    }} key={props.twitchId} className="cursor-pointer hover:bg-red-900 transition-colors p-2 text-sm bg-white/30 rounded-lg text-white">{props.twitchId}</div>
  )
}

export default UserChip