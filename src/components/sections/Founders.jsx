import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import founder2 from "../../assets/aditya-durgade.webp";
import founder1 from "../../assets/avinash-durgade.webp";

gsap.registerPlugin(ScrollTrigger);

const Founders = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const founderRefs = useRef([]);
  founderRefs.current = [];

  const addToRefs = (el) => {
    if (el && !founderRefs.current.includes(el)) {
      founderRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        toggleActions: "play none none none",
      },
    });

    // Heading animation
    tl.fromTo(
      headingRef.current,
      { autoAlpha: 0, y: 50, willChange: "opacity, transform" },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Founder cards animation - all in one timeline for smoothness
    founderRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { autoAlpha: 0, y: 40, willChange: "opacity, transform" },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8" // slight overlap for smooth sequential reveal
      );
    });
  }, []);

  return (
    // change py to increase seperation
    <section ref={sectionRef} className="relative py-4 bg-white overflow-hidden"> 
      {/* Gradient and decorative triangles */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 opacity-70 pointer-events-none rounded-tl-full" />
      <div className="absolute -top-20 -left-20 w-0 h-0 border-l-[8rem] border-l-transparent border-r-[5rem] border-r-transparent border-b-[12rem] border-b-orange-100 opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-0 h-0 border-l-[10rem] border-l-transparent border-r-[6rem] border-r-transparent border-t-[14rem] border-t-orange-200 opacity-15 pointer-events-none" />

      {/* Section Heading */}
      <h3
        ref={headingRef}
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-center text-4xl md:text-6xl font-bold mb-16 tracking-[0.25em] text-gray-900 sm:m-10"
        // style={{ fontFamily: "'Cinzel', serif" }}
        // className="text-center text-4xl md:text-6xl  mb-16  text-gray-900 sm:m-10"
      >
        Our<span className="text-orange-600"> Founders</span>
        <span className="block w-24 h-[3px] bg-orange-600 mx-auto mt-4 rounded-full" />
        {/* OUR FOUNDERS */}
      </h3>

      <div className="relative z-10 max-w-[85%] mx-auto space-y-24">
        {/* Founder 1 */}
        <div ref={addToRefs} className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-28">
          <div className="text-center md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
            <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Avinash Durgade
            </h4>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-orange-600 uppercase tracking-wide">
              Director
            </p>
          </div>
          <div className="relative md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="absolute left-8 top-4 w-2/3 h-full bg-orange-200 rounded-tr-[50px] rounded-bl-[50px] rotate-3 hidden md:block shadow-lg" />
            <img
              src={founder1}
              alt="Avinash Durgade"
              className="relative w-64 sm:w-72 md:w-80 lg:w-80 aspect-[3/4] object-cover rounded-xl shadow-xl"
              style={{ willChange: "transform, opacity" }}
            />
          </div>
        </div>

        {/* Founder 2 */}
        <div ref={addToRefs} className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-28">
          <div className="relative md:w-1/2 flex justify-center order-1 md:order-1">
            <div className="absolute right-8 top-4 w-2/3 h-full bg-orange-200 rounded-tl-[50px] rounded-br-[50px] -rotate-3 hidden md:block shadow-lg" />
            <img
              src={founder2}
              alt="Aditya Durgade"
              className="relative w-64 sm:w-72 md:w-80 lg:w-90 aspect-[3/4] object-cover rounded-xl shadow-xl"
              style={{ willChange: "transform, opacity" }}
            />
          </div>
          <div className="text-center md:w-1/2 mt-6 md:mt-0 md:pl-12 order-2">
            <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Aditya Durgade
            </h4>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-orange-600 uppercase tracking-wide">
              Managing Director | Architect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;

// import founder2 from "../../assets/aditya.png";
// import founder1 from "../../assets/director-crp.jpg";

// const Founders = () => {
//   return (
//     <section className="relative py-28 bg-white overflow-hidden">
// {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 opacity-70 pointer-events-none" /> */}
//       {/* Gradient only at bottom-right */}
//       <div className="absolute bottom-0 right-0 w-1/2 h-1/2 
//                 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 
//                 opacity-70 pointer-events-none rounded-tl-full" />



//       {/* Background Decorative Circles */}
//       {/* Top Left Triangle */}
//       {/* Top-left scalene triangle */}
//       <div
//         className="absolute -top-20 -left-20 w-0 h-0 
//              border-l-[8rem] border-l-transparent 
//              border-r-[5rem] border-r-transparent 
//              border-b-[12rem] border-b-orange-100 
//              opacity-20 pointer-events-none"
//       />

//       {/* Bottom-right scalene triangle */}
//       <div
//         className="absolute -bottom-24 -right-16 w-0 h-0 
//              border-l-[10rem] border-l-transparent 
//              border-r-[6rem] border-r-transparent 
//              border-t-[14rem] border-t-orange-200 
//              opacity-15 pointer-events-none"
//       />


//       {/* Section Heading */}
//       <h3
//         style={{ fontFamily: "'Playfair Display', serif" }} 
//         className="text-center text-4xl md:text-6xl font-bold mb-16 tracking-[0.25em] text-gray-900  sm:m-10"
//       >
//         Meet The<span className="text-orange-600"> Founders</span>
//         <span className="block w-24 h-[3px] bg-orange-600 mx-auto mt-4 rounded-full" />
//       </h3>

//       <div className="relative z-10 max-w-[85%] mx-auto space-y-24">
//         {/* Founder 1 */}
//         <div className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-28">
//           {/* Text add text-left for left alighn */}
//           <div className="text-center md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
//             <h4
//               style={{ fontFamily: "'Playfair Display', serif" }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
//             >
//               Avinash Durgade
//             </h4>
//             <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-orange-600 uppercase tracking-wide">
//               Director 
//             </p>
//           </div>

//           {/* Image */}
//           <div className="relative md:w-1/2 flex justify-center order-1 md:order-2">
//             <div className="absolute left-8 top-4 w-2/3 h-full bg-orange-200 rounded-tr-[50px] rounded-bl-[50px] rotate-3 hidden md:block shadow-lg" />
//             <img
//               src={founder1}
//               alt="Avinash Durgade"
//               // className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
//               className="relative w-64 sm:w-72 md:w-80 lg:w-80 aspect-[3/4] object-cover rounded-xl shadow-xl "
//             />
//           </div>
//         </div>

//         {/* Founder 2 */}
//         <div className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-28">
//           {/* Image */}
//           <div className="relative md:w-1/2 flex justify-center order-1 md:order-1">
//             <div className="absolute right-8 top-4 w-2/3 h-full bg-orange-200 rounded-tl-[50px] rounded-br-[50px] -rotate-3 hidden md:block shadow-lg" />
//             <img
//               src={founder2}
//               alt="Aditya Durgade"
//               // className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
//               className="relative w-64 sm:w-72 md:w-80 lg:w-90 aspect-[3/4] object-cover rounded-xl shadow-xl "
//             />
//           </div>

//           {/* Text - add text-left for left alighn*/}
//           <div className="text-center  md:w-1/2 mt-6 md:mt-0 md:pl-12 order-2">  
//             <h4
//               style={{ fontFamily: "'Playfair Display', serif" }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
//             >
//               Aditya Durgade
//             </h4>
//             <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-orange-600 uppercase tracking-wide">
//               Managing Director | Architect
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founders;



///==================================================================================================



// import  BoardCard  from "../ui/FounderCard";

// import founder1 from "../../assets/aditya.png"
// import founder2 from "../../assets/director.png"


// const Boards = [
//   {
//     imgURL: founder2,
//     founderName: 'Avinash Durgade',
//     post: "Director",
//   },
//   {
//     imgURL: founder1,
//     founderName: 'Aditya Durgade',
//     post: "Managing Director | Architect",
 
//   }
// ];

// const Founders = () => {
//   return (
//     <section className='max-container'>
//       <h3 className='font-palanquin text-center text-4xl font-bold'>
//         Who Are 
//         <span className='text-orange-700'> We </span>
//         ?
//       </h3>


//     </section>
//   );
// };

// export default Founders;








{/* 
      <div className='mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {Boards.map((Board, index) => (
          <BoardCard
            key={index}
            imgURL={Board.imgURL}
            founderName={Board.founderName}
            post={Board.post}
            // feedback={Board.feedback}
          />
        ))}
      </div> */}