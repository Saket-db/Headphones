import React from 'react';
import headphone4 from "../../Images/headphone4.png";

const Banner = () => {
  return (
    <>
    <section>
      <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
        {/* <div className='text-center'></div> */}

        {/* Banner Image */}
        <div>
            <img src={headphone4} alt='' className='w-[200px] md:w-[400px]'/>
        </div>

        {/* Banner Text Info */}
        <div>
            <div>
                <h1>Latest Headphones with the latest technology</h1>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Banner
