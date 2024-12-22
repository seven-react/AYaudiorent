import React, { useEffect, useState } from 'react';
import RightArrow from '@icons/RightArrow.svg?react'

const Banner = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  const [mouseY, setMouseY] = useState(0);

  // Update the mouse position on mouse move
  const handleMouseMove = (e) => {
    setMouseY(e.clientY);
  };


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={`relative flex items-center  justify-center z-1  mt-[6rem] lg:mt-[7.5rem] bg-center bg-no-repeat bg-cover bg-fixed bg-banner `}
    style={{
      height: `clamp(70.83vh, 55.34vh, 41.50vh)`,
      backgroundPosition: `center ${scrollY * 0.02}px`, // Adjust the vertical position based on scroll
      // backgroundPosition: `center ${mouseY * 0.1}px`, // Adjust multiplier to control sensitivity
      
    }}>
      {/* Overlay */}
      
      
      {/* Main Content */}
    <div className=' relative mt-[4.375rem]  mb-[1.875rem]'>
    <h1 className=' text-white w-full font-semibold  text-md text-[2.125em] leading-44  text-center '>
      <span>Need a skilled </span>
        <br className='lg:hidden sm:hidden '/>
        
        <span>sound tech on</span>   
        
           <br className='hidden sm:block md:hidden lg:hidden'/>
            
             <span> site?</span>
           </h1>
          <p className='text-white text-[1.125em] leading-[2rem] font-semibold text-center '>No problem. We can run your
          <br className='lg:hidden sm:hidden '/> equipment for you so
          <br className='hidden lg:hidden  sm:block '/> you can focus 
          <br className='lg:hidden sm:hidden '/>  on running your successful event.</p>
          <div className='flex justify-center mt-[2.2rem]'>
           
           
            <button  className={`relative flex items-center z-0 opacity-70 justify-center py-[0.7rem] px-[2.6rem] rounded-[4px] font-semibold bg-blue-800 text-white 
                 text-[0.8rem]
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
              >
              <span className={`transition-transform duration-490a ease-in-out ${isHovered ? '-translate-x-1/4' : ''}`}>
              Book Now
            </span>
            <RightArrow className={`transition-all duration-490 ease-in-out  ${isHovered ? 'opacity-100 translate-x-3' : 'opacity-0 translate-x-0  '}`}/>
          
              </button>


          </div>
    </div>
    </div>
  );
};

export default Banner;
