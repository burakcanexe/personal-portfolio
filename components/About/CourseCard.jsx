import React from 'react'
import { BiSolidChevronRight } from 'react-icons/bi'

function CourseCard({ company, certifications }) {
    return (
        <div className='lg:px-6 py-4 border-b border-slate-300'>
            <div className='flex justify-between'>
                <h4 className='text-xl font-semibold'>{company}</h4>
            </div>
            <div className='mt-2 gap-1 flex flex-col'>
                {certifications.map(certification => (
                    <a key={certification.name} href={certification.url} target='_blank' className='flex justify-between items-center border-b lg:border-none'>
                        <div className='flex gap-1 items-center'>
                            <BiSolidChevronRight className='hidden lg:block text-xl text-gray-500' />
                            <span className='font-medium text-lg'>{certification.name}</span>
                        </div>
                        <span className='font-medium text-slate-400'>{certification.startDate} - {certification.endDate}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CourseCard
