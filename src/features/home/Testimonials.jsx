import React, {useState, useEffect} from 'react'
import QuoteIcon from '@icons/quote-icon.svg?react';

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    location: "San Francisco, USA",
    text: "Lorem ipsum dolor sit amet,  consectetur adipisicing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Velit et elit aliquip ea nostrud sit laborum nulla cillum veniam. Dolor eu incididunt exercitation voluptate id est sit ad veniam dolore incididunt. Lorem ad nulla nisi incididunt eiusmod pariatur Lorem nulla consectetur aute sint.",
    image: "model-1.jpg",
    rating:'3'
  },
  {
    id: 2,
    name: "Jane Doe",
    location: "San Francisco, USA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "model-2.jpg",
    rating:'5'
  },
  {
    id: 3,
    name: "Jane Doe",
    location: "San Francisco, USA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "model-3.jpg",
    rating:'4'
  },
  {
    id: 4,
    name: "Jane Doe",
    location: "San Francisco, USA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "model-4.jpg",
    rating:'4.5'
  },
  {
    id: 5,
    name: "Jane Doe",
    location: "San Francisco, USA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "model-5.jpg",
    rating:'5'
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track if auto-slide is paused

  // Automatically change the active testimonial every 5 seconds if not paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval); // Clear interval on component unmount or when isPaused changes
    }
  }, [isPaused]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

    // Calculate the height based on the currently active testimonial text length
    const currentTestimonial = testimonials[activeIndex];
    const dynamicHeight = currentTestimonial.text.split(" ").length * 0.20 + 10; // Example height calculation

  
  
    return (
   <div className='relative  '>
    <div className="text-center  mt-32  text-gray">

<h4 className=' font-semibold text-[2.125em] leading-44'>
   <span>See what our 
   <br className="xs:block lg:hidden sm:block md:block" />customers are 
    <br className="xs:block lg:hidden sm:block md:block" />saying.</span>
</h4>

</div>

{/* slider container */}
<div className="relative  mt-9  w-full h-80 flex justify-center items-center  ">
 
    <div className="w-full px-[5.7rem] ">
      
    <div className="relative overflow-hidden w-full h-80" style={{ height: `${dynamicHeight}rem` }}>
  <QuoteIcon className="absolute left-1/2 transform -translate-x-1/2 top-7 w-[53px] h-[53px] rounded-full border-2 border-[rgba(0,0,0,0.13)]" />
  
  {testimonials.map((testimonial, index) => (
    <div
      key={testimonial.id}
      className={` absolute w-full mt-[2rem] h-[15rem] items-center justify-center 
        text-center transition-transform duration-700 ease-in-out text-[1.5rem]
        ${activeIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
    >
      <p className="text-lg text text-lighter-gray leading-relaxed mt-[6.7rem]">
        {testimonial.text}
      </p>

      {/* Star Rating */}
      <div className="mt-3 flex justify-center space-x-1 text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-3xl ${testimonial.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}>
            ★
          </span>

          
        ))}
      </div>
        {/* Customer Name and Location */}
        <div className="flex flex-col items-center mt-3 ">
                <h3 className="mt-2 text-[1rem] italic text-lighter-gray">{testimonial.name}</h3>
                <h4 className="italic text-lighter-gray text-[12px] ">{testimonial.location}</h4>
              </div>
            
    </div>
  ))}
</div>


         {/* cirle buttons */}
    <div className="flex justify-center mt-8 space-x-2 ">
  {testimonials.map((_, index) => (
     <button
     key={index}
     onClick={() => handleDotClick(index)}
     onMouseEnter={() => setIsPaused(true)} // Pause auto-slide on hover
     onMouseLeave={() => setIsPaused(false)} // Resume auto-slide on mouse leave
     className={`cursor-pointer w-[10px] h-[10px] rounded-full border border-[#333] transition-colors duration-200 ease-linear
       ${activeIndex === index ? 'bg-black' : 'bg-transparent'}
     `}
   />
  ))}
</div>
    </div>

</div>
   </div>
  )
}

export default Testimonials;
