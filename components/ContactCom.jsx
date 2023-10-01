import React from 'react'

const ContactCom = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 h-screen'>
        <h2 className='text-2xl font-bold text-center p-4'> Contact Me</h2>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 outline-none' type="text" placeholder='Name'/>
                <input className='border shadow-lg p-3 outline-none' type="email" placeholder='Email'/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2 outline-none' type="text" placeholder='Subject'/>
            <textarea className='border shadow-lg p-3 w-full outline-none' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 hover:bg-gray-300'>Submit</button>
        </form>
    </div>
  )
}

export default ContactCom