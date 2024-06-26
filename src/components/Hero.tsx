// import React from 'react'
// import { hero, logo } from '../assets'

// const Hero = () => {
//   return (
//     <main className='h-[100vh] w-[100vw] bg-black max-container'>
//         <section>
//             <img className = "  h-[5rem]  ml-2"  src={logo} alt="logo" />
//         </section>

//         <section className='text-[#FFB300] font-tusker mt-5 md:flex gap-[2vw] mr-4 animate-fadeIn '>
//             <div className='text-[6rem] relative flex flex-1 justify-center  md:text-[13vw] md:basis-3/5 md:justify-end '>
//                 <h1 className=' bg-gradient-to-t from-black to-[#FFB300] h-[7.2rem] text-transparent bg-clip-text  md:h-[15vw] tracking-wider'>COMING</h1>
//                 {/* <div className='absolute bg-gradient-to-t from-black to-[#FFB300] inset-x-0  h-[100%]'></div> */}
//             </div>

//             <div className='text-[6rem] flex flex-1 justify-center relative  md:text-[13vw] md:basis-2/5 md:justify-start '>
//                 <h1 className='bg-gradient-to-t from-black to-[#FFB300] h-[7rem] text-transparent bg-clip-text md:h-[15vw] tracking-wider'>SOON</h1>
//             </div>
//         </section>

//         <section className='animate-slideInFromBottom'>
//             <img src={hero} alt="hero" className=' hidden md:block absolute bottom-0 h-[95vh] right-[12vw] ' />
//         </section>

//         <section className='text-white font-clash  mt-10 pl-4 md:pl-10 z-10 animate-slideInFromLeft'>
//             <h2 className='font-medium text-3xl'>Heard of <span className='text-[#FFB300]'>Celebrity to Consumer </span>Platform?</h2>

//             <h1 className='text-5xl my-2 md:my-4'>STAY TUNED!</h1>

//             <h2 className='text-3xl text-[#FFB300]'>India's first exclusive marketplace</h2>

//         </section>

//         <section className='ml-4 my-2 md:ml-10'>
//             <button className='font-medium text-white bg-[#FFB300] text-2xl md:text-4xl md:px-10 md:pb-2   rounded-lg p-1 my-4 '>Subscribe</button>
//         </section>

//     </main>
//   )
// }

// export default Hero

import { useState } from "react";
import { hero } from "../assets";

const Hero = () => {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
        setTimeout(()=>{
            setIsVisible(!isVisible);
        }, 9999)
        
    };

  return (
    <main className={`h-screen w-screen bg-black max-container overflow-hidden relative  ${isActive ? 'animate-slideOutFromBottom':'bg-black'} ${isVisible ? `block` : `hidden`}`} onClick={handleClick}>
      
      <div className="h-[4rem] w-full bg-transparent"></div>

      <section className="text-[#FFB300] font-tusker mt-5 lg:flex gap-[2vw] ml-4 mr-4 animate-fadeIn ">
        <div className="text-[22vw] relative flex flex-1 justify-center  lg:text-[13vw] lg:basis-3/5 lg:justify-end ">
          <h1 className=" bg-gradient-to-t from-black to-[#FFB300] h-[26.5vw] text-transparent bg-clip-text  lg:h-[16vw] tracking-wider ">
            COMING
          </h1>
          {/* <div className='absolute bg-gradient-to-t from-black to-[#FFB300] inset-x-0  h-[100%]'></div> */}
        </div>

        <div className="text-[22vw] flex flex-1 justify-center relative  lg:text-[13vw] lg:basis-2/5 lg:justify-start ">
          <h1 className="bg-gradient-to-t from-black to-[#FFB300] h-[25.5vw] text-transparent bg-clip-text lg:h-[16vw] tracking-wider">
            SOON
          </h1>
        </div>
      </section>

      <section className="overflow-hidden z-10 ">
        <img
          src={hero}
          alt="hero"
          className="absolute bottom-0 right-[12vw] lg:h-[95vh] lg:right-0 animate-slideInFromBottom   md:w-[70vw] w-[80vw] "
        />
      </section>

      <section className="text-white font-clash mt-10 pl-4 lg:pl-10 animate-slideInFromLeft bg-black bg-opacity-60 absolute bottom-28 lg:relative lg:bottom-0 lg:bg-transparent w-full">
        <h2 className="font-medium text-3xl">
          Heard of <span className="text-[#FFB300]">Celebrity to Consumer</span>{" "}
          Platform?
        </h2>

        <h1 className="text-5xl my-2 lg:my-4">STAY TUNED!</h1>

        <h2 className="text-3xl text-[#FFB300]">
          India's first exclusive marketplace
        </h2>

        
      </section>

      <section className="my-2 absolute bottom-4 ml-4 lg:ml-10  lg:relative lg:bottom-0">
          <button className="font-medium text-white bg-[#FFB300] text-2xl lg:text-4xl lg:px-10 lg:pb-2 rounded-lg p-1 my-4 animate-slideInFromLeft ">
            Subscribe
          </button>
        </section>
    </main>
  );
};

export default Hero;
