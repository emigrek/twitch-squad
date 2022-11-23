import React from 'react'

function Tips() {
  return (
    <div className="flex flex-col items-center align-middle justify-center space-y-1">
        <div className="text-xs font-medium text-white/50">Tips</div>
        <div className="flex flex-col items-center align-middle justify-center">
            <div className="text-xs text-white/20">Add by pressing <span className='px-[0.3rem] py-[0.2rem] bg-white/10 rounded-lg'>ENTER</span>.</div>
            <div className="text-xs text-white/20">Remove by clicking on names.</div>
        </div>
    </div>
  )
}

export default Tips