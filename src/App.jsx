import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer, FooterWidgets, Navbar } from "@components";  // Shared components
import { Contact, WeedingEvents } from "@pages";  // Pages
import { Hero, Service, Banner, About, Testimonials, BookNow } from "@home";  // Home page components

// Create a browser router with routes defined
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="bg-heroImg bg-no-repeat bg-cover w-full h-hero-sm md:h-hero-md lg:h-hero-lg">
          <Hero />
        </div>
        <Service />
        <Banner />
        <About />
        <Testimonials />
        <BookNow />
        <Outlet />  {/* This is where nested routes will render */}
        <FooterWidgets />
        <Footer />
      </>
    ),
  },
  {
    path: "/WeedingEvents",
    element: (
      <>
        <Navbar />
        <div className="bg-weeding bg-[bottom_] bg-no-repeat bg-cover w-full h-weeding-sm md:h-weeding-md lg:h-weeding-lg">
          <WeedingEvents />
        </div>
  
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <div className=" bg-heroImg bg-no-repeat bg-cover w-full h-[22rem]">
        {/*  h-hero-sm md:h-hero-md lg:h-hero-lg */}
          
          <Contact />
         
        </div>
     
      </>
    ),
  },
]);

// App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
