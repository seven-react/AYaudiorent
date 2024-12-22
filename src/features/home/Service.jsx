import React from 'react'
import {  prog1,prog2} from "@images";



const EventCard=({image, title, description}) => (
    
  <div className=" basis-full   lg:basis-[33.3%] lg:px-[0.7451rem]  sm:px-8 px-2 py-11 sm:py-6">
   
   <img src={image} alt={title} className='w-[400px] h-[267px] mx-auto rounded-sm sm:rounded-md lg:rounded-none' />
    
    <div className="mt-[0.65rem]">
      <h1 className=" text-gray font-600  text-[30px] text-center mb-[0.4rem]">
        {title}
      </h1>
      <p className='text-lighter-gray sm:text-base sm:leading-[1.625rem] pb-[1.6875rem] mt-[0.5rem] text-[14px] font-400 leading-[1.625rem]'>
        {description}
      </p>
    </div>

    <div className='text-center'>
    <button className=" text-[0.75rem] py-2.5 px-3.5 font-semibold bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)] rounded">Learn More</button>
    </div>

  </div>
);

const Service = () => {
  return (
     
  <section id="next-section" >
      <div className=' relative mt-[4.6875rem]  mb-8 lg:mb-[1.875rem] text-center  '>
      
      <h1 className=' items-center  text-gray font-semibold text-[2.125em] sm:text-[2.188em] md:text-[2.25em] lg:text-[2.375em] leading-snug
       '>
      <span>We provide Addis Ababa City With Premiere audio</span>
          <br className="lg:block hidden" />
          <span>   equipment  rentals   </span>
          <br className="hidden xs:block md:block" />
      
           
           </h1>

          <p className='text-gray xs:text-[1.125em]  sm:text-[1.188em] md:text-[1.25em] lg:text-[1.313em] 
           leading-[2rem] '>Here's what we offer.</p>
     
     </div>
      <div className=' relative  mt-4.75 mx-auto my-70 w-[94%] flex flex-wrap items-center justify-between px-[3%] '>
      
      <EventCard 
          image={prog1}
          title="Corporate Events"
          description="We offer competitive pricing and quality audio equipment specific to your needs. Call or email for a custom order today!"
        />

      <EventCard 
          image={prog2}
          title="Wedding & Party"
          description="Looking for audio equipment for your special day? Check out our custom wedding rental packages available in the Addis Ababa City area!"
        />
     
      <EventCard 
          image={prog2} // Assuming you might want to replace this with another image
          title="Church Events"
          description="We offer competitive pricing and quality audio equipment specific to your needs. Call or email for a custom order today!"
        />   
      
    </div>
  </section>
  
  );
};

export default Service;
