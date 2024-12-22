import React from 'react';
import ContactForm from '@components/ContactForm';
import {Footer,FooterWidgets} from '@components';
import ScrollIcon from "@icons/scroll_Icon.svg?react"; 


// Scroll handler function to scroll down by 5rem
const handleScroll = () => {
  window.scrollBy({
    top: 514, // Adjust this value (5rem = 80px, considering 16px base font size)
    behavior: "smooth",
  });
};
const Contact = () => {
  return (
    
    <div className="w-full h-full ">
  
    
    {/* Scroll Down Section */}
    <div className="scroll-down-wrap no-border flex flex-col items-center justify-end w-full h-full flex-shrink-0">
      <div>
        {/* Main Section Down Arrow */}
        <div className="relative overflow-visible text-center opacity-100 h-auto animate-nudgeMouse flex items-center justify-center">
          <ScrollIcon
            className="nectar-scroll-icon w-[35px] h-[50px] cursor-pointer border-white/50 stroke-white/50"
            aria-label="Scroll down to view more content"
            onClick={handleScroll}
          />

          {/* Arrow Pointer */}
          <div className="absolute animate-arrowFadeSlide top-[10px] left-1/2 w-[2px] h-[5px] -ml-[1px] bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>

   {/* Title Section */}
   <div className="relative text-center pt-[2.7rem]">
        <h2 className="leading-[3.875rem]  mb-[0.5rem] text-[54px] font-semibold text-gray">
          <span>Contact Us</span>
        </h2>
      </div>


      <div className="relative mt-4.2 mx-auto my-70 w-[100%] flex flex-col gap-7  lg:flex-row items-start justify-between px-[7%]">
        {/* Flex-1 Section on the Left */}
        <ContactForm/>
        

        {/* Flex-2 Section on the Right */}
        <div className=" basis-full lg:basis-1/2 px-[0.7451rem] items-baseline  text-gray">
          <h2 className="text-[2.125rem] pb-[0.35rem] leading-[2.75rem] font-semibold mb-[0.4375rem] ">
            AY Audio Rent
          </h2>

          <div className="leading-7 pb-[1.6875rem] font-normal">
            <p className=" text-[0.875rem] ">Email: AYaudiorental@gmail.com.</p>
            <p className="text-[0.875rem] ">Phone: 09-7433-1530</p>
          </div>

          <h3 className=" text-[0.875rem] pb-[0.35rem] leading-relaxed font-semibold">
            Retail Store
          </h3>
          <p className="text-[0.875rem] leading-relaxed font-normal pb-[1.6875rem] ">
            5908 W 59th Terrace,
            <br />
            Mission, Kansas 66202
          </p>

          <p className="text-[0.875rem] leading-relaxed font-normal pb-[1.6875rem] ">
            Please arrange to check out equipment by appointment to ensure we
            can serve you best.
          </p>

          <h3 className="text-[0.875rem] pb-[0.35rem] leading-relaxed font-semibold">
            Retail Hours:
          </h3>

          <div className="text-[0.875rem] leading-relaxed font-normal ">
            <p>9:30-5:00 Monday-Friday</p>
            <p>Closed Saturday</p>
            <p>Closed Sunday</p>
          </div>
        </div>
      </div>

    
    
    <FooterWidgets/>
    <Footer/>

  </div>
  );
}

export default Contact;
