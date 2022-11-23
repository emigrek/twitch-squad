import React from 'react'

function NavbarItem({ children, onClick, outlined } : { children: React.ReactNode, onClick?: () => void, outlined?: boolean }) {
    return (
        <div className={`${outlined ? `text-white bg-transparent` : `text-black bg-white shadow-md shadow-white/30`} flex items-center space-x-2 align-middle select-none cursor-pointer my-5 rounded-lg p-2`} onClick={onClick}>
            {children}
        </div>
    )  
}

export default NavbarItem