import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-300 h-[150px]'>
        <div>
            <h3 className='text-2xl font-bold text-center p-4'>Floures</h3>
            <div className='flex justify-center items-center'>
                <FaFacebook size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
                <FaTwitter size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
                <FaInstagram size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
                <FaYoutube size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
                <FaTiktok size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
                <FaLinkedinIn size={30} className='hover:text-slate-400 ease-in duration-200 mr-4'/>
            </div>
            <p className='text-2xl text-center p-2'>All rights protected </p>
        </div>
    </div>
  )
}

export default Footer