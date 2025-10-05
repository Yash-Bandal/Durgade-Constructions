// src/components/Layout.jsx
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ValuesSection from './components/sections/ValuesSection';
import Contact from './components/sections/Contact';
import Founders from './components/sections/Founders';
// import Founders2 from './sections/Founders2';
// import GallerySection from './sections/GallerySection';

const LazyGallery = React.lazy(() => import('./components/sections/GallerySection'));

const Layout = ({ scrollToSection }) => {
  return (
    <main className="relative min-h-screen bg-white font-fieldwork-hum text-textDark ">

      <Navbar scrollToSection={scrollToSection} />
      {/* remove the px to flex full size  */}
      {/* <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">  */}

        <div className=" mx-auto">

          <section className='bg-white' id="hero">
            <Hero />
          </section>

          <section id="about" className="pt-0 bg-white ">
            <AboutSection />
          </section>


          <section id="portfolio" className="">
            <PortfolioSection />
          </section>


          <section id="values" className="">
            <ValuesSection />
          </section>


          {/* <section id="gallery" className="pt-large pb-large">
            <Suspense fallback={<LoaderPanels visible={true} />}>
              <LazyGallery />
            </Suspense>
          </section> */}

          <section id="founders" className="">
            <Founders />
          </section>

          {/* <section id="founders" className="">
            <Founders2 />
          </section> */}

        </div>
      <section id="Contact" className="">
        <Contact />
      </section>
    </main>
  );
};

export default Layout;