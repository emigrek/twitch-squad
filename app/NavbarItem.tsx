import React from 'react'

function NavbarItem({ children, onClick } : { children: React.ReactNode, onClick: () => void }) {
    return (
        <div className="flex items-center align-middle p-3 bg-white/25 space-x-1 rounded-lg select-none cursor-pointer" onClick={onClick}>
            {children}
        </div>
    )  
}

export default NavbarItem