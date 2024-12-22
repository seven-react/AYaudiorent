import React from 'react';

const FooterWidgets = () => {
  return (
    <footer className=" bg-gunmetal text-white py-10 ">
        
        <div className="container xs:pb-[5.5rem] mx-auto px-4">
      <div className="flex flex-col   sm:flex-row gap-[4.5rem] md:gap-[6rem] lg:gap-[6rem]  ">
      
        {/* location section */}
        <div className="py-1 text-[14px] ">
        <h4 className="font-semibold  leading-[32px] mb-4">Location</h4>
            <div className="mb-4">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835104495316!2d-94.66144638467853!3d38.98223127955671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f3b7647f4e9b%3A0xf87f5f0fbb019d05!2s5908%20W%2059th%20Terrace%2C%20Mission%2C%20KS%2066202!5e0!3m2!1sen!2sus!4v1606794893019!5m2!1sen!2sus"
                width="300"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="border border-gray-700"
              ></iframe>
            </div>

            <div className='font-400 leading-[26px] text-[14px]'>
              <p>5908 W 59th Terrace</p>
              <p>Mission, Kansas 66202</p>
              <p>(913) 730-7319</p>
              <p>info@audiorentkc.com</p>
            </div>
        
        </div>
        
         {/* Sitemap Section */}
         <div className="text-[14px] ">
            <h4 className="font-semibold  mb-6">Sitemap</h4>
            <ul className='font-400 leading-[26px]'>
              <li className="mb-2 hover:text-white"><a href="#">Audio Rental</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Info</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Contact Us</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Privacy Policy</a></li>
              <li className="mb-2 hover:text-white"><a href="#">sitemap</a></li>
            
            </ul>
          </div>
          
      </div>
      
      
    </div>
    
    
    </footer>
  );
}

export default FooterWidgets;
