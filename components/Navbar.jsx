import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');


    const handleNav = ()=>{
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("rgb(209 213 219)");
                setTextColor("#000");
            }else{
                setColor('transparent');
                setTextColor('#fff');
            } 
        };
        window.addEventListener('scroll', changeColor);
    }, []);
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-[10] ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Floures</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 text-xl'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href='/Work'>Work</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href='/Contact'>Contact</Link>
                </li>
            </ul>
            {/*Mobil Button*/}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
            </div>
            {/*Mobil Menu*/}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-400 text-center ease-in duration-300'
             : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-400 text-center ease-in duration-300'}>
            <ul>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/Work'>Work</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/Contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar