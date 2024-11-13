import React from 'react'
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa";
const Footer = () => {
  const phoneNumber = '+88 01943747529';
  return (
    <div>
      <div className='pt-6 bg-slate-200 flex justify-between sm:flex-col md:flex-row'>
        <div>
          <Link to={'/'}>
            <img className='h-20 w-56 pl-5' src="./images/istt.webp" alt="" />
          </Link>
        </div>
        <div className='sm: pl-5'>
          <h2 className='underline'>Links</h2>
          <div className='flex-col'>
            <p>
              Call us at{' '}
              <a href={`tel:${phoneNumber}`} aria-label={`Call ${phoneNumber}`}>
                {phoneNumber}
              </a>
            </p>

          </div>
          <div className='flex flex-col'>
            <Link to={"/about"}>About us </Link>
            <Link to={"/courses"}>Our Courses </Link>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 sm:pl-5 pb-5'>
          <h2 className='underline'>Special Links</h2>
          <Link to={'https://www.nu.ac.bd'}>Natioal Universoty</Link>
          <Link to={'https://www.istt.edu.bd/'} >Istt Official page</Link>
          <Link to={'https://moedu.gov.bd/'}>Education Ministry</Link>
        </div>

      </div>

    <div>
    <div>
        <p className='pl-3 font-normal bg-stone-400'>Copyright 2022 © Institute of Science Trade & Technology</p>
      </div>
    </div>
    </div>
  )
}

export default Footer;