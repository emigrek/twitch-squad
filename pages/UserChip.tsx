import React from 'react'

function UserChip(props: { twitchId: string, onClick: (twitchid: string) => void }) {
  return (
    <div onClick={() => {
      props.onClick(props.twitchId)
    }} key={props.twitchId} className="cursor-pointer hover:bg-red-900 font-medium text-black transition-colors p-3 text-sm bg-white rounded-lg">{props.twitchId}</div>
  )
}

export default UserChip