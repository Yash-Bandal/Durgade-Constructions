import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ico from "../../assets/acico2.png";
import { Link } from "react-router-dom";

const leftMenu = [
    { label: "Firm", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
];

const rightMenu = [
    { label: "Core Values", href: "#values" },
    { label: "Founders", href: "#founders" },
    { label: "Contact", href: "#contact" },
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
      ${isTop ? "bg-black/50" : "bg-black/60"}`}
            //   ${isTop ? "bg-transparent" : "bg-black/60"}`}
            >
                {/* Left Menu */}
                <div className="flex flex-1 justify-evenly border-r border-white/10">
                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>


                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>


                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>

                </div>

                {/* Logo / Company Name */}
                <div className="px-10 py-8 flex items-center gap-2 flex-shrink-0 border-x border-white/10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.5 -0.5 202 163"
                        className="w-12 h-12 cursor-pointer"
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


                    {/* <span className="text-xs tracking-[0.2em] uppercase">
                        ADITYA CONSTRUCTION
                    </span> */}
                </div>

                {/* Right Menu */}
                <div className="flex flex-1 justify-evenly border-l border-white/10">


                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>


                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>


                    <Link to="/" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 text-sm font-medium 
                  hover:text-white/90 hover:bg-black/10 transition-colors">
                            Home
                        </div>
                    </Link>

                </div>


            </div>
        </nav>
    );
};

export default Navbar;
