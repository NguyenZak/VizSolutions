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
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import HiddenElements from '@/components/HiddenElements';
import ContactPopup from '@/components/ContactPopup';

export default function Home() {
  useEffect(() => {
    // Load scripts in order with proper waiting
    const loadScripts = async () => {
      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => reject();
          document.head.appendChild(script);
        });
      };

      try {
        // Load scripts in order
        await loadScript('/js/plugins/jquery.min.js');
        await loadScript('/js/plugins/gsap.min.js');
        await loadScript('/js/plugins/ScrollTrigger.min.js');
        await loadScript('/js/plugins/ScrollTo.min.js');
        await loadScript('/js/plugins/swup.min.js');
        await loadScript('/js/plugins/swiper.min.js');
        await loadScript('/js/plugins/fancybox.min.js');
        await loadScript('/js/plugins/smooth-scroll.js');
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
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
          <PartnersSection />
          <Footer />
          <HiddenElements />
          <ContactPopup />
        </div>
      </div>
    </div>
  );
}
