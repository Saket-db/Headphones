import React from 'react';
import headphone4 from "../../Images/headphone4.png";
import {motion} from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';

const Banner = () => {
  return (
    <>
    <section>
      <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
        {/* <div className='text-center'></div> */}

        {/* Banner Image */}
        <div className='flex flex-row justify-center'>
            <motion.img 
            initial = {{opacity: 1, x: 0, rotate: -180}}
            animate={{ opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 1.0, delay: 0.8, ease: "easeInOut"}}
            alt = ""
            src={headphone4} alt='' className='w-[200px] md:w-[400px] md:h-[250px]'/>
        </div>

        {/* Banner Text Info */}
        <div className='flex flex-col justify-center text-justify md:text-left ml-1 pr-2'>
            <div className='space-y-3 lg:max-w-[450px] text-center md:text-left'>
                <h1 className='text-3xl font-semibold font-gotham pb-5 md:pb-3'>Latest Headphones With The Latest Technology</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className='p-2 border-2 border-[#434141] rounded-md hover:bg-[#434141] hover:text-white'>Shop Now</button>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Banner
