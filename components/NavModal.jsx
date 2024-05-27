import React from 'react'
import { FaX } from 'react-icons/fa6'

const NavModal = ({ isOpen, onClose, children }) => {
  return (
    <div
    onClick={onClose}
    className={`fixed flex inset-0 md:hidden transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}`}
    >
        {/* Modal Nav */}
        <div onClick={(e) => e.stopPropagation()}
        className={`rounded-r-md bg-[#56697A] w-[50%] shadow p-6 transition-all ${ isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
            <button
            onClick={onClose}
            className='absolute top-2 right-2 p-1 rounded-lg text-white/60 bg-gray-400 hover:bg-gray-50 hover:text-gray-600'
            >
                <FaX />
            </button>
            {children}
        </div>

    </div>
  )
}

export default NavModal