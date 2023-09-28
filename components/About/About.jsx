'use client'
import Image from 'next/image'
import React from 'react'
import me from '@/assets/img/Burak-Can-Yıldırım.png'
import { CustomButton } from '..'
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiSolidChevronRight } from 'react-icons/bi'
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineHtml5 } from 'react-icons/ai'
import { SiExpress, SiSocketdotio } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import LangCard from './LangCard'
import WorkCard from './WorkCard'
import EducationCard from './EducationCard'
import CourseCard from './CourseCard'

function About() {

  let turkcellCertifications = [
    { name: 'React 101', url: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjM4NzM5Y2lkNDcxOTNxaWQxNTFlbmQ=', startDate: 2022, endDate: 2022 },
    { name: 'React 201', url: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjM4NzM5Y2lkNDcxOTRxaWQxNTJlbmQ=', startDate: 2022, endDate: 2022 },
    { name: 'React 301', url: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjM4NzM5Y2lkNDcxOTVxaWQxNTNlbmQ=', startDate: 2022, endDate: 2022 },
    { name: 'React 401', url: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjM4NzM5Y2lkNDcxOTZxaWQxNTRlbmQ=', startDate: 2022, endDate: 2023 },
  ]

  let patikaCertifications = [
    { name: 'Beginner Level Front-End Web Development', url: 'https://academy.patika.dev/tr/certificates/cHPH9mb', startDate: 2022, endDate: 2022 },
    { name: 'Intermediate Level Front-End Web Development', url: 'https://academy.patika.dev/tr/certificates/7ee61b69', startDate: 2022, endDate: 2023 },
  ]

  let udemyCertifications = [
    { name: 'From Scratch to Summit JavaScript and NodeJS', url: 'https://www.udemy.com/certificate/UC-bec3117e-4ab2-45b9-bc04-fca0f01fa899', startDate: 2022, endDate: 2022 },
    { name: 'Application Development with MERN Stack', url: 'https://www.udemy.com/certificate/UC-e9d9cf90-194b-42ca-a92f-84d81081075c', startDate: 2022, endDate: 2023 },
    { name: 'Modern Web Development Course', url: 'https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu', startDate: 2022, endDate: 2023 },
  ]

  return (
    <div id='about' className='w-full flex flex-wrap pt-20'>
      <div className='w-4/12 relative hidden lg:block'>
        <Image loading='lazy' alt='Burak Can Yıldırım' src={me} className='w-full h-full object-cover object-center' />
        <div className='absolute left-10 top-10 right-10 bg-black px-8 py-3 flex justify-center'>
          <h1 className='font-bold text-4xl text-center'>Burak Can Yıldırım</h1>
        </div>
        <div className='absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent'>
          <h4 className='text-center font-bold text-3xl'>Hayalindeki projeyi hayata geçirmeye hazır mısın?</h4>
          <div className='flex justify-center my-12'>
            <CustomButton title={'İletişime Geç'} />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-8/12 flex flex-col bg-lightbg'>
        <div className='flex flex-col px-8 pt-8'>
          <h3 className='text-4xl font-bold text-center lg:text-start'>Uzmanlıklarım</h3>
          <div className='flex gap-1 mt-4 items-center'>
            <BiSolidChevronRight className='hidden lg:block text-3xl text-gray-500' />
            <span className='text-3xl font-semibold subtitle flex justify-center w-full lg:w-auto'>
              <TypeAnimation
                sequence={[
                  'Web Uygulamaları',
                  2000,
                  'Mobil Uygulamalar',
                  2000,
                  'Frontend Development',
                  2000,
                  'Backend Development',
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '36px', display: 'inline-block' }}
              />
            </span>
            <span className='text-white pulseAnim font-bold text-3xl -ml-2 hidden lg:block'>_</span>
          </div>
        </div>
        <div className='mt-16 bg-gradient-to-r p-8 from-bg to-lightbg'>
          <h2 className='text-xl pl-4 border-l-2 border-orange'>Frontend Development</h2>
          <div className='flex flex-wrap mt-6'>
            <LangCard title={'HTML'} stats={5} Icon={() => <AiOutlineHtml5 className='text-4xl text-slate-500' />} />
            <LangCard title={'CSS'} stats={5} Icon={() => <DiCss3 className='text-4xl text-slate-500' />} />
            <LangCard title={'TailwindCSS'} stats={4} Icon={() => <BiLogoTailwindCss className='text-4xl text-slate-500' />} />
            <LangCard title={'JavaScript'} stats={5} Icon={() => <DiJavascript1 className='text-4xl text-slate-500' />} />
            <LangCard title={'React'} stats={5} Icon={() => <BiLogoReact className='text-4xl text-slate-500' />} />
            <LangCard title={'Next.js'} stats={4} Icon={() => <TbBrandNextjs className='text-4xl text-slate-500' />} />
          </div>
        </div>
        <div className='mt-[2px] bg-gradient-to-r p-8 from-bg to-lightbg'>
          <h2 className='text-xl pl-4 border-l-2 border-orange'>Backend Development</h2>
          <div className='flex flex-wrap mt-6'>
            <LangCard title={'JavaScript'} stats={5} Icon={() => <DiJavascript1 className='text-4xl text-slate-500' />} />
            <LangCard title={'Typescript'} stats={4} Icon={() => <TbBrandTypescript className='text-4xl text-slate-500' />} />
            <LangCard title={'Node.js'} stats={5} Icon={() => <BiLogoNodejs className='text-4xl text-slate-500' />} />
            <LangCard title={'Express'} stats={4} Icon={() => <SiExpress className='text-4xl text-slate-500' />} />
            <LangCard title={'Socket.io'} stats={4} Icon={() => <SiSocketdotio className='text-4xl text-slate-500' />} />
            <LangCard title={'MongoDB'} stats={4} Icon={() => <BiLogoMongodb className='text-4xl text-slate-500' />} />
          </div>
        </div>
      </div>
      <div className='w-full bg-white p-12 text-black flex flex-col lg:flex-row justify-between'>
        <div className="w-full lg:w-5/12">
          <h2 className='text-4xl font-semibold'>İş Geçmişim</h2>
          <div className='h-[10px] bg-gradient-to-r from-slate-600 to-orange mt-8' />
          <div className='flex flex-col'>
            <WorkCard company={'Freelance'} startTime={2023} endTime={'Şuan'} description={'Full Stack Developer'} />
            <WorkCard company={'Noxarc'} startTime={2022} endTime={2023} description={'Frontend Developer'} />
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-10 lg:mt-0">
          <h2 className='text-4xl font-semibold'>Eğitim</h2>
          <div className='h-[10px] bg-gradient-to-r lg:bg-gradient-to-l from-slate-600 to-orange mt-8' />
          <div className='flex flex-col'>
            <EducationCard school={'Bülent Ecevit Üniversitesi'} startTime={2020} endTime={2024} description={'Bilgisayar Mühendisliği'} degree={'Lisans'} />
            <CourseCard company={'Turkcell'} certifications={turkcellCertifications} />
            <CourseCard company={'Patika.dev'} certifications={patikaCertifications} />
            <CourseCard company={'Udemy'} certifications={udemyCertifications} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
