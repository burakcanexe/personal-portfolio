'use client'
import React, { useState } from 'react'
import { CustomButton } from '..'
import { BurakCanClient } from '@/utils/BurakCanClient'

function ContactForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedServices, setServices] = useState([])
    const [error, setError] = useState('')

    const selectService = (service) => {
        const lastServices = selectedServices;
        let index = lastServices.indexOf(service)
        if (index > 0) {
            lastServices.splice(index, 1)
        } else {
            lastServices.push(service)
        }
        setServices(lastServices)
    }
    const submitMessage = async () => {
        if (!name || !email || !title || !description) {

        }
        const res = { name, surname, company, email, phone, title, description, services: selectedServices }
        const { data, error } = await BurakCanClient.SendMessage(res)
    }

    return (
        <div className='w-full lg:w-8/12 lg:pl-10 mt-10 lg:mt-0'>
            <div className='w-full'>
                <div className='flex flex-col'>
                    {error && <span className='mb-2 text-red'>{error}</span>}
                    <div className='flex flex-col border-b border-dashed border-slate-500'>
                        <span className='bg-lightbg px-10 py-4 text-lg text-slate-300 font-medium'>İletişim Bilgileriniz</span>
                        <div className='flex flex-wrap px-6 py-6 gap-y-4'>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='Adınız*' />
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={surname} onChange={(e) => { setSurname(e.target.value) }} type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='Soyadınız' />
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='Şirket Adınız' />
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='E-Posta Adresiniz*' />
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='Telefon Numaranız' />
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2'>
                                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' placeholder='Konu başlığı*' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='bg-lightbg px-10 py-4 text-lg text-slate-300 font-medium'>Projeniz için hangi hizmetlere ihtiyacınız var?</span>
                        <div className='flex flex-wrap p-6 gap-y-4'>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('Web Uygulaması')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>Web Uygulaması</span>
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('Mobil Uygulama')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>Mobil Uygulama</span>
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('Kurumsal Site')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>Kurumsal Site</span>
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('E-Ticaret')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>E-Ticaret</span>
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('İş Görüşmesi')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>İş Görüşmesi</span>
                            </div>
                            <div className='w-full lg:w-1/3 lg:px-2 flex items-center gap-2'>
                                <input onClick={() => selectService('Diğer')} type="checkbox" className='w-[22px] h-[22px] accent-slate-700' />
                                <span className='text-slate-300 font-medium text-xl'>Diğer</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='bg-lightbg px-10 py-4 text-lg text-slate-300 font-medium'>Projenizden biraz bahseder misiniz?</span>
                        <div className='flex flex-wrap mt-6 lg:mt-0 lg:p-6 gap-y-4'>
                            <textarea placeholder='Mesajınız*' value={description} onChange={(e) => { setDescription(e.target.value) }} className='w-full border-b border-blue bg-lightbg py-3 px-4 font-medium focus:outline-none text-lg' rows={4} />
                        </div>
                    </div>
                    <div className='px-8 mt-8 lg:mt-2 flex justify-center lg:justify-start'>
                        <CustomButton onClick={submitMessage} title={'Gönder'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
