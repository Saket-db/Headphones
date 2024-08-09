import React from 'react';  
import icon1 from "../../Images/icon1.jpeg";
import Gaurantee from "../../Images/Gaurantee.png";
import afford from "../../Images/afford.jpeg";
import { UpdateFollower } from 'react-mouse-follower';

const ServicesData =[
    {
        id: 1,
        title: "Security",
        icon: icon1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        delay:0.5,
    },
    {
        id: 2,
        title: "Guarantee",
        link: "#",
        icon: Gaurantee,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        delay:0.8,
    },
    {
        id: 3,
        title: "Affordability",
        link: "#",
        icon: afford,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        delay:1.1,
    },
];

const Services = () => {
  return (
    <>
    <section className='bg-slate-500 font-gotham py-7'>
        <div className='container py-12 '>
            <h1 className='text-4xl font-bold text-center pb-8'>SERVICES</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
            {ServicesData.map((data =>(
                <UpdateFollower mouseOptions={{
                    backgroundColor: "white", 
                    zIndex: 9999,
                    followSpeed: 1.2,
                    scale: 10,
                    rotate: -720,
                    mixBlendMode: "darken",
                }}>
                    <div className= 'flex flex-col justify-center items-center p-5 max-w-[450px] mx-auto shadow-lg rounded-xl bg-white max-h-[290px]'>
                        <img src={data.icon} alt = "" className="w-[100px] mb-4"/>
                        <div className=' text-center space-y-2'>
                            <h1 className='text-xl font-semibold'>{data.title}</h1>
                            <p className='text-justify text-sm text-black/75'>{data.desc}</p>
                        </div>
                    </div>
                </UpdateFollower>
            )))}
            </div>
        </div>  
    </section>
    </>
  )
}

export default Services
