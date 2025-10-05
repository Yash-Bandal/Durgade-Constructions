// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const lineRef = useRef(null);
//   const horizRef = useRef(null);
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null); // for main content reveal

//   useEffect(() => {
//     // Connector line animation
//     const lineTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     lineTl.fromTo(
//       lineRef.current,
//       { scaleY: 0, transformOrigin: "top center" },
//       { scaleY: 1, duration: 0.7, ease: "power2.out" }
//     ).fromTo(
//       horizRef.current,
//       { scaleX: 0, opacity: 0, transformOrigin: "center" },
//       { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
//       "-=0.3"
//     );

//     // Main content reveal
//     gsap.fromTo(
//       contentRef.current,
//       { autoAlpha: 0, y: 30 },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <footer
//       ref={sectionRef}
//       className="relative h-[95vh] bg-[#111113] text-white mx-8 mt-8 overflow-hidden"
//     >
//       {/* Connector line */}
//       {/* Connector line and logo */}
//       <div className="absolute inset-x-0 top-0 flex flex-col items-center z-10">
//         {/* vertical line */}
//         <div
//           ref={lineRef}
//           className="w-px h-[16vh] sm:h-[16vh] md:h-[20vh] bg-amber-600"
//         ></div>

//       </div>


//       {/* Main content */}
//       <div
//         ref={contentRef}
//         className="container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-center text-center z-20"
//       >

//         {/* logo */}
//         <div className="mt-6 sm:mt-8 md:mt-2 mb-4 ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="-0.5 -0.5 202 163"
//             className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white"
//           >
//             <g>
//               <path d="M 0 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 200 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 0 160 L 40 160" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 160 160 L 170 160 L 200 160" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 40 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 160 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 70 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 130 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" />
//               <path d="M 70 160 L 120 160 L 130 160" fill="none" stroke="currentColor" strokeWidth="5" />
//             </g>
//           </svg>
//         </div>


//         <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300 mb-4">
//           Enquire Now
//         </p>

//         <a
//           href="tel:+16173708800"
//           className="block text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-white hover:text-orange-400 transition-colors duration-200 ease-in-out"
//         >
//           9923195529
//         </a>

//         <a
//           href="mailto:adityaconstruction5006@gmail.com"
//           className="block mt-3 text-lg md:text-xl lg:text-2xl font-serif text-gray-100 hover:text-orange-400 transition-colors duration-200 ease-in-out"
//         >
//           adityaconstruction5006@gmail.com
//         </a>

//         <div className="mt-8 text-xs md:text-sm text-gray-400 max-w-xl leading-snug">
//           <div className="font-semibold text-gray-200">01 Siddhivinayak Apartment</div>
//           <div>Kirti classic</div>
//           <div>Marunji, Pune-411057</div>

//           <div className="mt-6 text-xs tracking-[0.2em] mb-4 font-light">
//             © ADITYA CONSTRUCTIONS Pvt. Ltd.<br />ALL RIGHTS RESERVED
//           </div>
//         </div>
//       </div>



//       {/* Right side social (desktop) */}
//       <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center space-y-6">
//         <div className="rotate-90 origin-center text-sm tracking-widest text-amber-600 uppercase ">Connect with us</div>
//         <div className="w-px h-20 bg-amber-600/80" />
//         {/* <div ref={lineRef} className="w-px h-20 bg-amber-600"></div> */}
//         <nav className="flex flex-col items-center space-y-6">
//           <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
//             <FaFacebookF size={20} />
//           </a>
//           <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
//             <FaInstagram size={20} />
//           </a>
//           <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
//             <FaLinkedinIn size={20} />
//           </a>
//           <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
//             <FaPinterestP size={20} />
//           </a>
//         </nav>
//       </div>

//       {/* Bottom footer bar */}
//       <div className="absolute left-0 right-0 bottom-0 bg-[#0b0b0c] py-6">
//         <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
//           <div className="text-xs text-gray-300 uppercase tracking-widest">Durgade Construction</div>
//           <div className="text-xs text-gray-300 tracking-wide">©  {new Date().getFullYear()}  ADITYA CONSTRUCTIONS Pvt. Ltd. — ALL RIGHTS RESERVED</div>

