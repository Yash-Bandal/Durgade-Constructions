
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AboutButton from "../ui/AboutButton";

// gsap.registerPlugin(ScrollTrigger);

// const AboutSection = () => {
//   const lineRef = useRef(null);
//   const horizRef = useRef(null);

//   useEffect(() => {
//     // const tl = gsap.timeline({
//     //   scrollTrigger: {
//     //     trigger: "#about",
//     //     start: "top 80%",   // when About enters viewport
//     //     end: "top 20%",
    //     toggleActions: "play reverse play reverse",
//     //   },
//     // });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#about",
//         start: "top 80%",   // when About starts entering
//         toggleActions: "play none none reverse",
//         // "play" (on enter),
//         // "none" (no action on leave),
//         // "none" (no action on enter back),
//         // "reverse" (collapse only when going fully back above Hero)
//       },
//     });


//     tl.fromTo(
//       lineRef.current,
//       { scaleY: 0, transformOrigin: "top center" },
//       { scaleY: 1, duration: 1, ease: "power2.out" }
//     );

//     tl.fromTo(
//       horizRef.current,
//       { scaleX: 0, opacity: 0, transformOrigin: "center" },
//       { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
//       // { scaleX: 1, opacity: 1,  ease: "power2.out" },
//       "-=0.3" // start slightly before vertical finishes
//     );

//   }, []);

//   return (
//     // <section
//     //   id="about"

//     //   // className="relative w-full max-w-6xl min-h-[70vh] mx-auto mt-12 mb-12 sm:mt-16 sm:mb-16 bg-[#ededed] text-center px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center"
//     //   className="relative
//     //    w-full max-w-[85%] min-h-[70vh] mx-auto mt-12 sm:mt-16 
//     //     bg-[#ededed] text-center px-4 sm:px-6 
//     //      flex flex-col items-center justify-center"
//     // >


//     <section
//       id="about"
//       className="
//         relative w-full mx-auto bg-[#ededed] text-center
//         px-4 sm:px-6
//         flex flex-col items-center
//         pt-12 sm:pt-16 md:pt-24 mt-20
//         pb-24 sm:pb-28 md:pb-36 lg:pb-44
//         min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh]
//         max-w-[1100px]
//       "
//       style={{ maxWidth: "85%" /* matches your earlier value but keeps CSS mobile-friendly */ }}
//     >


//       {/* old */}
//       {/* <div className="absolute -top-20 sm:-top-28 md:-top-36 flex flex-col items-center max-md:hidden">
//         <div ref={lineRef} className="w-px h-28 sm:h-40 md:h-52 bg-amber-600"></div>
//         <div ref={horizRef} className="w-10 sm:w-12 md:w-14 h-px bg-amber-600 mt-2"></div>
//       </div>

//       <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-gray-800 mt-4">
//         A Creative Vision
//       </h2> */}

//       {/* Connector line */}
//       <div className="absolute inset-x-0 -top-[20%]  flex flex-col items-center">
//         <div ref={lineRef} className="w-px h-[20vh] bg-amber-600"></div>
//         <div ref={horizRef} className="w-10 sm:w-12 md:w-14 h-px bg-amber-600 mt-2"></div>
//       </div>

//       {/* Heading */}
//       <h2 className="max-md:mt-[calc(1vh+1rem)] lg:mt-[-4%] text-xs sm:text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-gray-800">
//         A Creative Vision
//       </h2>


//       {/* Paragraphs */}
//       <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-3xl leading-relaxed text-black max-w-3xl font-['fieldwork-hum']">
//         Aditya Construction is a trusted name in urban development, dedicated to building the future with innovation, quality, and security.
//       </p>

//       <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl">
//         Aditya Constructions is renowned for our commitment to quality design,
//         uncompromising safety, and neighborhood-oriented urban infill development.
//         We craft an intriguing blend of stunning contemporary architecture and civic responsibility into all our projects
//         – creating exceptional and sustainable urban environments
//       </p>

//       <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light text-gray-800 font-['Roboto']">
//         “Your vision. Our blueprint.”
//       </p>

//       {/* Button */}
//       <div className="mt-6  max-sm:hidden">
//         <AboutButton>About Us</AboutButton>
//       </div>

