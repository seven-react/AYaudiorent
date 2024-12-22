import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-Eerie-Black text-white py-5">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center xs:items-start sm:items-start">
      {/* Left Section */}
      <div className="text-center ">
        
        <p className=" lg:mt-1  text-[0.75rem] font-400 leading-[1.375rem]">© 2024 AY Audio Rental. All rights reserved.</p>
      </div>

      
      {/* Right Section (Social Icons) */}
      <div className="lg:mt-1 mt-7 md:mt-0 flex space-x-4 font-400 leading-[1.25rem] text-[1.25em]">
        <a href="#facebook" aria-label="Facebook" className="hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" aria-label="Twitter" className="hover:text-blue-400">
          <i className="fab fa-twitter fa-x-twitter"></i> 
        </a>
        <a href="#instagram" aria-label="Instagram" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;

