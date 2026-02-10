"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen md:min-h-[85vh] pt-20 md:pt-24 pb-48 md:pb-64 lg:pb-80 overflow-hidden bg-[#fe5722]">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 py-3 md:py-4">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2 md:gap-2.5">
                  {/* SuddenGo Logo */}
                  <div className="relative w-7 md:w-9 h-6 md:h-8 flex items-center justify-center">
                      <div className="absolute top-0.5 w-5 md:w-7 h-3 md:h-4 bg-white rounded-t-full" />
                      <div className="absolute bottom-0.5 w-6 md:w-8 h-0.5 md:h-1 bg-white rounded-full" />
                      <div className="absolute bottom-0.5 -left-1 md:-left-1.5 w-2 md:w-2.5 h-0.5 bg-white/30 rounded-full" />
                      <div className="absolute -top-0.5 w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-xl md:text-2xl font-black text-white tracking-tight">SuddenGo</span>
                </div>
                <span className="text-[8px] md:text-[9px] font-bold text-white uppercase tracking-wide leading-none opacity-95">
                  Eat, Earn, Borrow — Your Daily Side Hustle in One App
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cityscape background silhouettes - MORE PROMINENT */}
      <div className="absolute inset-x-0 bottom-0 z-0 opacity-40 h-2/5 bg-[url('https://www.transparenttextures.com/patterns/city-silhouettes.png')] bg-repeat-x pointer-events-none bg-bottom" />
      
      {/* Birds silhouettes */}
      <div className="absolute bottom-[18%] left-[22%] z-0 opacity-30 pointer-events-none select-none text-lg">🦅</div>
      <div className="absolute bottom-[12%] left-[28%] z-0 opacity-25 pointer-events-none select-none text-base">🦅</div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="text-left order-2 lg:order-1"
          >
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
              Your Delivery & Financial Lifestyle App — All in One Place
            </motion.h1>
            
            <motion.p variants={item} className="text-base md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium">
              Get fast deliveries, send packages, pay with your wallet, earn referral rewards, and unlock micro-loans when you need them.
            </motion.p>

            {/* WHITE DOWNLOAD BUTTONS like live site */}
            <motion.div variants={item} className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
              <a href="#" className="bg-white hover:bg-gray-50 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl transition-all group">
                <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="text-gray-800 font-bold text-base">Download on Google Play</span>
              </a>
              <a href="#" className="bg-white hover:bg-gray-50 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl transition-all group">
                <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <span className="text-gray-800 font-bold text-base">Download on App Store</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
               {/* Phone Mockup - Using actual product image from live site */}
               <div className="relative max-w-[450px] md:max-w-[450px]">
                  <img 
                    src="/phone.png" 
                    alt="SuddenGo App Interface" 
                    className="w-full h-auto object-contain"
                  />
               </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
