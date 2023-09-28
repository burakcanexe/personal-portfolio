import React from 'react'
import { BsDot } from 'react-icons/bs'
import { CustomButton } from '..'
import ServiceCard from './ServiceCard'
import phone from '@/assets/img/phone.png'
import computer from '@/assets/img/computer.png'
import frontend from '@/assets/img/frontend.png'
import backend from '@/assets/img/backend.png'
import Image from 'next/image'

function HomeServices() {
    return (
        <div id='services' className='w-full flex flex-col lg:flex-row justify-between pt-20'>
            <div className='w-full lg:w-3/12'>
                <h2 className='text-5xl font-bold text-center lg:text-start'>Servisler</h2>
                <h3 className='subtitle text-4xl font-bold mt-4 text-center lg:text-start'>Uzmanlıklarım</h3>
                <div className='flex flex-col mt-8'>
                    <h4 className='text-2xl font-semibold text-center lg:text-start'>Problem Çözme</h4>
                    <p className='text-lg text-slate-300 mt-2 text-center lg:text-start'>Herhangi bir programlama dilini kullanarak bir problemi çözebilirim.</p>
                    <h4 className='text-2xl font-semibold mt-8 text-center lg:text-start'>Ne bekleyebilirsiniz?</h4>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Mobil ve Web Uygulamaları</p>
                    </div>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Detaylı Frontend Çalışması</p>
                    </div>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Optimize ve hızlı Backend - API kurulumu</p>
                    </div>
                    <h4 className='text-2xl font-semibold mt-8 text-center lg:text-start'>Uzmanlaştığım uygulamalar</h4>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Pixel Perfect Arayüz Kodlama</p>
                    </div>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Yeni Componentler Geliştirme</p>
                    </div>
                    <div className='flex gap-2 items-center mt-2 justify-center lg:justify-start'>
                        <BsDot className='text-2xl text-slate-500 hidden lg:block' />
                        <p className='text-lg text-slate-300'>Optimize Backend Oluşturma</p>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <CustomButton title={'İletişime Geç'} containerStyle={'my-10'} />
                </div>
            </div>
            <div className='flex flex-wrap w-full lg:w-7/12 justify-between'>
                <ServiceCard icon={() => { return <Image loading='lazy' src={phone} className='w-[60px]' /> }} type={'mobil'} title={'Mobil Uygulama Geliştirme'} maddeler={['Modern Tasarım', 'Tasarımın 1/1 kodlanması', 'Admin Panel', 'Çoklu Dil Desteği', 'Optimize Kodlama']} />
                <ServiceCard icon={() => { return <Image loading='lazy' src={computer} className='w-[60px]' /> }} type={'web'} title={'Web Uygulama Geliştirme'} maddeler={['Modern Tasarım', 'Tasarımın 1/1 kodlanması', 'Admin Panel', 'Çoklu Dil Desteği', 'Optimize Kodlama']} />
                <ServiceCard icon={() => { return <Image loading='lazy' src={frontend} className='w-[60px]' /> }} type={'frontend'} title={'Frontend Geliştirme'} maddeler={['Modern Tasarım Geliştirme', 'Yeni Componentler Geliştirme', 'Pixel Perfect Kodlama']} />
                <ServiceCard icon={() => { return <Image loading='lazy' src={backend} className='w-[60px]' /> }} type={'backend'} title={'Backend Geliştirme'} maddeler={['Optimize Kodlama', 'Rest API Geliştirme', 'Socket.io İle Canlı İletişim']} />
            </div>
        </div >
    )
}

export default HomeServices
