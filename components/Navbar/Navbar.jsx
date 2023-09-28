import Link from 'next/link'
import React from 'react'

function Navbar() {
    return null
    return (
        <div className='flex justify-center sticky top-0 z-50 bg-lightbg text-white h-[70px] items-center'>
            <div className='container flex justify-between'>
                <Link href='/' className='monospace text-3xl font-bold subtitle'>Burak Can Yıldırım</Link>
                <div className='flex gap-6'>
                    <Link href={'/'} className='font-medium text-lg hover:text-orange duration-200'>Anasayfa</Link>
                    <Link href={'/#about'} className='font-medium text-lg hover:text-orange duration-200'>Hakkımda</Link>
                    <Link href={'/#services'} className='font-medium text-lg hover:text-orange duration-200'>Servisler</Link>
                    <Link href={'/#projects'} className='font-medium text-lg hover:text-orange duration-200'>Projeler</Link>
                    <Link href={'/#blog'} className='font-medium text-lg hover:text-orange duration-200'>Blog</Link>
                    <Link href={'/#contact'} className='font-medium text-lg hover:text-orange duration-200'>İletişim</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
