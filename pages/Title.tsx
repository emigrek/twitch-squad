import React from 'react'

function Title({ text }: { text: string }) {
  return (
    <div className="text-lg text-white font-bold">{ text }</div>
  )
}

export default Title