import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid';

function UserChip(props: { mini?: boolean,twitchId: string, onClick?: (twitchid: string) => void }) {
  return (
    <div onClick={() => {
      if(props.onClick) {
        props.onClick(props.twitchId);
      }
    }} key={props.twitchId} className={`${props.mini ? `p-1` : `p-2`} ${props.onClick ? `hover:bg-red-900 cursor-pointer` : ``} flex space-x-2 flex-row items-center align-middle font-medium text-black transition-colors text-sm bg-white/80 rounded`}>
      {
        props.mini ? null : (
          <UserCircleIcon className="h-5 w-5 text-black" />
        )
      }
      <div>{props.twitchId}</div>
    </div>
  )
}

export default UserChip