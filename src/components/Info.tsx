// import React, { useRef } from 'react';
// import { aboutUs, ourPlatform } from "../assets";

// const Info = ({ isVisbile, aboutUsRef }) => {
//   return (
//     <main className="overflow-hidden mx-8 mt-24 font-montserrat">
//       <section ref={aboutUsRef} className="lg:flex lg:flex-row lg:space-x-12 lg:mb-12 lg:max-h-[50vh]">
//         <div className={`bg-orange-700 rounded-2xl bg-gradient-to-r from-[#C13F01] to-[#EE8623] p-4 lg:p-6 text-white basis-2/3 lg:rounded-3xl ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom'}`}>
//           <h1 className="font-tusker text-3xl mb-2 lg:text-[3rem] lg:leading-relaxed">ABOUT US</h1>
//           <p className="font-clash text-xs lg:text-xl">
//             Nivas has been the forerunner since 1991 for on-demand & sustainable
//             fashion in retail and enterprise industries. Nivas has manufactured
//             and shipped millions of pieces for large internationally recognised
//             retails labels since 1991. Nivas manufactures not only for retail
//             customers but also for enterprise customers in various industries
//             like Airlines, Schools and Hospitals and Military Uniforms. <br />{" "}
//             <br />
//             We are now pivoting to revolutionise the e-commerce industry by
//             bridging the true aspirations of everyday consumers in fashion and
//             beauty.
//           </p>
//         </div>

//         <div className={` basis-1/3 h-[50vh] hidden lg:block ${isVisbile ? 'lg:animate-none' : 'lg:animate-slideInFromBottom'}`}>
//           <img src={aboutUs} alt="aboutUs" className="hidden lg:block object-cover h-full w-full lg:rounded-2xl" />
//         </div>
//       </section>

//       <section className={` flex gap-2 my-2 lg:hidden ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom5'}`}>
//         <div className="basis-1/2 ">
//           <img
//             src={aboutUs}
//             alt="aboutUs"
//             className=" object-cover h-full w-full rounded-3xl"
//           />
//         </div>
//         <div className="basis-1/2 ">
//           <img src={ourPlatform} alt="ourPlatform" className="rounded-3xl" />
//         </div>
//       </section>

//       <section className="lg:max-h-[50vh] lg:flex lg:space-x-12 ">
//         <div className={` basis-2/5 overflow-hidden ${isVisbile ? 'animate-none' : 'lg:animate-slideInFromBottom7'}`}>
//           <img src={ourPlatform} alt="aboutUs" className="hidden lg:block object-cover h-full w-full lg:rounded-3xl" />
//         </div>

//         <div className={`bg-orange-700 rounded-2xl bg-gradient-to-r from-[#391A41] via-[#A51957] to-[#F5536B] p-4 lg:p-6  text-white basis-3/5 ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom7'}`}>
//           <h1 className="font-tusker text-3xl mb-2 capitalize lg:text-[3rem] lg:leading-relaxed">Our platform</h1>
//           <p className="font-clash text-xs lg:text-base">
//             Welcome to our exclusive fashion and beauty destination where the
//             stars  shine brightest and style knows no bounds. You are now
//             stepping into a realm where 'luxury' meets
//             affordability/accessibility*. Let us inspire you with a curated
//             selection of products that embody the essence of fashion and beauty,
//             handpicked from renowned labels worldwide. <br /> <br />
//             Feel empowered to express your unique style as you explore our
//             diverse range of offerings. Whether you're searching for the perfect
//             outfit or seeking the latest beauty must-haves, look no further as
//             we're here to elevate your look and ignite your confidence. <br />{" "}
//             <br />
//             Join us on this journey where every purchase is not just a
//             transaction but a step towards realising your style aspirations.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Info;


import { aboutUs, ourPlatform } from "../assets";

const Info = ({isVisbile, aboutUsRef}) => {
  return (
    <main ref = {aboutUsRef} className="overflow-hidden mx-8 mt-24 font-montserrat">
      <section className="lg:flex lg:flex-row lg:space-x-12 lg:mb-12 lg:max-h-[50vh]">
        <div  className={`bg-orange-700 rounded-2xl bg-gradient-to-r from-[#C13F01] to-[#EE8623] p-4 lg:p-6 text-white basis-2/3 lg:rounded-3xl ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom'}`}>
          <h1 className="font-tusker text-3xl mb-2 lg:text-[3rem] lg:leading-relaxed">ABOUT US</h1>
          <p className="font-clash text-xs lg:text-xl">
            Nivas has been the forerunner since 1991 for on-demand & sustainable
            fashion in retail and enterprise industries. Nivas has manufactured
            and shipped millions of pieces for large internationally recognised
            retails labels since 1991. Nivas manufactures not only for retail
            customers but also for enterprise customers in various industries
            like Airlines, Schools and Hospitals and Military Uniforms. <br />{" "}
            <br />
            We are now pivoting to revolutionise the e-commerce industry by
            bridging the true aspirations of everyday consumers in fashion and
            beauty.
          </p>
        </div>

        <div className={` basis-1/3 h-[50vh] hidden lg:block ${isVisbile ? 'lg:animate-none' : 'lg:animate-slideInFromBottom'}`}>
          <img src={aboutUs} alt="aboutUs" className="hidden lg:block object-cover h-full w-full lg:rounded-2xl" />
        </div>
      </section>

      <section className={` flex gap-2 my-2 lg:hidden ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom5'}`}>
        <div className="basis-1/2 ">
          <img
            src={aboutUs}
            alt="aboutUs"
            className=" object-cover h-full w-full rounded-3xl"
          />
        </div>
        <div className="basis-1/2 ">
          <img src={ourPlatform} alt="ourPlatform" className="rounded-3xl" />
        </div>
      </section>

      <section className="lg:max-h-[50vh] lg:flex lg:space-x-12 ">
      <div className={` basis-2/5 overflow-hidden ${isVisbile ? 'animate-none' : 'lg:animate-slideInFromBottom7'}`}>
          <img src={ourPlatform} alt="aboutUs" className="hidden lg:block
          object-cover h-full w-full lg:rounded-3xl" />
        </div>

        <div className={`bg-orange-700 rounded-2xl bg-gradient-to-r from-[#391A41] via-[#A51957] to-[#F5536B] p-4 lg:p-6  text-white basis-3/5 ${isVisbile ? 'animate-none' : 'animate-slideInFromBottom7'}`}>
          <h1 className="font-tusker text-3xl mb-2 capitalize lg:text-[3rem] lg:leading-relaxed">Our platform</h1>
          <p className="font-clash text-xs lg:text-xl">
            Welcome to our exclusive fashion and beauty destination where the
            stars  shine brightest and style knows no bounds. You are now
            stepping into a realm where 'luxury' meets
            affordability/accessibility*. Let us inspire you with a curated
            selection of products that embody the essence of fashion and beauty,
            handpicked from renowned labels worldwide. <br /> <br />
            Feel empowered to express your unique style as you explore our
            diverse range of offerings. Whether you're searching for the perfect
            outfit or seeking the latest beauty must-haves, look no further as
            we're here to elevate your look and ignite your confidence. <br />{" "}
            <br />
            Join us on this journey where every purchase is not just a
            transaction but a step towards realising your style aspirations.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Info;