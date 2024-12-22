import React from 'react';
import StarIcon from '@icons/star-icon.svg?react';
import DiamondIcon from '@icons/diamond-icon.svg?react';
import MoneyIcon from '@icons/money-icon.svg?react';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className='flex flex-col items-center basis-full  xs:basis-full sm:basis-full lg:basis-[30%] m-0 text-center'>
      <Icon className="h-8 w-8 text-blue-700 lg:mb-3 sm:mb-0 xs:mb-0" alt={`${title} Icon`} />
      <h2 className='font-semibold text-[2.125em] leading-44 text-gray mb-0'>
        {title}
      </h2>
      <p className='font-medium text-[14px] leading-[26px]  mt-[0.5rem] mb-0 text-lighter-gray'>
        {description}
      </p>
    </div>
  );
};
const About = () => {
  return (
    <div  >
      {/* Title Section */}
      <div className='relative mt-[70px] mb-[30px] text-center text-gray'>
        <h1 className='font-semibold text-[2.125em] leading-44 '>
          <span>Why rent from 
          <br className='lg:hidden sm:hidden '/>AY Rental?</span>
          <br className="lg:block hidden" />
        </h1>
        <h4 className='font-semibold text-[1.125em] leading-[2rem]'>
          We care about your event just as 
          <br className="xs:block sm:hidden" />much as you do.We 
          <br className="xs:hidden lg:hidden sm:block md:block" />provide a 
          <br className="xs:block sm:hidden lg:hidden hidden" />seamless rental and booking 
          <br className="xs:block lg:hidden sm:hidden" /> process and 
          <br className="xs:hidden sm:block md:block lg:block" />pride ourselves on 
          <br className="xs:block sm:hidden lg:hidden" />these three things.
        </h4>
      </div>

      {/* Flex Container */}
      <div className='relative h-90 mt-[76px] px-[3.45%] w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-y-7 lg:gap-y-0 items-center justify-between text-light-gray'>

         {/* About Cards */}
         <AboutCard 
          icon={StarIcon}
          title="Dependable"
          description="We treat your event as if it was our own, which means we put it at a top priority. We want the equipment setup and functioning on time with seamless communication throughout the whole process."
        />
        <AboutCard 
          icon={DiamondIcon}
          title="Quality Equipment"
          description="We provide the best name brand equipment in the industry such as JBL, Shure, QSC, and others. We believe in these companies to provide the quality that your event can rely on."
        />
        <AboutCard 
          icon={MoneyIcon}
          title="Competitive"
          description="When it comes to our top quality equipment and services, we provide some of the best rates in Kansas City."
        />
      </div>
    </div>
  );
}

export default About;

