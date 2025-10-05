// src/components/Portfolio/PortfolioCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import AboutButton from "../ui/AboutButton";
import ProjectsButton from "../ui/ProjectsButton";

import p1 from "../../assets/1-1.png";
import p2 from "../../assets/2-1.jpg";
import p3 from "../../assets/3-1.jpeg";
import p4 from "../../assets/4-1.jpeg";
import p5 from "../../assets/5-1.jpeg";

const images = [
  { prjImg: "Durgade Heights", loc: "Hadapsar", src: p1 },
  { prjImg: "Morya Residency", loc: "Punawale", src: p2 },
  { prjImg: "Durgade Heights", loc: "Kiwale", src: p3 },
  { prjImg: "Vinayak Apartment", loc: "Hinjewadi", src: p4 },
  { prjImg: "Herambh Elite", loc: "Chinchwad", src: p5 },
];

const PortfolioCarousel = () => {
  // 👇 start at 3rd image
  const [index, setIndex] = useState(2);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  // const GAP = 28;
  const GAP = 48;

  // Go next / prev (no looping)
  const next = () =>
    setIndex((i) => (i < images.length - 1 ? i + 1 : i));
  const prev = () => setIndex((i) => (i > 0 ? i - 1 : i));

  // Animate centering and per-card scale
  const animateToIndex = (targetIndex) => {
    const container = containerRef.current;
    const track = trackRef.current;
    const cards = cardRefs.current;
    if (!container || !track || !cards?.length) return;

    const card = cards[0];
    const cardW = card.offsetWidth;
    const containerW = container.offsetWidth;

    const targetPos = targetIndex * (cardW + GAP);
    const centerOffset = containerW / 2 - cardW / 2;
    const x = -targetPos + centerOffset;

    gsap.to(track, {
      x,
      duration: 0.75,
      ease: "power3.out",
      overwrite: true,
    });

    cards.forEach((c, i) => {
      const isActive = i === targetIndex;
      gsap.to(c, {
        scale: isActive ? 1 : 0.88,
        opacity: isActive ? 1 : 0.7,
        duration: 0.6,
        overwrite: true,
        ease: "power3.out",
      });
      c.style.zIndex = isActive ? 20 : 10;
    });
  };

  // run animation whenever index changes
  useEffect(() => {
    animateToIndex(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // re-center on resize
  useEffect(() => {
    const onResize = () => animateToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (

    <section className="w-full py-10 bg-white">
      <div className="flex justify-center">
      </div>
      <div className="max-w-[95%] mx-auto px-4">
        {/* <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Projects
          </h2>
        </div> */}

        {/* Carousel viewport */}
        <div
          ref={containerRef}
          className="relative overflow-hidden touch-pan-y"
          style={{ padding: "40px 0" }}
        >
          <div
            ref={trackRef}
            className="flex items-center"
            style={{ gap: `${GAP}px`, willChange: "transform" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
    //             className="relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden
    // w-[320px] h-[380px] sm:w-[400px] sm:h-[450px] md:w-[480px] md:h-[520px] "

                className="relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden
  w-[320px] h-[380px] sm:w-[400px] sm:h-[450px] md:w-[480px] md:h-[520px] 
  transformt ransition-transform duration-500 ease-out hover:scale-[1.05]"

                style={{
                  transformOrigin: "center center",
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    filter: i === index ? "none" : "grayscale(30%) contrast(0.9)",
                  }}
                />

                {/* Shadow overlays */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {/* Index number */}
                <div className="absolute top-6 left-6 text-white z-10">
                  <div className="text-2xl font-light">{`0${i + 1}`}</div>
                  <div className="w-12 h-px bg-white/70 mt-2" />
                </div>

                {/* Project info */}
                <div className="absolute left-6 right-6 bottom-8 z-10 text-white text-left">
                  <div className="text-2xl md:text-3xl font-bold">{img.prjImg}</div>
                  <div className="text-sm font-light mt-1">{img.loc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-900" : "bg-gray-400/50"
                  }`}
              />
            ))}
          </div>
        </div>

 
        {/* Controls */}
        <div className="flex items-center gap-4 justify-center mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous project"
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 
      ${index === 0
                ? "bg-gray-100/40 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-br from-gray-100 to-white text-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            disabled={index === images.length - 1}
            aria-label="Next project"
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 
      ${index === images.length - 1
                ? "bg-gray-100/40 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-br from-gray-100 to-white text-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>


        <div className="relative flex items-center justify-center w-full my-8">
          {/* <Link to="/projects" className="group relative flex items-center"> */}
          <Link to="/" className="group relative flex items-center">
            {/* Left line */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
                    w-0 h-[1px] bg-orange-500 
                    transition-all duration-700 group-hover:w-[36vw]" />


            < ProjectsButton >All Projects</ ProjectsButton>


            {/* Right line */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 
                    w-0 h-[1px] bg-orange-500 
                    transition-all duration-1000 group-hover:w-[36vw]" />
          </Link>
        </div>



      </div>
    </section>

  );
};

export default PortfolioCarousel;



// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/core";

// import p1 from "../../assets/1-1.png";
// import p2 from "../../assets/2-1.jpg";
// import p3 from "../../assets/3-1.jpeg";
// import p4 from "../../assets/4-1.jpeg";
// import p5 from "../../assets/5-1.jpeg";

// const images = [
//   { prjImg: "Durgade Heights", loc: "Hadapsar", src: p1 },
//   { prjImg: "Morya Residency", loc: "Punawale", src: p2 },
//   { prjImg: "Durgade Heights", loc: "Kiwale", src: p3 },
//   { prjImg: "Vinayak Apartment", loc: "Hinjewadi", src: p4 },
//   { prjImg: "Herambh Elite", loc: "Chinchwad", src: p5 },
// ];

// const PortfolioCarousel = () => {
//   const splideOptions = {
//     type: "loop",
//     perPage: 3, // Number of visible cards
//     perMove: 1,
//     focus: "center",
//     pagination: true,
//     arrows: true,
//     gap: "2rem",
//     autoplay: true,
//     interval: 4000,
//     pauseOnHover: true,
//     breakpoints: {
//       1024: { perPage: 2 },
//       640: { perPage: 1 },
//     },
//   };

//   return (
//     <section className="w-full py-20 bg-gray-100">
//       <div className="max-w-[90%] mx-auto px-4">
//         <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
//           Our Projects
//         </h2>

//         <Splide options={splideOptions} aria-label="Portfolio Carousel">
//           {images.map((img, i) => (
//             <SplideSlide key={i}>
//               <div className="relative bg-gray-50 rounded-xl overflow-hidden shadow-lg">
//                 {/* Background Image */}
//                 <div
//                   className="w-full h-[500px] md:h-[600px] bg-cover bg-center"
//                   style={{ backgroundImage: `url(${img.src})` }}
//                 />

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//                 {/* Top-left numbering */}
//                 <div className="absolute top-6 left-6 text-white z-10">
//                   <div className="text-2xl font-light">{`0${i + 1}`}</div>
//                   <div className="w-12 h-px bg-white/70 mt-2" />
//                 </div>

//                 {/* Bottom content */}
//                 <div className="absolute left-6 right-6 bottom-8 text-white z-10 text-left">
//                   <div className="text-3xl font-bold">{img.prjImg}</div>
//                   <div className="text-sm font-light mt-1">{img.loc}</div>
//                 </div>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>
//     </section>
//   );
// };

// export default PortfolioCarousel;







// import p1 from "../../assets/1-1.png";
// import p2 from "../../assets/2-1.jpg";
// import p3 from "../../assets/3-1.jpeg";
// import p4 from "../../assets/4-1.jpeg";
// import p5 from "../../assets/5-1.jpeg";

// const leftMenu = [
//   { prjImg: "Durgade Heights", loc: "Hadapsar" ,href:"#MapLink"},
//   { prjImg: "Morya Residency", loc: "Punawale" ,href:"#MapLink"},
//   { prjImg: "Durgade Heights", loc: "Kiwale" ,href:"#MapLink"},
//   { prjImg: "Vinayak Apartment", loc: "Hinjewadi" ,href:"#MapLink"},
//   { prjImg: "Herambh Elite", loc: "Chinchwad" ,href:"#MapLink"},
// ];

// const PortfolioSection = () => {
//   return (
//     <div>
//      Projects
//     </div>
//   )
// }

// export default PortfolioSection

