// src/components/sections/Hero.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../../assets/orig-eve-crp.webp";
import heroImg from "../../assets/orig-eve-crp.webp";
// import heroBg from "../../assets/2-1.jpg";
// import heroImg from "../../assets/2-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const companyLineRef = useRef(null);


  useEffect(() => {
    // IMAGE: start lower (overflow) → scroll aligns it back up
    gsap.fromTo(
      imageRef.current,
      { y: 100 }, // initial offset DOWN so it overlaps About
      {
        y: 0, // comes back UP into alignment
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          scrub: true,
        },
      }
    );

    // TEXT: subtle parallax (slower upward move)
    gsap.fromTo(
      textRef.current,
      { y: 60 },
      {
        y: 0,

        //added these 3 lines later
        // force3D: true,
        overwrite: "auto",
        ease: "none",


        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          scrub: true,
        },
      }
    );



    // Company underline animation (after 5s)
    gsap.fromTo(
      companyLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        delay: 9, // start after 5s
      }
    );
    
  }, []);

  return (
    <section className="relative">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern urban environment background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative h-[85vh] w-[85%] mx-auto flex items-center justify-start overflow-visible">
        {/* Text content */}
        <div
          ref={textRef}
          className="text-white text-left relative z-30  bottom-[10px]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      zIndex: 30,
                    }}
        >

          <div className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-light">
            Aditya Construction ™
            <div
              ref={companyLineRef}
              className="w-[65px] h-[2px] bg-yellow-500 mt-3"
            ></div>
          </div>



          {/* Hero Title */}
          
          <h1 className="text-[50px]  md:text-[70px] lg:text-[95px] font-bold leading-[1.1] lg:ml-[20%] ">
            <span className="inline-block lg:block mr-5">Elevating </span>
            <span className="inline-block lg:block mr-5">Urban </span>
            <span className="inline-block lg:block">Environments</span>
          </h1>

          
        </div>

        {/* Floating image */}
        <div className="absolute right-[10%]">
          <img
            ref={imageRef}
            src={heroImg}
            alt="Modern urban architecture"
            // className="w-[420px] lg:w-[500px] hidden md:block object-contain shadow-2xl relative z-20 will-change-transform"
            className="w-auto h-[50vh]   lg:h-[80vh] hidden md:block object-cover shadow-2xl relative z-20 will-change-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;








// // src/components/sections/Hero.jsx
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import heroBg from "../../assets/orig-eve-crp.webp";
// import heroImg from "../../assets/orig-eve-crp.webp";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     // IMAGE: start lower (overflow) → scroll aligns it back up
//     gsap.fromTo(
//       imageRef.current,
//       { y: 100 }, // initial offset DOWN so it overlaps About
//       {
//         y: 0, // comes back UP into alignment
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top top",
//           scrub: true,
//         },
//       }
//     );

//     // TEXT: subtle parallax (slower upward move)
//     gsap.fromTo(
//       textRef.current,
//       { y: 60 },
//       {
//         y: 0,

//         //added these 3 lines later
//         force3D: true,
//         overwrite: "auto",
//         ease: "none",


//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top top",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="relative h-[85vh] w-full flex items-center justify-start overflow-visible ">
//       {/* Background hero image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBg}
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Text overlapping image */}
//         <div
//           ref={textRef}
//           className="text-white text-center lg:text-left absolute lg:relative"
//           style={{
//             fontFamily: "'Playfair Display', serif",
//             zIndex: 30,
//           }}
//         >
//           <h1 className="text-[75px] lg:text-[90px] font-bold leading-tight">
//             Exceptional <br /> Urban <br /> Environments
//           </h1>
//         </div>


//         {/* Floating image */}
//         <div className="mt-5 lg:mt-0 lg:ml-12 relaive">
//           <img
//             ref={imageRef}
//             src={heroImg}
//             alt="Foreground"
//             // className="w-[320px] hidden md:block lg:w-[500px] object-cover shadow-2xl relative z-20"
//             className="w-[420px] lg:w-[500px] hidden md:block  object-contain shadow-2xl relative z-20"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
