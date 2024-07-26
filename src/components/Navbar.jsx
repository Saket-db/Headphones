import React from 'react';
import { MdMenuOpen } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from 'react-mouse-follower';
import{motion} from "framer-motion";

// Array of menu items
const NavbarMenu = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Categories", link: "#" },
    { id: 3, title: "Blog", link: "#" },
    { id: 4, title: "About", link: "#" },
    { id: 5, title: "Contact", link: "#" },
];

const Navbar = () => {
    return (
        <div className='bg-brandDark text-white flex py-7 font-poppins'>
            <motion.nav 
            intial = {{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{ duration: 1, delay: 0.5}}
            className="container flex justify-between items-center">
                {/* Logo */}
                <div>
                    <a href='#' className='text-xl font-bold uppercase'>
                        Muffled / <span className='text-md font-light text-white'>Music</span>
                    </a>
                </div>

                {/* Menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4'>
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                            <UpdateFollower mouseOptions= {{
                            backgroundColor: "white", 
                            zIndex: 999,
                            followSpeed: 1.7,
                            scale: 5,
                            mixBlendMode: "difference",
                            }}>
                            <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
                            </UpdateFollower>
                            </li>
                        ))}

                        <UpdateFollower mouseOptions= {{
                            backgroundColor: "white", 
                            zIndex: 999,
                            followSpeed: 1.7,
                            scale: 5,
                            mixBlendMode: "difference"
                            }}>

                        {/* <li> */}
                            <button className='text-xl ps-12'>
                                <SlEarphones />
                            </button>
                            </UpdateFollower>
                        {/* </li> */}
                    </ul>
                </div>

                {/* Hamburger */}
                <div className='md:hidden'>
                    <MdMenuOpen className='text-3xl' />
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar;