//       {/* ---------- PORTFOLIO (stuck to bottom of this section) ---------- */}
//       <div
//         aria-hidden
//         style={{ fontFamily: "'Playfair Display', serif" }}
//         className="
//           absolute  left-1/2 -translate-x-1/2
//           pointer-events-none text-white font-extrabold uppercase
//           bottom-0 sm:bottom-6 md:bottom-[-2%] lg:bottom-[-4%]
//           text-[2.2rem] sm:text-[3.2rem] md:text-[4.4rem] lg:text-[7rem]
//           tracking-[0.28rem] sm:tracking-[0.5rem] md:tracking-[0.8rem]
//         "
//       >
//         PORTFOLIO
//       </div>


//     </section>

//   );
// };

// export default AboutSection;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutButton from "../ui/AboutButton";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const lineRef = useRef(null);
  const horizRef = useRef(null);
  const contentRef = useRef(null); // group heading+paras+button

  useEffect(() => {
    // Line animation (separate timeline)
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        toggleActions: "play none none reverse",
        // toggleActions: "play none none none",
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

    // Content animation (all together)
    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          // toggleActions: "play none none reverse",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="relative w-full mx-auto bg-[#e0e0e0] text-center
        px-4 sm:px-6 flex flex-col items-center
        pt-12 sm:pt-16 md:pt-24 mt-20
        pb-24 sm:pb-28 md:pb-36 lg:pb-44
        min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh]
        max-w-[1100px]"
      style={{ maxWidth: "85%" }}
    >
      {/* Connector line */}
      <div className="absolute inset-x-0 -top-[20%] flex flex-col items-center">
        <div ref={lineRef} className="w-px h-[20vh] bg-amber-600"></div>
        <div ref={horizRef} className="w-10 sm:w-12 md:w-14 h-px bg-amber-600 mt-2"></div>
      </div>

      <div ref={contentRef} className="flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          className="
      mt-6 sm:mt-6 lg:mt-[-5%]
      text-sm sm:text-base md:text-lg lg:text-xl
      font-semibold tracking-[0.1em] uppercase text-gray-800
    "
        >
          A Creative Vision
        </h2>

        {/* First Paragraph */}
        <p
        style={
            { font:'fieldwork-hum'}
        }
          className="
      mt-3 sm:mt-6 md:mt-8
      text-sm sm:text-base md:text-xl lg:text-2xl
      leading-relaxed text-black max-w-2xl lg:max-w-3xl
      font-['fieldwork-hum']
    "
        >
          Aditya Construction is a trusted name in urban development, dedicated to building the
          future with innovation, quality, and security.
        </p>

        {/* Second Paragraph */}
        <p
          className="
      mt-3 sm:mt-5 md:mt-6
      text-xs sm:text-sm md:text-base lg:text-lg
      leading-relaxed text-gray-700 max-w-2xl lg:max-w-3xl
    "
        >
          Aditya Constructions is renowned for our commitment to quality design, uncompromising
          safety, and neighborhood-oriented urban infill development. We craft an intriguing blend
          of stunning contemporary architecture and civic responsibility into all our projects –
          creating exceptional and sustainable urban environments.
        </p>

        {/* Quote */}
        <p
          className="
      mt-5 sm:mt-7 md:mt-8
      text-sm sm:text-base md:text-lg lg:text-xl
      font-light text-gray-800 font-['Roboto']
    "
        >
          “Your vision. Our blueprint.”
        </p>

        {/* Button */}
        <div className="mt-6 hidden sm:block">
          <AboutButton>About Us</AboutButton>
        </div>
      </div>


      {/* Background portfolio word */}
      <div
        aria-hidden
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="absolute left-1/2 -translate-x-1/2
         text-white font-extrabold uppercase
          bottom-0 sm:bottom-6 md:bottom-[-2%] lg:bottom-[-4%]
          text-[2.2rem] sm:text-[3.2rem] md:text-[4.4rem] lg:text-[7rem]
          tracking-[0.28rem] sm:tracking-[0.5rem] md:tracking-[0.8rem]"
      >
        PORTFOLIO
      </div>
    </section>
  );
};

export default AboutSection;
