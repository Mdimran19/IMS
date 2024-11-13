import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import MessageFrom from '../components/MessageFrom';

const Home = ({ imageUrl }) => {

    const departmentsArray = [
        {
            name: "CSE",
            imageUrl: "./images/CSE.jpeg"
        },
        {
            name: "ECE",
            imageUrl: "./images/ECE.jpeg"
        },
        {
            name: "BBA",
            imageUrl: "./images/BBA.jpeg"
        },
        {
            name: "AMT",
            imageUrl: "./images/AMT.jpeg"
        },
        {
            name: "KMT",
            imageUrl: "./images/KMT.jpeg"
        },
        {
            name: "FDT",
            imageUrl: "./images/FDT.jpeg"
        }
    ];
    const responsive = {
        large: {
            breakpoint: { max: 1024, min: 700 },
            items: 3,
            slideToSlide: 1,
        },
        medium: {
            breakpoint: { max: 700, min: 475 },
            items: 2,
            slideToSlide: 1,
        },
        small: {
            breakpoint: { max: 475, min: 0 },
            items: 1,
            slideToSlide: 1,
        }
    }
    return (
        <>
            <div className=' sm:flex-col md:flex-row  lg:flex-row  bg-slate-200 pb-10 '>
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
            </div>

            <div>
                <div>
                    <div className="pl-3 bg-slate-300">
                        <h2 className='text-center font-bold'>Departments</h2>
                        <Carousel responsive={responsive}>
                            {
                                departmentsArray.map((depart, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='gap-4 text-center'>{depart.name}</div>
                                            <img className='h-40 w-60 rounded-xl' src={depart.imageUrl} alt={depart.name} />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            <MessageFrom />
        </>
    )
}

export default Home;