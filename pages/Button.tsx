import React from 'react'

function Button(props: { className: string, children: React.ReactNode, onClick?: () => void, outlined?: boolean }) {
  return (
    <div onClick={props.onClick} className={props.className}>
        {props.children}
    </div>
  )
}

export default Button