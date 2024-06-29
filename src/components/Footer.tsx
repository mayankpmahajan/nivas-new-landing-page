import React from "react";
import {
  facebookLogo,
  instagramLogo,
  logoYellow,
  map,
  twitterLogo,
} from "../assets";

// const Footer = () => {
//   return (

//     <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//         <div class="sm:flex sm:items-center sm:justify-between">
//             <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
//                 <img src={logoYellow} class="h-10  object-cover" alt="Nivas Logo" />
//                 <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white object-cover"></span>
//             </a>
//             <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4 ">

//                 <li>
//                     <a href="#" class="hover:underline me-4 md:me-6 text-xl text-white bg-black">
//                         Follow Us
//                     </a>
//                 </li>

//                 <li>
//                     <a href="#" class="hover:underline me-4 md:me-6">
//                         <img src={facebookLogo} alt="facebookLogo" className='object-cover bg-black'/>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" class="me-4 md:me-6">
//                         <img src={twitterLogo} alt="twitterLogo" className='object-cover'/>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" class="hover:underline me-4 md:me-6">
//                         <img src={instagramLogo} alt="instagramLogo" />
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Nivas™</a>. All Rights Reserved.</span>

//     </div>
//   )
// }

// export default Footer

// import React from 'react';
// import { facebookLogo, instagramLogo, logoYellow, twitterLogo } from '../assets';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white w-full py-8">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//           <div className="flex items-center mb-6 sm:mb-0">
//             <img src={logoYellow} alt="Nivas Logo" className="h-10 object-contain mr-3" />
//             <span className="text-2xl font-semibold">nivas</span>
//           </div>
//           <div className="flex flex-col sm:flex-row sm:items-center">
//             <div className="mb-6 sm:mb-0 sm:mr-8">
//               <h3 className="text-lg font-semibold mb-2">Company</h3>
//               <ul>
//                 <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">Team</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">Links</a></li>
//               </ul>
//             </div>
//             <div className="sm:mr-8">
//               <h3 className="text-lg font-semibold mb-2">Contact</h3>
//               <ul>
//                 <li className="mb-2"><a href="#" className="hover:underline">Help & Support</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">Partner with us</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">Ride with us</a></li>
//                 <li className="mb-2"><a href="#" className="hover:underline">See all cities</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:underline">
//                   <img src={facebookLogo} alt="Facebook Logo" className="h-6 object-contain" />
//                 </a>
//                 <a href="#" className="hover:underline">
//                   <img src={twitterLogo} alt="Twitter Logo" className="h-6 object-contain" />
//                 </a>
//                 <a href="#" className="hover:underline">
//                   <img src={instagramLogo} alt="Instagram Logo" className="h-6 object-contain" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className="my-6 border-gray-700" />
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//           <span className="text-sm text-center sm:text-left">© 2024 <a href="https://flowbite.com/" className="hover:underline">Nivas™</a>. All Rights Reserved.</span>
//           <div className="mt-4 sm:mt-0">
//             <a href="#" className="text-sm text-gray-500 hover:underline mr-4">Privacy Policy</a>
//             <a href="#" className="text-sm text-gray-500 hover:underline">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-black my-8  p-4 w-[80vw] rounded-3xl mx-auto xl:h-[27vh]">
      <section className="flex flex-row  justify-between  items-center ">
        <div className="e">
          <img
            src={logoYellow}
            alt="logo but in yellow"
            className="sm:h-[3rem] h-[1.5rem] -500 object-cover md:ml-4"
          />
        </div>

        <section>
          <ul className="flex flex-row  w-[40vw] sm:w-[60vw] justify-evenly md:w-[30vw] xl:w-[16.4vw]">
            <li className="sm:text-[1rem] text-white my-auto xl:text-xl text-[0.75rem]">Follow us</li>

            <li>
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="sm:h-[2rem] h-[1.5rem]"
              />
            </li>

            <li>
              <img src={instagramLogo} alt="instagram logo" className="sm:h-[2rem] h-[1.5rem]"/>
            </li>

            <li>
              <img src={twitterLogo} alt="twitter logo" className="sm:h-[2rem] h-[1.5rem]" />
            </li>
          </ul>
        </section>
      </section>

      <section className="">

        <section className="md:flex md:flex-row md:justify-start sm:ml-8 my-6 ml-[1.4vw] ">
          <section className="flex flex-row sm:justify-start text-white md:gap-[4rem] justify-normal gap-[2rem]">
            <div className="  xl:text-[1vw]">
              Company
              <ul className=" text-xs xl:text-[0.75vw] xl:leading-[1vw] font-thin">
                <li>About us</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Links</li>
              </ul>
            </div>

            <div className=" xl:text-[1vw]">
              Contact
              <ul className="text-xs font-thin xl:text-[0.75vw] xl:leading-[1vw]">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                <li>See all cities</li>
              </ul>
            </div>
          </section>


          <section className="my-6 md:my-0">
            <div className="w-80% h-[15vh] bg-red-900 md:w-[25vw] lg:absolute lg:right-[12.5vw] rounded-xl xl:h-[10%] md:ml-[19vw] md:h-[10vh]">
                <img src={map} alt="map" className="object-cover h-full w-full rounded-xl" />
            </div>
          </section>

        </section>
      </section>

      <section className="text-white font-thin text-[0.5rem] lg:pt-8 pb-4 xl:pt-20 xl:text-sm">
        <section className="flex flex-row justify-center space-x-4">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </section>

        <div className="text-center pt-1 "> &copy; All Rights Reserved</div>
      </section>
    </footer>
  );
};

export default Footer;
