import React from 'react'
import { BsDot } from 'react-icons/bs'

function ServiceCard({ type, icon, title, description, maddeler }) {

    if (!maddeler) return null
    return (
        <div className='w-full mx-[17px] lg:mx-0 lg:w-[49%] flex flex-col mb-4'>
            <div className='bg-gradient-to-br min-h-[220px] from-orange to-red px-4 py-6 flex flex-col items-center justify-center'>
                {icon()}
                <h2 className='text-4xl font-bold mt-6 monospace text-center'>{title}</h2>
            </div>
            <div className='p-6 bg-white'>
                {/* <p className='text-slate-800 font-medium text-lg'>Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.</p> */}
                <div className='flex flex-col gap-2'>
                    {maddeler.map((madde) => (
                        <div key={madde} className='flex gap-2 items-center'>
                            <BsDot className='text-2xl text-slate-500' />
                            <p className='text-lg text-black font-semibold'>{madde}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
