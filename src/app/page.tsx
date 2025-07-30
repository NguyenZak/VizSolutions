'use client';

import { useEffect } from 'react';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Frame from '@/components/Frame';
import Banner from '@/components/Banner';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import HiddenElements from '@/components/HiddenElements';

export default function Home() {
  useEffect(() => {
    // Load jQuery and other scripts
    const loadScripts = async () => {
      // jQuery
      const jquery = document.createElement('script');
      jquery.src = '/js/plugins/jquery.min.js';
      document.head.appendChild(jquery);

      // Swup
      const swup = document.createElement('script');
      swup.src = '/js/plugins/swup.min.js';
      document.head.appendChild(swup);

      // Swiper
      const swiper = document.createElement('script');
      swiper.src = '/js/plugins/swiper.min.js';
      document.head.appendChild(swiper);

      // Fancybox
      const fancybox = document.createElement('script');
      fancybox.src = '/js/plugins/fancybox.min.js';
      document.head.appendChild(fancybox);

      // GSAP
      const gsap = document.createElement('script');
      gsap.src = '/js/plugins/gsap.min.js';
      document.head.appendChild(gsap);

      // Scroll smoother
      const smoothScroll = document.createElement('script');
      smoothScroll.src = '/js/plugins/smooth-scroll.js';
      document.head.appendChild(smoothScroll);

      // Scroll trigger
      const scrollTrigger = document.createElement('script');
      scrollTrigger.src = '/js/plugins/ScrollTrigger.min.js';
      document.head.appendChild(scrollTrigger);

      // Scroll to
      const scrollTo = document.createElement('script');
      scrollTo.src = '/js/plugins/ScrollTo.min.js';
      document.head.appendChild(scrollTo);

      // Main JS
      const mainJs = document.createElement('script');
      mainJs.src = '/js/main.js';
      document.head.appendChild(mainJs);
    };

    loadScripts();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <Cursor />
      <Preloader />
      <Header />
      <Frame />
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          <Banner />
          <AboutSection />
          <ServicesSection />
          <TeamSection />
          <Footer />
          <HiddenElements />
        </div>
      </div>
    </div>
  );
}
