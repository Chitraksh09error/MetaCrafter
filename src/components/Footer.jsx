import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='lg:px-10 px-5  py-10 bg-black'>

    <div className='w-full   lg:gap-6 gap-1 flex justify-around lg:flex-row md:flex-row flex-col  '>
      <div className=' flex flex-col '>
        <div>
          <h1  className='lg:text-6xl text-3xl font-bold text-white  ' >Beyond Digital,</h1>
          <h1 className='lg:text-6xl text-3xl mt-4 font-bold text-white ' > Into <span className='text-amber-300'>Storytelling</span> </h1>
        </div>
        <div>
          <div className='flex mt-5 items-center gap-3'>
            <FaPhoneAlt className='text-white lg:text-2xl text-xl' />
            <h1 className='lg:text-2xl text-xl text-white font-semibold '>Contact Us - </h1>
            <h1 className='lg:text-xl text-lg text-gray-300 cursor-pointer hover:text-white  font-semibold '>+91 80100 63514</h1>
          </div>
          <div className='flex mt-2 items-center gap-3'>
            <MdEmail  className='text-white lg:text-2xl text-xl' />
            <h1 className='lg:text-2xl text-xl text-white font-semibold '>Email - </h1>
            <h1 className='lg:text-xl text-lg text-gray-300 cursor-pointer hover:text-white  font-semibold '>metacrafter01@gmail.com</h1>
          </div>
        </div>

      </div>
      <div className='w-full h-0.5 bg-amber-50  flex md:hidden '></div>
      <div className='flex flex-col  lg:mt-0 md:mt-0 mt-2 '>
         <div className='flex items-center gap-3'>
            <FaLink  className='text-white lg:text-3xl text-2xl' />
            <h1 className='lg:text-2xl text-xl text-white font-semibold '>Connect on -</h1>
            <a href="https://www.instagram.com/metacrafter.01?igsh=ZjAyeGM0cWl6NW80" className='flex items-center gap-3 '>

            <h2 className='lg:text-xl text-lg text-white' >@metacrafter.01</h2>
            <FaInstagram className='text-white text-2xl'/>

            </a>
          </div>
          <div className='text-white flex gap-5  justify-center mt-5 text-xl '>
            <Link onClick={() => window.scrollTo(0,0)}  to="/" className=' hover:text-amber-200'  >Home</Link>
            <Link onClick={() => window.scrollTo(0,0)} to="/about" className='hover:text-amber-200' >About</Link>
            <Link  onClick={() => window.scrollTo(0,0)} to="/contact" className='hover:text-amber-200' >Contact</Link>
            <Link onClick={() => window.scrollTo(0,0)}  to="/hire" className='hover:text-amber-200' >Hiring</Link>
          </div>
          <div className='flex items-center lg:justify-start justify-center  gap-3 mt-5'>
            <FaLocationArrow className='text-white lg:text-2xl text-xxl' />
            <h1 className='lg:text-2xl text-xl text-white font-semibold' >Location - </h1>
            <h1 className='lg:text-xl text-lg text-white font-semibold'>PAN India</h1>
          </div>
      </div>
      
    </div>

      <div className='flex flex-col justify-center mt-5 items-center'>

        <h1 className='text-white font-semibold lg:text-2xl text-xl'>Metacrafter</h1>
        <h2 className='text-gray-300  text-lg'>© 2025 Metacrafter. All rights reserved.</h2>
      </div>
        </div>
    </>

  )
}

export default Footer
