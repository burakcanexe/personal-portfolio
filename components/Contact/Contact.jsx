import React from 'react'
import { AiOutlinePhone, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div id='contact' className='flex flex-col lg:flex-row lg:justify-between my-20 px-[17px] lg:px-0'>
            <div className='w-full lg:w-4/12'>
                <h2 className='text-5xl font-bold text-center lg:text-start'>İletişime Geç</h2>
                <h3 className='subtitle text-4xl font-bold mt-4 text-center lg:text-start'>Hadi biraz projenizi konuşalım</h3>
                <p className='mt-10 text-xl text-slate-300'>Yeni bir proje mi düşünüyorsunuz, çözmeniz gereken bir sorun mu var, yoksa sadece bağlantı kurmak mı istiyorsunuz? Hadi yapalım!</p>
                <div className='flex flex-col gap-4 mt-10'>
                    <div className='flex items-center gap-2'>
                        <AiOutlinePhone className='text-4xl text-slate-500' />
                        <span className='text-xl font-semibold'>+90 543 905 31 81</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiMail className='text-4xl text-slate-500' />
                        <a href="mailto:burakcanexe@gmail.com" className='text-xl font-semibold border-b border-orange cursor-pointer'>burakcanexe@gmail.com</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiLogoLinkedin className='text-4xl text-slate-500' />
                        <a href='https://www.linkedin.com/in/burak-can-y%C4%B1ld%C4%B1r%C4%B1m-27b58616b/' target='_blank' className='text-xl font-semibold border-b border-orange cursor-pointer'>Burak Can Yıldırım</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineTwitter className='text-4xl text-slate-500' />
                        <a href='https://twitter.com/burakcanexe' target='_blank' className='text-xl font-semibold border-b border-orange cursor-pointer'>@BurakCanexe</a>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact
