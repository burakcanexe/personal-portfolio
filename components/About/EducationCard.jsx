import React from 'react'

function EducationCard({ school, startTime, endTime, description, degree }) {
    return (
        <div className='lg:px-6 py-4 border-b border-slate-300'>
            <div className='flex justify-between'>
                <h4 className='text-xl font-semibold'>{school}</h4>
                <span className='font-medium text-slate-400'>{startTime} - {endTime}</span>
            </div>
            <div className='mt-4 flex flex-col'>
                <span className='font-medium text-lg'>{description} - <span className='text-slate-500'>({degree})</span></span>
            </div>
        </div>
    )
}

export default EducationCard
