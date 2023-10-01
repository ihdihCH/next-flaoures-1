import Image from 'next/image'
import React from 'react'
import Slider1 from "../public/Slider1.jpg"
import Image4 from "../public/Image4.jpg"
import Image5 from "../public/Image5.jpg"
const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h2 className='font-bold text-2xl py-4'>Floures Images</h2>
        <div className='grid grid-rows-none md:grid-cols-2 p-4 gap-4'>
            <div className='width-[20000px]  col-span-2 md:col-span-2 row-span-3'>
                <Image src={Slider1} alt="/" layout='responsive' width={677} height={250}/>
            </div>
            <div className='w-full h-full'>
            <Image src={Image5} alt="/" layout='responsive' width={215} height={217} objectFit='cover'/>
            </div>
            <div className='w-full h-full'>
            <Image src={Image4} alt="/" layout='responsive' width='215' height='217' objectFit='cover'/>
            </div>
            <div className='w-full h-full'>
            <Image src={Image4} alt="/" layout='responsive' width='215' height='217' objectFit='cover'/>
            </div>
            <div className='w-full h-full'>
            <Image src={Image5} alt="/" layout='responsive' width='215' height='217' objectFit='cover'/>
            </div>
        </div>
    </div>
  )
}

export default Portfolio