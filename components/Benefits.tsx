"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const benefits = [
  {
    number: '01',
    title: 'Fast Delivery You Can Rely On',
    description: 'Get your food and essentials delivered in minutes — no delays, no stress.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400', 
  },
  {
    number: '02',
    title: 'Affordable & Transparent Pricing',
    description: 'Enjoy fair delivery fees with no hidden charges. What you see is what you pay.',
  },
  {
    number: '03',
    title: 'Trusted Riders, Safe Service',
    description: 'Every delivery is handled by verified riders for your safety and peace of mind.',
  },
  {
    number: '04',
    title: 'Micro-Loans & Financial Access',
    description: 'Unlock quick, flexible micro-loans through SuddenGo\'s in-app loan system.',
  }

];

export const Benefits = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-black text-[var(--foreground)] mb-16 leading-tight text-center"
        >
          Why People Love <br /> Using SuddenGo
        </h2>
        
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="pb-12"
          >
            {benefits.map((benefit, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-[4/5] bg-[#ff6b00] rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-lg">
                      {benefit.number}
                    </div>
                  </div>
                  
                  {benefit.image && (
                    <div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none">
                        <img src={benefit.image} alt="" className="w-full h-full object-cover grayscale brightness-125" />
                        <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-r from-[#ff6b00] via-[#ff6b00]/80 to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-white/90 text-lg font-bold leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <button 
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg className="w-6 h-6 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg className="w-6 h-6 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
