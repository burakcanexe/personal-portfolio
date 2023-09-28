'use client'
import React, { useEffect, useState } from 'react'
import OpenSourceProjectCard from './OpenSourceProjectCard'
import ProjectCard from './ProjectCard'
import { BurakCanClient } from '@/utils/BurakCanClient'

function HomeProjects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getAllProjects()
    }, [])

    const getAllProjects = async () => {
        const { data } = await BurakCanClient.GetAllProjects()
        setProjects(data)
    }

    return (
        <div id='projects' className='flex flex-col pt-20 px-[17px] lg:px-0'>
            <h2 className='text-4xl font-bold text-center lg:text-start'>Açık Kaynak Kodlu Projelerim</h2>
            <p className='text-lg text-slate-300 font-medium mt-6 text-center lg:text-start'>Kodlarına erişebileceğiniz projelerim.</p>
            <div className='flex flex-wrap flex-col lg:flex-row gap-4 mt-8'>
                <OpenSourceProjectCard
                    name={'React-Markdown-Previewer'}
                    description={'React kullanarak canlı olarak markdown ön izlemenize olanak sağlayan bir uygulama'}
                    tech={'React'}
                    starCount={0}
                    forkCount={0}
                    link='https://github.com/burakcanexe/React-Markdown-Previewer'
                />
                <OpenSourceProjectCard
                    name={'Memory-Game'}
                    description={'React kullanarak kartlar ile oynanan ufak bir hafıza oyunu'}
                    tech={'React'}
                    starCount={0}
                    forkCount={0}
                    link='https://github.com/burakcanexe/Memory-Game'
                />
            </div>
            <h2 className='text-4xl font-bold mt-16 text-center lg:text-start'>Son Projelerim</h2>
            <p className='text-lg text-slate-300 font-medium mt-6 text-center lg:text-start'>Son geliştirdiğim projelerim.</p>
            <div className='flex flex-wrap gap-4 mt-8'>
                {projects?.length > 0 && projects.map(project => (
                    <ProjectCard
                        name={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.url}
                        time={project.day}
                        role={project.jobTitle}
                        picture={project.mainPicture}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomeProjects
