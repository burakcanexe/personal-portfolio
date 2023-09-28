import React from 'react'
import { BiLogoLinkedin, BiSolidChevronRight } from 'react-icons/bi'
import Me from '@/assets/img/Burak-Can-Yıldırım.png'
import Image from 'next/image'
import CustomButton from '../Ext/CustomButton'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

function Header() {
    return (
        <div className='w-full flex min-h-screen flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center gap-8 items-start'>
                <div className='flex items-end justify-center lg:justify-start w-full gap-2'>
                    <BiSolidChevronRight className='hidden lg:block text-5xl text-gray-500' />
                    <h1 className='monospace text-3xl lg:text-5xl font-bold'>Burak Can Yıldırım</h1>
                    <span className='text-3xl lg:text-5xl pulseAnim font-bold select-none hidden lg:block'>_</span>
                </div>
                <div className='flex justify-center lg:justify-start w-full'>
                    <h2 className='text-3xl lg:text-5xl font-bold subtitle text-center lg:text-start'>Full Stack Web & Mobil Developer</h2>
                </div>
                <p className='text-slate-400 font-medium text-lg text-center lg:text-start'>Merhaba, ben Burak Can Yıldırım, 22 yaşındayım, 5 yıldır hobi 3 yıldır ise profesyonel olarak yazılım ile ilgileniyorum.</p>
                <div className='bg-gradient-to-r from-blue to-red w-full'>
                    <div className='flex items-center gap-8 px-4 py-2 lg:py-6 bg-bg lg:mt-[2px] shadow-md'>
                        <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-1 xl:gap-4 w-1/3 lg:w-auto'>
                            <span className='text-blue font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>2+</span>
                            <span className='text-md xl:text-lg text-center lg:text-start'>Yıllık Tecrübe</span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-1 xl:gap-4 w-1/3 lg:w-auto'>
                            <span className='text-red font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>20+</span>
                            <span className='text-md xl:text-lg text-center lg:text-start'>Tamamlanmış Proje</span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-1 xl:gap-4 w-1/3 lg:w-auto'>
                            <span className='text-orange font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>2+</span>
                            <span className='text-md xl:text-lg text-center lg:text-start'>Açık Kaynak <br /> Kodlu Proje</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start w-full'>
                    <CustomButton title='CV İndir' />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center py-20 lg:py-0'>
                <div className='flex flex-col items-center gap-4 w-1/2 lg:w-6/12'>
                    <div className='bg-gradient-to-b from-orange to-red shadow-md p-2 rounded-full'>
                        <Image src={Me} className='rounded-full' />
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <a href='https://www.linkedin.com/in/burak-can-y%C4%B1ld%C4%B1r%C4%B1m-27b58616b/' target='_blank' className='rounded-full p-4 mt-1 hover:mt-0 hover:mb-1 bg-gradient-to-b from-black to-lightbg shadow-md duration-200'>
                            <BiLogoLinkedin className='text-3xl' />
                        </a>
                        <a href='https://github.com/burakcanexe' target='_blank' className='rounded-full p-4 shadow-md duration-200 mt-1 hover:mt-0 hover:mb-1 bg-gradient-to-b from-black to-lightbg'>
                            <AiFillGithub className='text-3xl' />
                        </a>
                        <a href='https://twitter.com/burakcanexe' target='_blank' className='rounded-full p-4 mt-1 hover:mt-0 hover:mb-1 bg-gradient-to-b from-black to-lightbg shadow-md duration-200'>
                            <AiOutlineTwitter className='text-3xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
