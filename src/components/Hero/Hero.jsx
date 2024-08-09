import React from 'react'
// import { LuSubtitles } from 'react-icons/lu';
import hpp from "../../Images/Black.jpg";
import hpp1 from "../../Images/Blue.jpg"; 
import hpp2 from "../../Images/w1.webp";  
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';
// import { MdOpacity } from 'react-icons/md';

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.5,
                ease: easeInOut,
            },
        },
    };
};

const HeadphoneData = [{
    id: 1,
    image: hpp,
    title: "Muffled 860-ANC",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "Rs. 3800",
    modal: "Modal Black",
    bgColor: "#000000",
}, {
    id: 2,
    image: hpp2,
    title: "Muffled 860-ANC",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "Rs. 3800",
    modal: "Modal White",
    bgColor: "#808080",
}, {
    id: 3,
    image: hpp1,
    title: "Muffled 860-ANC",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "Rs. 3800",
    modal: "Modal Blue",
    bgColor: "#7A8CA3",
}];

const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <>
            <section className='bg-brandDark text-white font-poppins'>
                {/* <UpdateFollower mouseOptions= {{
                    backgroundColor: "white", 
                    zIndex: 999,
                    followSpeed: 1.7,
                    scale: 5,
                    mixBlendMode: "difference",
                }}> */}
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[200px]'>
                    {/* Headphone info */}
                    <div className='flex flex-col justify-center py-10 md:py-0 xl:max-w-[500px] '>
                        <div className='space-y-2 text-center md:text-left pb-15'>
                            {/* Headphone title */}
                            <AnimatePresence mode='wait'>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.7,
                                    scale: 5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                }}>
                                    <motion.h1
                                        key={activeData.id}
                                        variants={fadeUp(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-2xl lg:text-5xl font-bold font-gotham'>{activeData.title}</motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={fadeUp(0.1)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: activeData.bgColor,
                                    zIndex: 999,
                                    followSpeed: 1.7,
                                    scale: 5,
                                    rotate: -360,
                                    mixBlendMode: "difference",
                                    backgroundElement: (
                                        <div>
                                            <img src={activeData.image} />
                                        </div>
                                    ),
                                }}>
                                    <motion.button
                                        key={activeData.id}
                                        variants={fadeUp(0.1)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        style={{ backgroundColor: activeData.bgColor }} className='text-yellow-400 px-4 py-3 inline-block'>Buy and Listen</motion.button>
                                </UpdateFollower>
                            </AnimatePresence>
                            {/* Hero List separator */}
                            <div className=' flex items-center justify-center md:justify-start gap-3 !mt-20'>
                                <p className='uppercase text-sm'>Top in the class headphones for you!</p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                            {/* Colors */}
                        </div>
                        {/* Headphone List Switcher */}
                        <div className='flex flex-wrap grid grid-cols-3 gap-10'>
                            {HeadphoneData.map((item) => {
                                return (
                                    <UpdateFollower mouseOptions={{
                                        backgroundColor: item.bgColor,
                                        zIndex: 999,
                                        followSpeed: 0.7,       
                                        scale: 5,
                                        text: "View Details",
                                        textFontSize: "3px",
                                        rotate: -360,
                                        // mixBlendMode: "difference",
                                        // backgroundElement:(
                                        //     <div>
                                        //         <img src={activeData.image}/>
                                        //     </div>
                                        // ),
                                    }}>
                                        <div onClick={() => handleActiveData(item)} className=' grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div className='pt-2 pb-3'>
                                                <img src={item.image} alt="" className='w-{200px}' />
                                            </div>
                                            <div className='space-y-3'>
                                                <p className='text-base font-bold place-items-center'>{item.price}</p>
                                                <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                            </div>
                                        </div>
                                    </UpdateFollower>
                                );
                            })}
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className='flex flex-col justify-end items-center'>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                                exit={{ opacity: 0, scale: 0.9, y: 100, transition: { duration: 0.4 } }}
                                src={activeData.image} alt='' className='h-[320px] md:w-[280px] xl:w-[350px] pb-4' />
                        </AnimatePresence>
                    </div>
                    {/* Whatsapp icon */}
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                        <a href={`https://wa.me/7387776883`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                {/* </UpdateFollower> */}
            </section>
        </>
    )
}

export default Hero;
