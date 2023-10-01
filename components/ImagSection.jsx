import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const ImagSection = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image src={socialImg} alt="/" className='w-full h-screen' layout='responsive'/>
        {/*overlay*/}
        <div/>
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'>
            <FaFacebook size={30} className="z-10"/>
        </p>
        </div>
    </div>
  )
}

export default ImagSection