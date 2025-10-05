// // src/components/ValuesSection.jsx
// import React, { useEffect, useRef } from "react";
// import { FaLightbulb, FaHandshake, FaLeaf, FaGem } from "react-icons/fa";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const values = [
//   {
//     icon: <FaLightbulb className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
//     title: "Innovation",
//     description:
//       "We embrace creativity and modern solutions in every project we undertake.",
//   },
//   {
//     icon: <FaHandshake className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
//     title: "Integrity",
//     description:
//       "Our foundation is built on trust, transparency, and ethical practices.",
//   },
//   {
//     icon: <FaLeaf className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
//     title: "Sustainability",
//     description:
//       "We design with care for the environment and long-term impact.",
//   },
//   {
//     icon: <FaGem className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
//     title: "Excellence",
//     description:
//       "Delivering high-quality results with precision and attention to detail.",
//   },
// ];

// const ValuesSection = () => {
//   const leftLineRef = useRef(null);
//   const rightLineRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       leftLineRef.current,
//       { width: 0 },
//       {
//         width: "40vw", // Adjust line length
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: leftLineRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     gsap.fromTo(
//       rightLineRef.current,
//       { width: 0 },
//       {
//         width: "40vw",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rightLineRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="relative pb-28 bg-white overflow-hidden max-sm:m-10">
//       {/* Heading */}
//       <h2
//         style={{ fontFamily: "'Playfair Display', serif" }}
//         className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6 tracking-[0.2em]"
//       >
//         Our <span className="text-orange-600">Values</span>
//         <span className="block w-20 h-[3px] bg-orange-600 mx-auto mt-4 rounded-full"></span>
//       </h2>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
//         Guiding principles that shape everything we do — from vision to
//         execution.
//       </p>

//       {/* Values Cards */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {values.map((value, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-2xl p-8 text-center flex flex-col items-center shadow-md"
//           >
//             <div className="mb-4">{value.icon}</div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               {value.title}
//             </h3>
//             <p className="text-gray-700 text-sm md:text-base">
//               {value.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Animated Separator Lines */}
//       <div className="absolute  flex items-center justify-center w-full bottom-0">
//         {/* Left line */}
//         <div
//           ref={leftLineRef}
//           className="absolute right-1/2 mr-3 top-1/2 -translate-y-1/2 
//                      w-0 h-[2px] bg-orange-500"
//         />
//         {/* Right line */}
//         <div
//           ref={rightLineRef}
//           className="absolute left-1/2 ml-3 top-1/2 -translate-y-1/2 
//                      w-0 h-[2px] bg-orange-500"
//         />
//       </div>
//     </section>
//   );
// };

// export default ValuesSection;


// On scroll reveal section

// src/components/ValuesSection.jsx
import React, { useEffect, useRef } from "react";
import { FaLightbulb, FaHandshake, FaLeaf, FaGem } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: <FaLightbulb className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
    title: "Innovation",
    description:
      "We embrace creativity and modern solutions in every project we undertake.",
  },
  {
    icon: <FaHandshake className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
    title: "Integrity",
    description:
      "Our foundation is built on trust, transparency, and ethical practices.",
  },
  {
    icon: <FaLeaf className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
    title: "Sustainability",
    description:
      "We design with care for the environment and long-term impact.",
  },
  {
    icon: <FaGem className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
    title: "Excellence",
    description:
      "Delivering high-quality results with precision and attention to detail.",
  },
];

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);

  useEffect(() => {
    // Section reveal animation
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section hits 80% of viewport
          // toggleActions: "play none none reverse",
          toggleActions: "play none none none",
        },
      }
    );

    // Left line animation
    gsap.fromTo(
      leftLineRef.current,
      { width: 0 },
      {
        width: "40vw",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          // toggleActions: "play none none reverse",
          toggleActions: "play none none none",
        },
      }
    );

    // Right line animation
    gsap.fromTo(
      rightLineRef.current,
      { width: 0 },
      {
        width: "40vw",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          // toggleActions: "play none none reverse",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pb-28 bg-white overflow-hidden max-sm:m-10 opacity-0"
    >
      {/* Heading */}
      <h2
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6 tracking-[0.2em]"
      >
        Our <span className="text-orange-600">Values</span>
        <span className="block w-20 h-[3px] bg-orange-600 mx-auto mt-4 rounded-full"></span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg md:text-xl  max-sm:hidden ">
        Guiding principles that shape everything we do — from vision to
        execution.
      </p>

      {/* Values Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 text-center flex flex-col items-center shadow-md"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base max-sm:hidden">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Animated Separator Lines */}
      <div className="absolute flex items-center justify-center w-full bottom-0">
        <div
          ref={leftLineRef}
          className="absolute right-1/2 mr-3 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500"
        />
        <div
          ref={rightLineRef}
          className="absolute left-1/2 ml-3 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500"
        />
      </div>
    </section>
  );
};

export default ValuesSection;
