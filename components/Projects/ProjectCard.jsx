import React from 'react'

function ProjectCard({ name, description, technologies, time, role, picture, link }) {
    return (
        <div className='w-full p-6 flex flex-col lg:flex-row group bg-gradient-to-b lg:bg-gradient-to-r from-bg to-lightbg shadow-md'>
            <a href={link} target='_blank' className='flex justify-center items-center w-full lg:w-5/12 lg:max-h-[400px] overflow-hidden'>
                <img src={picture} className='h-full object-cover object-center w-full group-hover:scale-105 duration-200' />
            </a>
            <div className='flex flex-col lg:px-10 mt-8 lg:mt-0 w-full lg:w-7/12 gap-6 justify-between'>
                <div className='flex flex-col'>
                    {/* <Image src={Logo} alt="" className='w-[180px]' /> */}
                    <a href={link} target='_blank' className='text-3xl font-bold group-hover:text-orange duration-200 mt-4'>{name}</a>
                </div>
                <p className='text-lg text-slate-300 font-medium'>{description}</p>
                <div className='flex flex-wrap gap-6'>
                    <div className='flex flex-col w-full'>
                        <span className='text-lg text-blue font-bold'>Technologies</span>
                        <div className='flex gap-2 mt-3'>
                            {technologies.map(tech => (
                                <div key={tech} className='bg-red bg-opacity-20 hover:bg-opacity-30 cursor-pointer px-4 py-1'>
                                    <p className='monospace text-red font-thin text-sm'>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='w-1/2 flex flex-col'>
                            <span className='text-lg text-blue font-bold'>Süre</span>
                            <span className='text-lg mt-1 font-semibold'>{time}</span>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <span className='text-lg text-blue font-bold'>Görevim</span>
                            <span className='text-lg mt-1 font-semibold'>{role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
