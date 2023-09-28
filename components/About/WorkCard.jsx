import React from 'react'

function WorkCard({ company, startTime, endTime, description }) {
    return (
        <div className='lg:px-6 py-4 border-b border-slate-300'>
            <div className='flex justify-between'>
                <h4 className='text-xl font-semibold'>{company}</h4>
                <span className='font-medium text-slate-400'>{startTime} - {endTime}</span>
            </div>
            <div className='mt-4'>
                <span className='font-medium text-lg'>{description}</span>
            </div>
        </div>
    )
}

export default WorkCard
