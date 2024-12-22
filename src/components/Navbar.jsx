import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@icons/logo.svg?react"
import MenuIcon from "@icons/menu.svg?react";
import CloseIcon from "@icons/close.svg?react";
import throttle from "lodash.throttle";
import clsx from "clsx";




const navLinks = [
  { to: "/", label: "Home" },
  { to: "/WeedingEvents", label: "Weeding Events" },
  { to: "/church", label: "Church Events" },
  { to: "/corporate", label: "Corporate Events" },
  { to: "/blogs", label: "Band Equipments" },
  
  { to: "/faqs", label: "FAQs" }  
];

const NavbarLink = ({ to, children, sticky, isStickyBlue, isActive }) => (
  <li className="relative group">
    <Link
      to={to}
      className={clsx("inline-block my-1 transition-colors duration-300", {
        "text-white group-hover:blue": !isStickyBlue && !sticky,
        "text-black group-hover:blue": sticky,
        "text-white group-hover:white": isStickyBlue,
        "font-bold": isActive,
      })}
      aria-label={`Go to ${children}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
    <span
      className={clsx(
        "absolute left-0 bottom-0 h-[0.125rem] w-full transition-transform duration-300",
        {
          "bg-white": isStickyBlue || !sticky,
          "bg-blue-100": sticky,
        },
        "scale-x-0 group-hover:scale-x-100"
      )}
    />
  </li>
);

const Navbar = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [isStickyBlue, setStickyBlue] = useState(false);
  const [isSideMenuOpen, setMenu] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setSticky(window.scrollY > 30);
      setStickyBlue(window.scrollY > 2800);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ to, label }) =>
      label === "Contact Us" && !isMobile ? null : (
        <NavbarLink
          key={label}
          to={to}
          sticky={sticky}
          isStickyBlue={isStickyBlue}
          isActive={location.pathname === to}
        >
          {label}
        </NavbarLink>
      )
    );
  

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full flex  justify-center overflow-hidden   
       p-[1.3rem] px-[6.5%] z-50 shadow-sm ${
         isStickyBlue
           ? "bg-blue-100 shadow-md"
           : sticky
           ? "bg-primary"
           : "bg-transparent"
       }`}
    >
      <div className=" container flex justify-between  space-x-5 items-center">
    

        <div className="flex items-center sm:pr-0 lg:pr-[10%] ">
          <Logo alt="AY Audio Rental logo" className="w-9 h-9 xs:w-[1.21875rem] xs:h-[1.21875rem]  " />
          <p
            className={clsx(
              "text-[1.375rem] font-semibold md:pr-0 cursor-pointer flex ml-1",
              {
                "text-black": sticky && !isStickyBlue,
                "text-white": !sticky && isStickyBlue
              
              }
            )}
          >
           <span className="xs:block "> AY audiorental</span>
          </p>
        </div>
       
        {/* Desktop Links */}

        <ul className=" hidden  lg:block xl:flex flex-row w-full   justify-between text-[0.95rem] font-bold">
          {renderLinks()}
          <li>
            <Link to="/Contact">
              <button
                className={clsx(
                  "py-3 px-4 rounded-[4px] text-[0.875rem] leading-[0.625rem] transition-colors duration-300",
                  {
                    "text-white bg-inherit hover:border-y-[1px] border-y-white":
                      isStickyBlue,
                    "bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)]":
                      !isStickyBlue,
                  }
                )}
                aria-label="Navigate to Contact Us page"
              >
                Contact us
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Sidebar */}
        
                             
             <MenuIcon
        
          onClick={() => setMenu(true)}
          className="text-3xl cursor-pointer  lg:hidden ml-auto"
          
          aria-label="Open Menu"
          aria-expanded={isSideMenuOpen}
        />

        <div
          className={clsx(
            "fixed h-full w-1/2 lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform transform",
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <section className="bg-blue flex-col absolute right-0 top-0 h-screen p-8 z-50 w-56 flex">
            <CloseIcon
              onClick={() => setMenu(false)}
              className="text-3xl cursor-pointer mb-6 self-end"
              aria-label="Close Menu"
              aria-expanded={!isSideMenuOpen}
            />
           <ul className="flex flex-col space-y-4 ">
            {renderLinks(true)}
            <li>
              <Link to="/Contact">
                <button
                  className="py-2 px-4 bg-blue-100 text-white rounded-md hover:bg-blue-950"
                  aria-label="Navigate to Contact Us page"
                >
                  Contact us
                </button>
              </Link>
            </li>
          </ul>
          </section>
          
        </div>
        
      </div>
      
    </nav>
  );
};

export default Navbar;