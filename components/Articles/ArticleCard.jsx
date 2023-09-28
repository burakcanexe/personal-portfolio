import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/img/blog-automation.jpg'
import blog2 from '@/assets/img/blog-blockchain.jpg'
import Link from 'next/link'
import moment from 'moment/moment'

function ArticleCard({ title, category, image, slug, creadetAt }) {
    return (
        <div className='w-full lg:w-[49%] bg-gradient-to-r from-lightbg to-bg shadow-lg mb-8 flex group'>
            <div className='w-5/12 lg:w-4/12 overflow-hidden'>
                <img src={image ? image : ''} className='w-full h-full object-cover object-center group-hover:scale-110 duration-500' />
            </div>
            <div className='w-7/12 lg:w-8/12 flex flex-col justify-center items-center lg:items-start px-2 lg:px-4 gap-4'>
                <div className='flex justify-between items-center w-full'>
                    <div className='bg-red bg-opacity-20 hover:bg-opacity-30 cursor-pointer px-4 py-1'>
                        <p className='monospace text-red font-thin text-xs lg:text-sm'>{category}</p>
                    </div>
                    <p className='text-[10px] lg:text-xs monospace text-slate-500 font-semibold'>{moment(creadetAt).format('DD.MM.YYYY')}</p>
                </div>
                <Link href={`/blog/${slug}`} className='font-bold text-md lg:text-2xl group-hover:text-orange duration-200'>{title}</Link>
            </div>
        </div>
    )
}

export default ArticleCard
