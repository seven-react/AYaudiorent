import React from 'react'
import ScrollIcon from "@icons/scroll_Icon.svg?react";
import {  basicPackage,
  standardPackage,
  standardSub,
  proPackage,
  wirelessMic,
  ceremonyPackage,} from "@images";
import {Footer,FooterWidgets} from '@components';
// PackageCards Component
const PackageCards = ({ image, title, includes, addOn,  descriptive }) => (
  <div className="relative w-full items-center py-[3.69375rem] justify-center text-gray">
    <div className="text-center">
      <h2 className="text-[2.125rem]  leading-[2.75rem] font-semibold">
        {title}
      </h2>
    </div>

    <div className="mb-[0.9375rem]">
      <img
        src={image}
        alt="Ceremony"
        className="block mx-auto w-[400px] h-[267px]"
      />
    </div>

    <div className="flex flex-col  gap-7 items-center justify-center lg:flex-row leading-loose text-center text-[0.875rem] lg:leading-[1.66rem]">
      <div className=" w-full lg:w-1/2 px-[1%] ">
        <p>
          <p className="font-semibold">Includes</p>
          
          {includes.map((item, index) => (
            <span key={index}>
            {item === "OR" ? (
                <span className="text-[0.875rem] ">{item}<br /></span>
              ) : (
                <>– {item}<br /></>
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="w-1/2 px-[1%]">
        <p >
          <p className="font-semibold">Add On</p> 
          
          {addOn.map((item, index) => (
            <span key={index}>
              + {item}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
     {/* Conditional descriptive section */}
     {descriptive && (
      <div className="mt-4 mb-2 text-gray text-center text-[14px] leading-[1.625rem]">
        <p>
          {Array.isArray(descriptive)
            ? descriptive.map((text, idx) => (
                <span key={idx}>
                  {text}
                  <br />
                </span>
              ))
            : descriptive.split('!').map((text, idx) => (
                <span key={idx}>
                  {text}
                  {idx === 0 && '!'}
                  <br />
                </span>
              ))}
        </p>
      </div>
    )}

    <div className="flex flex-col  gap-7 items-center justify-center lg:flex-row text-center">
      <div className="w-1/2 px-[1%]">
        <div className="text-center pt-[0.9375rem]">
          <button className="text-[0.75rem] py-2.5 px-[0.9375rem] font-semibold bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)] rounded">
            Order By Phone
          </button>
        </div>
      </div>

      <div className="w-1/2 px-[1%]">
        <div className="text-center pt-[0.9375rem]">
          <button className="text-[0.75rem] py-2.5 px-[0.9375rem] font-semibold bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)] rounded-[0.1875rem]">
            Order By Email
          </button>
        </div>
      </div>
    </div>
   
  
  </div>
);

const WeedingEvents = () => {
  // Scroll handler function to scroll down by 5rem
  const handleScroll = () => {
    window.scrollBy({
      top: 514, // Adjust this value (5rem = 80px, considering 16px base font size)
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full h-full ">
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
        <h2 className="lg:leading-[3.875rem] mb-[0.5rem] leading-tight   text-[3rem] lg:text-[3.375rem] font-semibold text-gray">
          <span>Wedding Audio Equipment Rental</span>
        </h2>
      </div>

      {/* Ceremony Package Section */}
      <div className="relative mt-4.2 mx-auto my-70 w-full flex flex-wrap justify-between px-[7%]">
        <PackageCards
          image={ceremonyPackage}
          title="Ceremony Package $149"
          includes={[
            "2 JBL EON 610 Speakers",
            "2 Speaker Stands",
            "6 Channel Mixer",
            "1 Wireless Headset or Lapel or Handheld Microphone",
            "1 Aux Cable",
          ]}
          addOn={[
            "$150 for Sound Tech to run Ceremony",
            "$50 for High Definition Ceremony Recording MP3",
          ]}
        />

        <PackageCards
          image={standardPackage}
          title="Standard Package $149"
          includes={[
            "2 JBL PRX 715  Speakers",
            "6 Channel Mixer",
            " (10 ch available upon request)",
            "1 Wired Microphone",
            "1 Aux Cable",
          ]}
          addOn={[
            "  $50 Subwoofer",
            "  $50-$100 for Lighting",
            "  $39 Wireless Mic",
          ]}
          descriptive={"Plug in multiple microphones, music sources, while being able to easily control each input with this 6 channel mixer. These speakers are twice the size of the basic package and are great for bands and dances. So easy you could set it up yourself!"}
        />

        <PackageCards
          image={standardSub}
          title={"Standard Sub Package $199"}
          includes={[
            "2 JBL PRX 715 Speakers",
            "1 JBL PRX 818XLFW",
            " 8 Channel Mixer",
            "1 Wired Microphone",
            " 1 Aux Cable",
          ]}
          addOn={[
            " $50 Subwoofer",
            " $50-$100 for Lighting",
            " $39 Wireless Mic",
          ]}
          descriptive={"Also included is a subwoofer to help bring full range sound for bands and dances. This will greatly energize your guests at a dance."}
        />

        <PackageCards
          image={proPackage}
          title="Pro Package $299"
          includes={[
            "2 JBL PRX 715 Speakers",
            " 1 JBL PRX 818XLFW Subwoofer",
            " 8 Channel Mixer",
            " 1 Wireless Mic",
          ]}
          addOn={["1 Aux Cable", "2 Sound Activated Led Lights"]}
          descriptive={["This is an all inclusive wedding audio equipment rental package for saving on the budget!",
            "In addition to the perks of the Standard Sub Package, this package brings flexibility with a wireless mic and lights to energize guests on the dance floor."]}
          
        />
        <PackageCards
          image={basicPackage}
          title={"Basic Package $99"}
          includes={[
            "2 JBL EON 610 Speakers",
            "2 Speaker Stands",
            "1 Wired Microphone",
            " 1 Aux Cable",
          ]}
          addOn={[
            " $50 Basic Lighting",
            "$50 for Subwoofer",
            " $39 Wireless Mic",
            "$20 for 4CH Mixer",
          ]}

          descriptive={"Plug your phone / laptop into this system and use a wired mic for smaller settings. Great for meetings, weddings, background music and more."}
        
        />
        
           
        <PackageCards
          image={wirelessMic}
          title={"Wireless Mic $39"}
          includes={[
            "1 Shure Mic Handheld / Lapel",
            "OR",
            "1 Shure Wireless Transmitter",
          ]}
          addOn={["$10 for Countryman e6i Headset"]}
        />

<div className="text-[14px] text-gray leading-[1.6875rem] text-left">
		<p className="text-left pb-[1.625rem]">Browse through our simple&nbsp;and affordable wedding audio equipment rental packages 
      for your wedding. At Audio Rent KC, we specialize in making your wedding day run smoothly thanks to our 
      high-quality audio equipment. We offer everything from wireless microphones to an&nbsp;incredible&nbsp;
      sounding&nbsp;package of JBL speakers, subwoofer, lights, and more!</p>
<p className="text-left">Our standard package is our most popular wedding audio equipment rental available, so we 
  recommend going with that one if you are unsure as it has proven time and again to be an all-around great
   package with our clients. Feel free to give us a call at <a className="text-blue-100" href="te:9137307319">(913) 730-7319</a>&nbsp;or
    email us at <a className="text-blue-100" href="mailto:info@audiorentkc.com">info@audiorentkc.com</a>&nbsp;if you have any questions
     about our incredible wedding audio equipment rental packages!</p>
	</div>
      </div>
      <FooterWidgets/>
        <Footer/>
    </section>
  );
};

export default WeedingEvents;