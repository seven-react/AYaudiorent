import React from 'react'
import ScrollIcon from "@icons/scroll_Icon.svg?react";
const Hero = () => {
  // Scroll handler function to scroll down by 5rem
  const handleScroll = () => {
    const targetScrollDistance = 514;
    const currentScrollY = window.scrollY;
   
      const targetPosition = currentScrollY + targetScrollDistance;
      window.scrollBy({
        top: targetPosition, // Adjust this value (5rem = 80px, considering 16px base font size)
        behavior: "smooth",
      });
    
   
  };

  return (
    <section>
      <header className="  relative inset-0 w-auto  lg:pt-6.875 pl-[7%]
        pt-44 
        z-0 text-left  sm:px-15 ">
        <h1
          className="
             max-w-xs sm:max-w-[85vw] md:max-w-[90vw] lg:max-w-[51vw] 
             mb-2 sm:mb-2  lg:mt-2 lg:mb-2
            text-[1.2em] sm:text-[1.3em] md:text-[41px] lg:text-[60px]
            leading-5 sm:leading-[38px] md:leading-[36px] lg:leading-[55px] 
            font-semibold text-white source-sans-pro lg:tracking-half"
        >
                  <span>Your Audio Equipment </span>
          <br className="lg:block hidden" />
          <span> Resource</span>
          <br className="lg:block hidden" />
          <span> in Addis Ababa City.</span>
          
        </h1>
        <p
          className="
            max-w-sm sm:max-w-[95%] 
            text-[0.875em] sm:text-[1em] md:text-[20px] lg:text-[25px] 
            leading-relaxed sm:leading-[1.875rem] lg:leading-[40px] 
            pb-1 font-light text-white"
        >

          
          Quality audio equipment rental services <br className="hidden lg:block  " /> in Addis Ababa City.Contact us today!
        </p>

        <div className=" pt-3 lg:pt-[2rem]  w-auto   ">
        <button 
            tabIndex="0"
            aria-label="Explore our rental packages"
            className="
            border-0 outline-0 my-2 mr-3 
            text-[0.5625rem] sm:text-[0.625rem] md:text-[0.6875rem] lg:text-[0.75rem] xl:text-[1rem] 
            font-semibold 
             px-[1.875rem] py-[0.5rem] sm:px-[1.9375rem] sm:py-[0.5625rem] md:py-[0.5625rem] md:px-[0.9375rem]
             lg:px-3 lg:py-4 xl:px-6 xl:py-[0.8125rem]
              leading-loose lg:leading-[0.6875rem]
            bg-blue-800 text-white-100 hover:bg-yellow-600 
            rounded"
            >
            RENTAL PACKAGES
        </button>

          <button className="border-[1.5px] border-white-opacity hover:border-white  text-[0.5625rem] sm:text-[0.625rem] 
          md:text-[0.6875rem] lg:text-[0.75rem] xl:text-[1rem] my-2  ml-3  
          px-[1.44375rem] py-[0.5rem] sm:px-[1.40625rem] sm:py-[0.375rem] md:px-4  
          md:py-[0.4375rem] lg:px-[1.0625rem] lg:py-[0.6875rem] xl:py-[0.6875rem] xl:px-[1.0625rem]
           leading-[0.6875rem]
          font-semibold  bg-transparent  text-white-100  rounded ">
            EMAIL US
          </button>
        </div>
      </header>

      <div className="hidden md:flex lg:flex xl:flex scroll-down-wrap no-border bottom-[3rem]  justify-center w-full">
        {/* Main Section Down Arrow */}
        <div className="border-none overflow-visible text-center opacity-100 h-auto animate-nudgeMouse">
          <ScrollIcon
            className="nectar-scroll-icon w-[35px] h-[50px] cursor-pointer  stroke-white/50"
            aria-label="Scroll down to learn more about our services"
            role="img"
            title ="Scroll Down Icon"
            onClick={handleScroll}
          />

          {/* Arrow Pointer */}
          <div className="absolute animate-arrowFadeSlide top-[10px] left-1/2 w-[2px] h-[5px] -ml-[1px] bg-white/50  rounded-full "></div>

          {/*  TODO Circle Border */}

          {/* <div className="absolute top-0 left-1/2 w-[30px] h-[45px] -ml-[15px] border stroke-2 border-white rounded-full box-border z-[62] scroll-btn"></div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;