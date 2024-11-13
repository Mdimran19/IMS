// import React from 'react';
// import axios from 'axios';
// import { useState , Link} from 'react';
// import { useEffect } from 'react';
// const About = () => {

//     // const [tecehers, setTecehers] = useState([]);


//     // useEffect(()=> {
//     //     const fetchTeceher = async () =>{
//     //       try {
//     //         const response = await axios.get("http://localhost:8000/api/v1/teceher/te", {withCredentials: true});
//     //        // setIsAuthenticated(true);
//     //         setTecehers(response.data.teachers);
//     //       } catch (error) {
//     //        // setIsAuthenticated(false);
//     //         setTecehers({});
//     //       }
//     //     };
//     //     fetchTeceher();
//     //       },[]
//     //     )

//   return (
   

//   )
// }

// export default About;
import React from 'react'
 import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div> <div className=' sm:flex-col md:flex-row  lg:flex-row  bg-slate-200 pb-10 '>
    <div className=' md:pt-5 sm:mr-6 ml-4 pt md:pl-5  '>
        <div className='mt-5'>
            <img className=' md:w-full md:h-auto -5 sm:h-full sm:w-full  sm:ml-3 sm:mt-2 sm:mb-4 md:-ml-2 md:mr-8 rounded-2xl ' src="./images/cseece.webp" alt="" />
        </div>
    </div>
    <div className='mt-10'>
        <h3 className='md:-mt-4 md:mb-3 font-bold  md:ml-24 sm:mt-3 sm:mb-3 sm:ml-10'>INSTITUTE OF SCIENCE TREADE AND TECHNOLOGY</h3>
        <p className='md:-mt-1 text-2xl px-3 sm:text-xl'>
            The Institute of Science Trade and Technology (ISTT) is a professional and technical based higher educational institution in Bangladesh.
            It is an affiliated Institute of National University of Bangladesh. Programs are CSE , ECE, BBA AND AMT, KMT , FDT  is running ,here.Campus location at Mirpur-15 , Kafrul, Dhaka-1216. <br />
            College Code: National University- 6471, <br />Permanent Campus: Plot: 1/9, Road: 2, Block: D, Section: 15, Mirpur, Dhaka-1216, Bangladesh (13 No Notun Bazar)
        </p>
    </div>
<Link className='text-center bg-yellow-300' to={'/teceher'}> <button>Our Teachers</button></Link>


    </div></div>
  )
}

export default About