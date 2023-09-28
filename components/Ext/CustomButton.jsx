'use client'
import React from 'react'

function CustomButton({ title, onClick, containerStyle, buttonStyle }) {
    return (
        <div onClick={() => onClick && onClick()} className={`relative group bg-gradient-to-r from-orange to-red w-[200px] h-[60px] ${containerStyle}`}>
            <button className={`duration-200 -top-2 -left-2 right-2 bottom-2 absolute group-hover:left-0 group-hover:bottom-0 group-hover:top-0 group-hover:right-0 bg-white text-black monospace text-lg font-semibold z-20 ${buttonStyle}`}>{title}</button>
        </div>
    )
}

export default CustomButton
