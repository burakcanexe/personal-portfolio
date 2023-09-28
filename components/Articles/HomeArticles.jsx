'use client'
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import { BurakCanClient } from '@/utils/BurakCanClient'
import { CustomButton } from '..'
import { useRouter } from 'next/navigation'

function HomeArticles() {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        getAllBlogs()
    }, [])

    const router = useRouter()

    const getAllBlogs = async () => {
        const { data, error } = await BurakCanClient.GetAllBlogs()
        if (data) {
            setBlogs(data)
        }

    }

    return (
        <div id='blog' className='flex flex-col items-center pb-10 pt-20 px-[17px] md:px-0'>
            <h3 className='text-5xl font-bold subtitle py-1'>Blog</h3>
            <p className='text-lg text-slate-300 mt-4 text-center lg:text-start'>Düşüncelerim ve deneylerimle ilgili öne çıkan yazılar.</p>
            <div className='flex flex-col lg:flex-row flex-wrap justify-between mt-10'>
                {blogs && blogs.map(blog => (
                    <ArticleCard creadetAt={blog.creadetAt} title={blog.title} slug={blog.slug} image={blog.mainPicture} category={'REACT'} />
                ))}
            </div>
            <div className='mt-8'>
                <CustomButton onClick={()=>{router.push('/blog')}} title={'Tüm Gönderiler'} />
            </div>
        </div>
    )
}

export default HomeArticles
