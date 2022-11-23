import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid';

function UserChip(props: { twitchId: string, onClick: (twitchid: string) => void }) {
  return (
    <div onClick={() => {
      props.onClick(props.twitchId)
    }} key={props.twitchId} className="flex space-x-2 flex-row items-center align-middle cursor-pointer hover:bg-red-900 font-medium text-black transition-colors p-3 text-sm bg-white/80 rounded">
      <UserCircleIcon className="h-5 w-5 text-black" />
      <div>{props.twitchId}</div>
    </div>
  )
}

export default UserChip