//           <div className="text-xs text-gray-300 mt-4 md:mt-0">
//             Web design by{" "}
//             <a
//               href="https://yashbandal.netlify.app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" hover:text-orange-400 transition-colors duration-200"
//             >
//               YB
//             </a>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Contact;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const lineRef = useRef(null);
  const horizRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null); // for main content reveal

  useEffect(() => {
    // Connector line animation
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    lineTl.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      { scaleY: 1, duration: 0.7, ease: "power2.out" }
    ).fromTo(
      horizRef.current,
      { scaleX: 0, opacity: 0, transformOrigin: "center" },
      { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );

    // Main content reveal
    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative h-[95vh] bg-[#111113] text-white lg:mx-8 md:mt-12 overflow-hidden"
    >
      {/* Connector line */}
      <div className="absolute inset-x-0 -top-[0%] flex flex-col items-center z-10 ">
        <div ref={lineRef} className="w-px h-[18vh] bg-amber-600"></div>
        {/* <div ref={horizRef} className="w-10 sm:w-12 md:w-14 h-px bg-amber-600 mt-2"></div> */}
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-center text-center z-20"
      >

        {/* Center logo */}
        {/* <div className="absolute left-1/2 -translate-x-1/2  max-sm:top-32  lg:top-40 z-30"> */}
        <div className=" mt-6 sm:mt-8 md:mt-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 -0.5 202 163"
            className="w-11 h-11"
          >
            <g>
              <path d="M 0 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 200 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 0 160 L 40 160" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 160 160 L 170 160 L 200 160" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 40 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 160 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 70 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 130 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 70 160 L 120 160 L 130 160" fill="none" stroke="currentColor" strokeWidth="5" />
            </g>
          </svg>
        </div>


        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300 mb-4">
         Enquire Now
        </p>

        <a
          href="tel:+16173708800"
          className="block text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-white hover:text-orange-400 transition-colors duration-200 ease-in-out"
        >
          9923195529
        </a>

        <a
          href="mailto:adityaconstruction5006@gmail.com"
          className="block mt-3 text-lg md:text-xl lg:text-2xl font-serif text-gray-100 hover:text-orange-400 transition-colors duration-200 ease-in-out"
        >
          adityaconstruction5006@gmail.com
        </a>

        <div className="mt-8 text-xs md:text-sm text-gray-400 max-w-xl leading-snug">
          <div className="font-semibold text-gray-200">01 Siddhivinayak Apartment</div>
          <div>Kirti classic</div>
          <div>Marunji, Pune-411057</div>

          <div className="mt-6 text-xs tracking-[0.2em] mb-4 font-light">
            © ADITYA CONSTRUCTIONS Pvt. Ltd.<br />ALL RIGHTS RESERVED
          </div>
        </div>
      </div>



      {/* Right side social (desktop) */}
      <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center space-y-6">
        <div className="rotate-90 origin-center text-sm tracking-widest text-amber-600 uppercase ">Connect with us</div>
        <div className="w-px h-20 bg-amber-600/80" />
        {/* <div ref={lineRef} className="w-px h-20 bg-amber-600"></div> */}
        <nav className="flex flex-col items-center space-y-6">
          <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 ease-in-out">
            <FaPinterestP size={20} />
          </a>
        </nav>
      </div>

      {/* Bottom footer bar */}
      <div className="absolute left-0 right-0 bottom-0 bg-[#0b0b0c] py-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">

          {/* Company Name */}
          <div className="text-xs text-gray-300 uppercase tracking-widest">
            Durgade Construction
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-300 tracking-wide">
            © {new Date().getFullYear()} ADITYA CONSTRUCTIONS Pvt. Ltd. — ALL RIGHTS RESERVED
          </div>

          {/* Designer Credit */}
          <div className="text-xs text-gray-300">
            Web design by{" "}
            <a
              href="https://yashbandal.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              YB
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;


// // src/components/ContactFooter.jsx
// import React from "react";

// // Replace these with your real assets or remove if not needed
// const LeafIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
//     <path d="M12 2c5 0 9 4 9 9 0 7-7 11-9 11s-9-4-9-11c0-5 4-9 9-9z" stroke="currentColor" strokeWidth="0.5" />
//   </svg>
// );

// const IconFacebook = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.53V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.9h-2.33v7.03C18.34 21.21 22 17.06 22 12.07z" />
//   </svg>
// );
// const IconInstagram = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zM18.6 6.5a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
//   </svg>
// );
// const IconLinkedin = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.8V24h-4V15.6c0-2.1 0-4.8-3-4.8-3 0-3.5 2.3-3.5 4.6V24h-4V8.5z" />
//   </svg>
// );

// export default function ContactFooter() {
//   return (
//     <footer className="relative bg-[#0b0b0b] text-gray-100">
//       {/* Top decorative vertical line + small icon centered */}
//       <div className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center">
//         <div className="w-px h-6 bg-amber-600" />
//         <div className="w-6 h-6 bg-[#0b0b0b] border border-amber-600 rounded-sm flex items-center justify-center -mt-1">
//           <span className="text-amber-500"><LeafIcon /></span>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
//           {/* left empty column (visual balance) */}
//           <div className="hidden md:block" />

//           {/* center column: contact info */}
//           <div className="text-center">
//             <div className="text-xs tracking-widest text-gray-400 mb-4">TALK TO THE TEAM</div>

//             <div className="text-2xl md:text-3xl font-serif font-medium mb-3">8208806595</div>
//             <a href="mailto:info@yashbandal.com" className="block text-sm md:text-base mb-6 hover:underline">info@chevronpartners.com</a>

//             <div className="text-xs text-gray-400 uppercase tracking-wider mb-6">
//               Thergaon<br />Chincwad<br />PUNE
//             </div>

//             <div className="text-xs text-gray-500">© {new Date().getFullYear()} YB-Productions RS LLC — ALL RIGHTS RESERVED</div>
//           </div>

//           {/* right column: social vertical */}
//           <div className="flex flex-col items-center md:items-end">
//             <div className="hidden md:flex flex-col items-center">
//               <div className="h-20 flex items-center">
//                 <div className="w-px h-20 bg-amber-600 mr-4" />
//                 <div className="text-xxs text-amber-400 uppercase tracking-wider rotate-90 origin-center">follow us</div>
//               </div>

//               <div className="flex flex-col items-center space-y-4 mt-6">
//                 <a href="#" className="text-amber-400 hover:text-white"><IconFacebook /></a>
//                 <a href="#" className="text-amber-400 hover:text-white"><IconInstagram /></a>
//                 <a href="#" className="text-amber-400 hover:text-white"><IconLinkedin /></a>
//                 <a href="#" className="text-amber-400 hover:text-white">P</a>
//               </div>
//             </div>

//             {/* small spacer so right column aligns vertically on mobile */}
//             <div className="md:hidden h-6" />
//           </div>
//         </div>
//       </div>

//       {/* bottom thin border and footer sublinks */}
//       <div className="border-t border-amber-600/50">
//         <div className="max-w-6xl mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
//             <div className="order-1 md:order-1 w-full md:w-1/3 text-left">
//               <a href="#" className="hover:underline">Privacy Policy</a>
//             </div>

//             <div className="order-2 md:order-2 w-full md:w-1/3 text-center text-xs md:text-sm">
//               © {new Date().getFullYear()} Yash Bandal
//             </div>

//             <div className="order-3 md:order-3 w-full md:w-1/3 text-right">
//               <a href="#" className="hover:underline">Web Design by YASH</a>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </footer>
//   );
// }








// // src/components/Contact.jsx
// import React from "react";
// import logo from "../../assets//aditya_construction.svg";

// /**
//  * Replace these imports with your actual assets:
//  * import logo from '../../assets/catalyst-logo.png'
//  * import partnerLogo from '../../assets/greystar.png'
//  */
// // const logo = null;
// const partnerLogo = null;

// const IconFacebook = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.53V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.9h-2.33v7.03C18.34 21.21 22 17.06 22 12.07z" />
//   </svg>
// );

// const IconInstagram = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zM18.6 6.5a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
//   </svg>
// );

// const IconPaw = () => (
//   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M12 11c-3.9 0-7 3.1-7 7 0 .6.4 1 1 1s1-.4 1-1c0-3 2.5-5 5-5s5 2 5 5c0 .6.4 1 1 1s1-.4 1-1c0-3.9-3.1-7-7-7zM7.5 4.5C6 4.5 5 6 5 7.5s1 3 2.5 3 2.5-1.5 2.5-3S9 4.5 7.5 4.5zM12 3c-1 0-2 .9-2 2s1 2 2 2 2-.9 2-2-1-2-2-2zm6.5 1.5C17 4.5 16 6 16 7.5s1 3 2.5 3 2.5-1.5 2.5-3S19 4.5 18.5 4.5z" />
//   </svg>
// );

// const IconHome = () => (
//   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M12 3l9 8h-3v8h-5v-6H11v6H6v-8H3l9-8z" />
//   </svg>
// );

// const IconWheelchair = () => (
//   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path d="M7 4a2 2 0 11.001 3.999A2 2 0 017 4zM12 12a4 4 0 110 8 4 4 0 010-8zm6-1h-2v-2h2V5h2v6h-2z" />
//   </svg>
// );

// export default function Contact() {
//   return (
//     <footer className="relative bg-white text-gray-800 border-t">
//       <div className="max-w-7xl mx-auto px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Left: big wordmark */}
//           <div className="flex flex-col justify-start">
//             {logo ? (
//               <img src={logo} alt="Catalyst" className="max-w-xs object-contain" />
//             ) : (
//               <div className="tracking-widest text-4xl font-light text-gray-900">ADITYA CONSTRUCTOIN</div>
//             )}


//             {/* <div className="mt-auto pt-10">
//               <div className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-br from-slate-800 via-indigo-700 to-emerald-500 opacity-95" />
//             </div> */}

//           </div>

//           {/* Center: Visit / hours */}
//           <div className="flex flex-col justify-start">
//             <h3 className="text-2xl italic font-medium text-gray-700 mb-6">Visit</h3>

//             <p className="text-gray-600 mb-4">
//               We are available either by appointment or digitally:
//             </p>

//             <ul className="space-y-4 text-gray-700 mb-6">
//               <li className="">Mon–Fri: 10am–6pm</li>
//               <li className="">Sat: 10am–5pm</li>
//               <li className="">Sun: Closed</li>
//             </ul>

//             <address className="not-italic text-gray-700">
//               123 N Desplaines St
//               <br />
//               Chicago, IL 60661
//             </address>
//           </div>

//           {/* Right: company name, links, icons, partner */}
//           <div className="flex flex-col justify-start">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex items-center gap-3">
//                 <a href="#" aria-label="facebook" className="text-gray-800 hover:text-gray-600">
//                   <IconFacebook />
//                 </a>
//                 <a href="#" aria-label="instagram" className="text-gray-800 hover:text-gray-600">
//                   <IconInstagram />
//                 </a>
//               </div>
//             </div>

//             <h4 className="text-2xl tracking-wide font-semibold text-slate-800 mb-6">ADITYA CONSTRUCTION</h4>

//             <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
//               <a href="#" className="hover:underline">Privacy Policy</a>
//               <a href="#" className="hover:underline">Disclosures & Licenses</a>
//               <a href="#" className="hover:underline">DMCA Agent</a>
//               <a href="#" className="hover:underline">Accessibility Statement</a>
//               <a href="#" className="hover:underline">Renters' Rights & Responsibilities</a>
//               <div />
//             </div>

//             <div className="flex items-center gap-4 mb-6">
//               <IconPaw />
//               <IconHome />
//               <IconWheelchair />
//             </div>

//             <div className="mb-6">
//               {partnerLogo ? (
//                 <img src={partnerLogo} alt="Greystar" className="max-w-[180px] object-contain" />
//               ) : (
//                 <div className="text-2xl font-serif text-slate-900">GREYSTAR</div>
//               )}
//             </div>

//             <div className="text-xs text-gray-500">
//               © {new Date().getFullYear()} CATALYST CHICAGO ALL RIGHTS RESERVED
//             </div>

//             <div className="mt-4 text-sm text-gray-600">
//               <div>Site by Brave New Day</div>
//               <a href="#" className="inline-block mt-2 hover:underline">Customize Cookie Settings</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating chat button bottom-right */}
//       <button
//         aria-label="Chat"
//         className="fixed right-6 bottom-6 z-50 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center ring-1 ring-gray-200"
//       >

//         {/* chatbot svg  */}
//         {/* <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
//           <svg width="22" height="16" viewBox="0 0 24 16" fill="none" aria-hidden>
//             <circle cx="4" cy="8" r="1.5" fill="currentColor" />
//             <circle cx="12" cy="8" r="1.5" fill="currentColor" />
//             <circle cx="20" cy="8" r="1.5" fill="currentColor" />
//           </svg>
//         </div> */}
//       </button>
//     </footer>
//   );
// }
