import React from 'react';
import { FaMapLocation, FaX, FaPhone } from 'react-icons/fa6';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Cards from "../../Images/Cards.png";
import { motion } from 'framer-motion';

const Footern = () => {
  return (
    <motion.footer 
      className='bg-brandDark pt-10 pb-9 text-white min-h-[380px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <motion.div 
            className='space-y-5'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold uppercase'>Playing</h1>
            <p className='text-sm max-w-[300px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />
                +91 7387776883
              </p>
              <p className='flex items-center gap-2 mt-2'>
                <FaMapLocation />
                Vellore, Tamil Nadu
              </p>
            </div>
          </motion.div>
          <motion.div 
            className='space-y-6'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold'>Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className='space-y-6'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <a href='https://www.instagram.com/saket_db'target='blank'><FaInstagram className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <a href='https://www.linkedin.com/in/saket-dwaraka-bhamidipaati-97b56b252/' target='blank'><FaLinkedin className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <a href='https://twitter.com/Saket_db'target='blank'><FaX className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <a href = "https://github.com/Saket-db" target='blank'> <FaGithub className='text-3xl' /></a>
              </motion.div>
            </div>
            <div>
              <p>Payment Methods</p>
              <img src={Cards} alt="Payment Methods" className='w-[150px]' />
            </div>
          </motion.div>
        </div>
        <p className='text-center mt-6'>Copyrights 2024. All Rights Reserved || Saket DB</p>
      </div>
    </motion.footer>
  );
}

export default Footern;
