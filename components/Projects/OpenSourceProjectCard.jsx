'use client'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { IoGitNetworkOutline } from 'react-icons/io5'

function OpenSourceProjectCard({ name, description, tech, starCount, forkCount, link }) {
  return (
    <div className='w-full lg:w-[30%] cursor-pointer group' onClick={() => { window.open(link) }}>
      <div className='bg-gradient-to-br from-orange to-red p-6 text-black'>
        <h4 className='text-xl font-bold'>burakcanexe/<span className='text-blue'>{name}</span></h4>
        <p className='mt-4 font-semibold'>{description}</p>
      </div>
      <div className='flex monospace font-semibold items-center py-2 bg-white text-black group-hover:bg-black group-hover:text-white duration-200 px-6 justify-between w-full'>
        <span className='text-xl'>React</span>
        <div className='flex gap-6 items-center'>
          <div className='flex gap-1 items-center'>
            <AiOutlineStar className='text-lg text-orange' />
            <span>{starCount}</span>
          </div>
          <div className='flex gap-1 items-center'>
            <IoGitNetworkOutline className='text-lg text-red' />
            <span>{forkCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSourceProjectCard
