// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <>
//             <nav className='sm:h-auto sm:w-auto bg-slate-300'>
//                 <button className='md:hidden sm:visible pl-3 pt-2' onClick={() => setIsOpen(!isOpen)}  aria-expanded={isOpen} ><GiHamburgerMenu />    </button>
//                 <div className='lg:flex lg:items-center sm:gap-0 md:justify-between lg:space-x-6 h-14 w-full sm:w-auto flex lg:justify-between sm:justify-normal pt-2 xs:flex-col sm:flex-col md:flex-row lg:flex-row '>
//                     <div>
//                         <Link to={'/'}>
//                             <img className='h-10 w-28' src="./images/istt.webp" alt="" />
//                         </Link>
//                     </div>
//                     <div className={`flex justify-between sm:gap-2 md:gap-8 lg:gap-12 pr-4 pt-2 font-sans xs:flex-col sm:flex-col md:flex-row lg:flex-row ${isOpen ? 'block' : 'hidden'} `}>
//                         <Link className=' hover:text-teal-600' to={'/'}>Home</Link>
//                         <Link className=' hover:text-teal-600' to={'/about'}>AboutUs</Link>
//                         <Link className=' hover:text-teal-600' to={'/contact'}>ContactUs</Link>
//                         <Link className=' hover:text-teal-600' to={'/courses'}>Courses</Link>
//                         <Link className=' hover:text-teal-600' to={'/admission'}>Admission</Link>
//                         <Link className=' hover:text-teal-600' to={'/notice'}>Notice</Link>
//                         <Link className=' hover:text-teal-600' to={'/signin'}>Sign-In</Link>
//                         <Link className=' hover:text-teal-600' to={'/register'}>Sign-Up</Link>
//                     </div>
//                 </div>
             
//             </nav>
//         </>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-slate-300'>
            <button 
                className='md:hidden pl-3 pt-2' 
                onClick={() => {
                    setIsOpen(!isOpen);
                    //console.log("Menu toggled", !isOpen);
                }}
              //  aria-expanded={isOpen}
            >
                <GiHamburgerMenu />
            </button>
            <div className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden'} md:flex`}>
                <div>
                    <Link to='/'>
                        <img className='h-10 w-28' src="./images/istt.webp" alt="Logo" />
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row md:ml-60 md:gap-8 pr-4 pt-2 font-sans'>
                    <Link className='hover:text-teal-600 ml-5' to='/'>Home</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/about'>About Us</Link>
                    <Link className='hover:text-teal-600          ml-5' to='/contact'>Contact Us</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/courses'>Courses</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/admission'>Admission</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/notice'>Notice</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/signin'>Sign In</Link>
                    <Link className='hover:text-teal-600 ml-5' to='/register'>Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
