// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis"; 
import "./index.css";
import Layout from "./Layout";


import BrandNameAnimation from "./components/loaders/BrandNameAnimation";
import DoorAnimation from "./components/loaders/DoorAnimation";
import LoaderPanels from "./components/loaders/LoaderPanels";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [phase, setPhase] = useState(0);
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 1024 : true;
  const lenisRef = useRef(null);

  //============================================================================
  // Lenis implementation + sync with GSAP ScrollTrigger
  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // RAF loop for Lenis
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    //==============================
    // Sync ScrollTrigger with Lenis
    //==============================
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          ScrollTrigger.update();
          ticking = false;
        });
        ticking = true;
      }
    }

    lenisRef.current.on("scroll", onScroll);

    // Proxy scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenisRef.current.scrollTo(value, { immediate: true })
          : lenisRef.current.scroll.instance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Cleanup
    return () => {
      lenisRef.current.off("scroll", onScroll);
      lenisRef.current.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  //============================================================================

  const scrollToSection = (id) => {
    lenisRef.current.scrollTo(`#${id}`, {
      offset: -80,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  //============================================================================
  // Loading Animation phases (kept intact for future use)
  useEffect(() => {
    if (isDesktop) {
      setPhase(1);
    } else {
      setPhase(2);
    }
  }, [isDesktop]);
  //============================================================================

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout scrollToSection={scrollToSection} />} />
        <Route path="/projects" element={<Projects scrollToSection={scrollToSection} />} />
      </Routes>

      {/* Panels visible for animation phases */}
      {phase !== 0 && <LoaderPanels visible={true} />}
      {phase === 1 && <BrandNameAnimation onComplete={() => setPhase(2)} />}
      {phase === 2 && <DoorAnimation onComplete={() => setPhase(0)} />}
    </Router>
  );
}
