import React, { useState } from 'react';
import RightArrow from '@icons/RightArrow.svg?react'

const BookNow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative  mt-36  w-full h-80 flex justify-center items-center bg-blue-100 ">
        <div className='mt-[70px] mb-[30px] text-center  '>
    <h2 className=' text-white-100 text-5x1 font-semibold text-[2.125em] leading-44 mb-[-0.5rem] '>
      <span>Ready to work with 
      <br className="xs:block lg:hidden sm:block md:block" /> AY Audio Rental?</span>
           </h2>

          <p className='text-white-100  text-[0.875em] leading-[1.625rem] mt-0 '>
          Check out our equipment packages or contact us today!</p>
          
          <div className='flex justify-center mt-[2.5rem]'>
           
           
           
          <button
            className={`relative z-10 flex items-center justify-center py-[0.7rem] px-[2.6rem] rounded-[4px] font-semibold bg-blue-100 text-white border-2
                 text-[0.8rem] transition-transform duration-300 ease-in-out ${
              isHovered ? 'border-white' : 'border-white-opacity'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`transition-transform duration-490a ease-in-out ${isHovered ? '-translate-x-1/3' : ''}`}>
              Book Now
            </span>
            <RightArrow className={`transition-all duration-490 ease-in-out  ${isHovered ? 'opacity-100 translate-x-3.5' : 'opacity-0 translate-x-0  '}`}/>
          
            
          </button>
          
          
          
          </div>
    </div>
    
    </div>
  );
};

export default BookNow;
