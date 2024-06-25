import React from 'react'
import { hero, logo } from '../assets'


const Hero = () => {
  return (
    <main className='h-[100vh] w-[100vw] bg-black  max-container'>
        <section>
            <img className = "  h-[5rem]  ml-2"  src={logo} alt="logo" />
        </section>

        <section className='text-[#FFB300] font-tusker mt-5'> 
            <div className='text-[6rem] relative flex flex-1 justify-center '>
                <h1 className=' bg-gradient-to-t from-black to-[#FFB300] h-[7.2rem] text-transparent bg-clip-text'>COMING</h1>
                {/* <div className='absolute bg-gradient-to-t from-black to-[#FFB300] inset-x-0  h-[100%]'></div> */}
            </div>
            
            <div className='text-[6rem] flex flex-1 justify-center relative'>
                <h1 className='bg-gradient-to-t from-black to-[#FFB300] h-[7rem] text-transparent bg-clip-text'>SOON</h1>
            </div>
        </section>

        <section>
            {/* <img src={hero} alt="hero" className='absolute  bottom-0 ' /> */}
        </section>

        <section className='text-white font-clash  mt-10 pl-4'>
            <h2 className='font-medium text-3xl'>Heard of <span className='text-[#FFB300]'>Celebrity to Consumer </span>Platform?</h2>

            <h1 className='text-5xl my-2'>STAY TUNED!</h1>

            <h2 className='text-3xl text-[#FFB300]'>India's first exclusive marketplace</h2>

        </section>

        <section className='ml-4 my-2'>
            <button className='font-medium text-white bg-[#FFB300] text-2xl rounded-lg p-1 my-4 '>Subscribe</button>
        </section>


    </main>
  )
}         

export default Hero