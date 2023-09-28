'use client'
import { CustomButton } from '@/components'
import { BurakCanClient } from '@/utils/BurakCanClient'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

function page() {

    const [categories, setCategories] = useState([])
    const [activeCategory, setCategory] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [allBlogs, setAllBlogs] = useState(null)

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const { data } = await BurakCanClient.GetAllCategories()
        let _blogs = []
        data.map(_category => {
            _category.blogs.map(blog => {
                _blogs.push(blog)
            })
        })
        _blogs.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
        setBlogs(_blogs)
        setCategories(data)
        setAllBlogs(_blogs)
    }
    const changeCategoey = (id) => {
        if (activeCategory === id) return
        setCategory(id)
        let newBlogs = []
        allBlogs.map(blog => {
            blog.categories.map(category => {
                if (category._id === id)
                    newBlogs.push(blog)
            })
        })
        setBlogs(newBlogs)
    }

    return (
        <div className='w-full bg-bg min-h-screen flex justify-center text-white'>
            <div className='container flex flex-col px-[17px] lg:px-0'>
                <div className='bg-gradient-to-br from-blue to-red p-[1px] w-full mt-20'>
                    <div className='flex flex-col lg:flex-row bg-gradient-to-r from-bg to-lightbg'>
                        <div className="w-full lg:w-1/2 py-10 px-6">
                            <h1 className='text-4xl font-bold'>Bloglar</h1>
                            <p className='text-slate-300 font-medium text-xl mt-10'>Web geliştirme ve modern JavaScript çerçeveleri hakkında yazıyorum.</p>
                            <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 mt-10'>
                                {categories.length > 0 && categories.map(category => (
                                    <div onClick={() => { changeCategoey(category._id) }} className='w-full lg:w-1/2 flex pr-6 group cursor-pointer'>
                                        <div className='w-9/12 px-4 bg-gradient-to-r from-black to-bg flex items-center h-[70px] border-r-2 border-red'>
                                            <h2 className='text-lg font-semibold'>{category.name}</h2>
                                        </div>
                                        <div className={`w-3/12 flex justify-center items-center duration-200 ${activeCategory === category._id ? 'bg-gradient-to-br from-white to-orange text-black' : 'bg-lightbg duration-200 group-hover:text-black group-hover:bg-gradient-to-br from-white to-orange'}`}>
                                            <p className='text-xl font-bold'>{category.blogs.length}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-10 px-6">
                            <span className='text-4xl subtitle font-bold'>Haberdar Ol</span>
                            <p className='text-slate-300 font-medium text-xl mt-10'>Web geliştirmeyle ilgili en iyi makaleler, bağlantılar ve haberler haftada bir gelen kutunuza gönderilir.</p>
                            <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-10'>
                                <div className="w-full lg:w-9/12 mt-2">
                                    <input type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='E-Posta Adresiniz' />
                                </div>
                                <div className="w-full lg:w-3/12 flex items-end pl-2">
                                    <CustomButton title={'Abone Ol'} containerStyle={'w-full h-[40px]'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-20'>
                    {blogs.length > 0 && blogs.map((blog) => (
                        <div className='w-full group'>
                            <div className='overflow-hidden w-full'>
                                <Link href={`/blog/${blog.slug}`} className='w-full'>
                                    <img loading='lazy' src={blog.mainPicture} alt={blog.title} className='w-full max-h-[230px] object-cover object-center group-hover:scale-105 duration-200' />
                                </Link>
                            </div>
                            <div className='bg-gradient-to-b from-bg to-lightbg flex flex-col items-start px-4 py-4'>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    {blog.categories.map(ctg => (
                                        <div className='bg-red bg-opacity-20 hover:bg-opacity-30 cursor-pointer px-4 py-1'>
                                            <p className='monospace text-red font-medium text-lg'>{ctg.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/blog/${blog.slug}`} className='font-bold text-4xl mt-8 group-hover:text-orange duration-200'>{blog.title}</Link>
                                <h2 className='text-lg text-slate-300 font-medium mt-6'>{blog.description}</h2>
                                <div className='flex gap-3 items-center text-slate-400 font-semibold text-lg mt-8'>
                                    <AiOutlineCalendar className='' />
                                    <span>{moment(blog.createdAt).format('DD.MM.YYYY')}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page