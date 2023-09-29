'use client'
import { getPostData } from '@/utils/GetPostData'
import React, { useEffect, useState } from 'react'
import './style.css';
import Me from '@/assets/img/Burak-Can-Yıldırım.png'
import Image from 'next/image';
import { BurakCanClient } from '@/utils/BurakCanClient';
import moment from 'moment';
import Link from 'next/link';

function page({ params }) {
    const [blog, setBlog] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data } = await BurakCanClient.GetBlog({ slug: params.slug })
        if (data) {
            setBlog(data)
        }
        const _blog = await getPostData(data.content)
        setMetadata(data)
        setContent(_blog.contentHtml)
    }
    const setMetadata = (data) => {
        document.title = `${data.title} - Burak Can Yıldırım`
        var descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute("content", data.description);

        }
        var authorMeta = document.querySelector('meta[name="author"]');
        if (authorMeta) {
            authorMeta.setAttribute("content", "Burak Can Yıldırım");
        }
    }
    if (!blog) return null
    return (
        <div className='flex justify-center bg-bg min-h-screen'>
            <div className='flex flex-col container text-white items-center'>
                <div className='flex flex-col lg:min-h-[60vh] items-center justify-between py-20'>
                    {blog.categories.map(category => (
                        <Link href={'/blog'} className='bg-red bg-opacity-20 hover:bg-opacity-30 cursor-pointer px-4 py-1'>
                            <p className='monospace text-red font-thin text-lg'>{category.name.toUpperCase()}</p>
                        </Link>
                    ))}
                    <h1 className='font-bold text-center px-[10%] text-2xl lg:text-6xl mt-10 lg:mt-0'>{blog.title}</h1>
                    <div className='flex gap-4 items-center lg:hidden mt-10 justify-between w-full'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-gradient-to-b from-orange to-red shadow-md p-[2px] w-[40px] h-[40px] rounded-full'>
                                <Image alt='Burak Can Yıldırım' loading='lazy' loading='lazy' src={Me} className='rounded-full' />
                            </div>
                            <span className='text-xl font-semibold'>Burak Can Yıldırım</span>
                        </div>
                        <span className='lg:text-xl text-slate-300 font-medium'>{moment(blog.createdAt).format('DD.MM.YYYY')}</span>
                    </div>
                    <div className='lg:flex gap-4 items-center hidden'>
                        <span className='lg:text-xl font-semibold'>Burak Can Yıldırım</span>
                        <div className='bg-gradient-to-b from-orange to-red shadow-md p-1 w-[100px] h-[100px] rounded-full'>
                            <Image loading='lazy' src={Me} alt='Burak Can Yıldırım' className='rounded-full' />
                        </div>
                        <span className='lg:text-xl text-slate-300 font-medium'>{moment(blog.createdAt).format('DD.MM.YYYY')}</span>
                    </div>
                </div>
                <div className='w-full lg:mt-8 px-[17px] lg:px-0'>
                    <img loading='lazy' src={blog.mainPicture} alt={blog.title} className='w-full lg:max-h-[500px] object-cover object-center' />
                </div>
                <div className='w-full px-[17px] lg:px-0 my-10'>
                    <div id='blogContent' dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    )
}

export default page
