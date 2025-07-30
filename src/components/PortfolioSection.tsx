'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';


export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui', name: 'UI/UX' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'web',
      image: '/img/works/1.jpg',
      description: 'A comprehensive e-commerce solution with advanced features.',
      client: 'TechCorp',
      year: '2024',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '/img/works/2.jpg',
      description: 'Secure and user-friendly mobile banking application.',
      client: 'BankSecure',
      year: '2024',
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'branding',
      image: '/img/works/3.jpg',
      description: 'Complete brand identity and visual design system.',
      client: 'StartupXYZ',
      year: '2023',
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'web',
      image: '/img/works/4.jpg',
      description: 'Modern corporate website with improved user experience.',
      client: 'GlobalCorp',
      year: '2023',
    },
    {
      id: 5,
      title: 'Travel App UI/UX',
      category: 'ui',
      image: '/img/works/5.jpg',
      description: 'Intuitive travel application with beautiful user interface.',
      client: 'TravelGo',
      year: '2023',
    },
    {
      id: 6,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      image: '/img/works/6.jpg',
      description: 'Comprehensive digital marketing strategy and execution.',
      client: 'GrowthCo',
      year: '2023',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section ref={ref} className="mil-portfolio-section relative py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="mil-suptitle text-lg font-medium text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            className="mil-h2 mil-mb-30 text-5xl lg:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Featured
            <br />
            <span className="mil-accent">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="mil-portfolio-item group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              layout
            >
              {/* Image Container */}
              <div className="mil-cover-frame relative overflow-hidden rounded-lg">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="mil-h4 mil-bold text-xl mb-2">{item.title}</h3>
                    <p className="mil-text-sm text-gray-300 mb-4">{item.description}</p>
                    <a
                      href={`/project/${item.id}`}
                      className="mil-button inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L8 15M8 15L15 8M8 15L1 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.id === item.category)?.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="/portfolio"
            className="mil-button inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L8 15M8 15L15 8M8 15L1 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 