import React, { useState } from 'react';
import { facebookLogo, instagramLogo, logoYellow, twitterLogo } from '../assets';
import JoinUsPopupComponent from './joinUsPopup';

const Footer = ({ scrollToAboutUs, setPopupOpen, openPopup, scrollToBrandEnquiry, scrollToCareers, scrollToInvestorRelations }) => {
  const handleCareersClick = () => {// Scroll to the About Us section
    openPopup('joinUs');
    setPopupOpen('joinUs'); // Open the Join Us popup
  };





  const closePopup = () => {
    setPopupOpen('null');
  };



  return (
    <footer className="bg-[#171717] my-8 p-4 w-[80vw] rounded-3xl mx-auto xl:h-[50vh] z-0">



      <section className="flex flex-row justify-between items-center">
        <div className="e">
          <img
            src={logoYellow}
            alt="logo but in yellow"
            className="sm:h-[3rem] h-[1.5rem] -500 object-cover md:ml-4"
          />
        </div>
      </section>

      <section className="">
        <section className="md:flex md:flex-row md:justify-start sm:ml-8 my-6 ml-[1.4vw]">
          <section className="flex flex-row sm:justify-start text-[#9C9C9C] md:gap-[4rem] justify-normal gap-[2rem]">
            <div className="text-[#D9D9D9] xl:text-[1vw]">
              Company
              <ul className="text-xs xl:text-[0.75vw] xl:leading-[1vw] font-thin">
                <li>
                  <button onClick={scrollToAboutUs} className="hover:underline">
                    About us
                  </button>
                </li>
                <li>
                  <button onClick={scrollToCareers} className="hover:underline">
                    Careers
                  </button>
                </li>
                <li>
                  <button className="hover:underline" >Team</button>
                </li>
              </ul>
            </div>

            <div className="text-[#D9D9D9] xl:text-[1vw]">
              Contact
              <ul className="text-xs font-thin xl:text-[0.75vw] xl:leading-[1vw]">
                <li>
                  <button onClick={scrollToBrandEnquiry} className='hover:underline'>Brand Enquiry</button>
                </li>
                <li>
                  <button onClick={scrollToInvestorRelations} className='hover:underline'>
                    Investor Relations
                  </button>
                </li>
              </ul>
            </div>
          </section>

          <section className="my-6 md:my-0 z-0">
            <div className="w-80% h-[15vh] bg-red-900 md:w-[25vw] lg:absolute lg:right-[12.5vw] rounded-xl xl:h-[25%] md:ml-[19vw] md:h-[10vh] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.98365565059!2d77.63590237467258!3d12.908771916253468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491170cf5f3%3A0x353519d16769a460!2s548%2C%2014th%20Main%20Rd%2C%20Sector%203%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1719821380987!5m2!1sen!2sin"
                className="object-cover h-full w-full rounded-xl"
                loading="lazy"
              ></iframe>
            </div>
          </section>




        </section>
      </section>

      <section className="text-white font-thin text-[0.5rem] lg:pt-8 pb-4 xl:pt-[20vh]  ">
        <section className="flex flex-row justify-center space-x-4 ">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </section>

        <div className="text-center pt-1 "> &copy; 2024 All Rights Reserved to Naaysu Technologies Pvt ltd</div>
      </section>
    </footer>
  );
};

export default Footer;
