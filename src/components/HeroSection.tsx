'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to(textRef.current, {
      y: -100,
      opacity: 0.5,
      duration: 1,
    });

    tl.to(imageRef.current, {
      scale: 1.1,
      duration: 1,
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="mil-banner relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="mil-lines-place absolute inset-0 pointer-events-none">
        <svg className="mil-lines w-full h-full" viewBox="0 0 1920 1080" fill="none">
          <path
            d="M0 540L1920 540"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1"
            className="mil-move"
          />
          <path
            d="M960 0L960 1080"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1"
            className="mil-move"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="mil-banner-content flex items-center min-h-screen">
          <div className="w-full lg:w-1/2">
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="mil-suptitle text-lg font-medium text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Creative Portfolio
              </motion.p>
              <motion.h1
                className="mil-h1 mil-mb-30 text-6xl lg:text-7xl font-light leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Pioneering
                <br />
                <span className="mil-accent">Creative</span>
                <br />
                Excellence
              </motion.h1>
              <motion.p
                className="mil-text-lg mil-mb-30 text-xl text-gray-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                We create innovative digital experiences that inspire and engage. 
                Our team combines creativity with technical expertise to deliver 
                exceptional results.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <a
                  href="/portfolio"
                  className="mil-button inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300"
                >
                  <span>View Our Work</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L8 15M8 15L15 8M8 15L1 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="mil-button inline-flex items-center space-x-2 border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <span>Get in Touch</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-20">
            <motion.div
              ref={imageRef}
              className="mil-portrait-frame relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              <div className="relative">
                <Image
                  src="/img/faces/1.jpg"
                  alt="Creative Portfolio"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="mil-nimbus absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-black rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 