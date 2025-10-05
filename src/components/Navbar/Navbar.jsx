import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const leftMenu = [
    { label: "Firm", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
];

const rightMenu = [
    { label: "Core Values", href: "#values" },
    { label: "Founders", href: "#founders" },
    { label: "Contact", href: "#Contact" },
];

const Navbar = ({ scrollToSection }) => {
    const lastScroll = useRef(0);
    const isHidden = useRef(false);
    const [isTop, setIsTop] = useState(true);

    const handleLinkClick = (href) => {
        const id = href.replace("#", "");
        scrollToSection(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            //  Transparent only at very top
            setIsTop(currentScroll <= 10);

            //  Hide on scroll down
            if (currentScroll > lastScroll.current && !isHidden.current) {
                gsap.to(".navbar-container", {
                    y: -100,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                });
                isHidden.current = true;
            }
            //  Show on scroll up
            else if (currentScroll < lastScroll.current && isHidden.current) {
                gsap.to(".navbar-container", {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });
                isHidden.current = false;
            }

            lastScroll.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 text-white max-md910:hidden`}
        >
            <div
                className={`navbar-container flex justify-between items-center w-full border-b border-white/20 backdrop-blur-sm 
      transition-[background-color] duration-700 ease-in-out
      ${isTop ? "bg-transparent" : "bg-black/60"}`}
            >
                {/* Left Menu */}
                <div className="flex flex-1 justify-evenly border-r border-white/10">
                    {leftMenu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleLinkClick(item.href)}
                            className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-white/5 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Logo / Company Name */}
                <div className="px-10 py-2 text-center flex-shrink-0 border-x border-white/10">
                    {/* <div className="text-xs tracking-[0.2em] uppercase">
                        ADITYA CONSTRUCTION
                    </div> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.5 -0.5 202 163"
                        className="w-11 h-11 "
                    >
                        <g>
                            <path d="M 0 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 200 160 L 100 0" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 0 160 L 40 160" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 160 160 L 170 160 L 200 160" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 40 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 160 160 L 100 60" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 70 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 130 160 L 100 110" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                            <path d="M 70 160 L 120 160 L 130 160" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
                        </g>
                    </svg>
                </div>

                {/* Right Menu */}
                <div className="flex flex-1 justify-evenly border-l border-white/10">
                    {rightMenu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleLinkClick(item.href)}
                            className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-white/5 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



// // src/components/Navbar/Navbar.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ico from "../../assets/acico2.png";

// const Navbar = ({ scrollToSection }) => {
//     const lastScroll = useRef(0);
//     const isHidden = useRef(false);

//     const handleLinkClick = (href) => {
//         const id = href.replace("#", "");
//         scrollToSection(id);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScroll = window.scrollY;

//             if (currentScroll <= 10) {
//                 if (isHidden.current) {
//                     gsap.to(".navbar-container", {
//                         y: 0,
//                         opacity: 1,
//                         duration: 0.3,
//                         ease: "power2.out",
//                     });
//                     isHidden.current = false;
//                 }
//                 lastScroll.current = currentScroll;
//                 return;
//             }

//             if (currentScroll > lastScroll.current && !isHidden.current) {
//                 gsap.to(".navbar-container", {
//                     y: -100,
//                     opacity: 0,
//                     duration: 0.3,
//                     ease: "power2.in",
//                 });
//                 isHidden.current = true;
//             } else if (currentScroll < lastScroll.current && isHidden.current) {
//                 gsap.to(".navbar-container", {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.3,
//                     ease: "power2.out",
//                 });
//                 isHidden.current = false;
//             }

//             lastScroll.current = currentScroll;
//         };

//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <nav className="w-full fixed top-0 left-0 z-50 bg-transparent text-white max-md:hidden">
//             <div className="navbar-container flex justify-between items-center w-full border-b border-white/20 backdrop-blur-sm">

// {/* Left Menu */}
// <div className="flex flex-1 border-r border-white/10">
//     <button
//         onClick={() => handleLinkClick("#hero")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         Firm
//     </button>
//     <button
//         onClick={() => handleLinkClick("#about")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         About
//     </button>
//     <button
//         onClick={() => handleLinkClick("#portfolio")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         Portfolio
//     </button>
// </div>

// {/* Logo / Company Name */}
// <div className="px-10 py-8 flex items-center gap-2 flex-shrink-0 border-x border-white/10">
//     <img className="w-8 h-8 pb-1"  src={ico} alt="logo" />
//     <span className="text-xs tracking-[0.2em] uppercase">
//         ADITYA CONSTRUCTION
//     </span>
// </div>

// {/* Right Menu */}
// <div className="flex flex-1 border-l border-white/10">
//     <button
//         onClick={() => handleLinkClick("#news")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         News
//     </button>
//     <button
//         onClick={() => handleLinkClick("#contact")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         Contact
//     </button>
//     <button
//         onClick={() => handleLinkClick("#investors")}
//         className="flex-1 px-8 py-8 text-sm font-medium hover:text-white/90 hover:bg-black/10 transition-colors"
//     >
//         Investors
//     </button>
// </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


