import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Contact = () => {
  const position = [23.8103, 90.4125];
  return (
    <>
      <div className='bg-green-600 h-44 w-auto'>
        <h1 className='font-extrabold text-4xl text-center pt-3'>Campus Location</h1>
        <h4 className='text-center'> <span> <Link to={"/"}>Home /</Link></span> Campus Location

        </h4>
      </div>
      <div className='mt-10 pl-5'>
        <h1 className='text-2xl pl-3'>Permanent Campus:</h1>
        <p className='flex gap-4 pt-4 pb-7'><FaHome /><span>
          Plot: 1/9, Road: 2, Block: D, Section: 15, Kafrul, Mirpur, Dhaka-1216, Bangladesh</span></p>
      </div>
      <div>
        <div className='px-4 py-4'>
          <img className='rounded-3xl' src="/images/istt-c-bg-02.webp" alt="" />
        </div>
       
      </div>
   
    </>
  )
}

export default Contact;