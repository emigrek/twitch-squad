import React from 'react'

function NavbarItem({ children, onClick, outlined } : { children: React.ReactNode, onClick?: () => void, outlined?: boolean }) {
    return (
        <div className={`${outlined ? `text-white bg-transparent` : `text-white bg-foreground transition-all`} hover:brightness-125 flex items-center space-x-2 align-middle select-none cursor-pointer my-5 rounded px-4 py-2`} onClick={onClick}>
            {children}
        </div>
    )  
}

export default NavbarItem