import React from 'react'

function NavbarItem({ children, onClick } : { children: React.ReactNode, onClick?: () => void  }) {
    return (
        <div className="flex items-center space-x-2 align-middle select-none cursor-pointer my-5 text-black bg-white rounded-lg p-2" onClick={onClick}>
            {children}
        </div>
    )  
}

export default NavbarItem