import React from 'react'

function LangCard({ title, stats, Icon }) {
    let blue = [];
    let gray = [];
    for (let i = 1; i <= 5; i++) {
        if (i > stats) {
            gray.push(1)
            break
        }
        blue.push(1)
    }
    return (
        <div className='flex justify-between items-center w-full lg:w-1/2 xl:w-1/3 lg:pr-8 xl:pr-3  2xl:pr-12 mb-6'>
            <div className='flex gap-1 items-center'>
                {Icon()}
                <span className='text-xl font-semibold text-slate-200'>{title}</span>
            </div>
            <div className='flex gap-[2px]'>
                {blue.map((x,index) => <div key={index} className='w-[15px] h-[15px] bg-blue' />)}
                {gray.map((x,index) => <div key={index} className='w-[15px] h-[15px] bg-slate-500' />)}
            </div>
        </div>
    )
}

export default LangCard
