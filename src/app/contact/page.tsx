'use client';

import { useEffect } from 'react';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Frame from '@/components/Frame';
import Footer from '@/components/Footer';
import HiddenElements from '@/components/HiddenElements';
import ContactContent from '@/components/ContactContent';

export default function ContactPage() {
  useEffect(() => {
    const scripts = [
      '/js/plugins/jquery.min.js',
      '/js/plugins/swup.min.js',
      '/js/plugins/swiper.min.js',
      '/js/plugins/fancybox.min.js',
      '/js/plugins/gsap.min.js',
      '/js/plugins/smooth-scroll.js',
      '/js/plugins/ScrollTrigger.min.js',
      '/js/plugins/ScrollTo.min.js',
      '/js/main.js',
    ];
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.head.appendChild(script);
    });
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <Cursor />
      <Preloader />
      <Header />
      <Frame />
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          <ContactContent />
          <Footer />
          <HiddenElements />
        </div>
      </div>
    </div>
  );
} 