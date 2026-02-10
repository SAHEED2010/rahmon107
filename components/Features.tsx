"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const features = [
  {
    title: 'Earn Badges & Climb the Leaderboard',
    description: 'Get rewarded for every order you make. Unlock badges, track your progress, and compete with friends as you enjoy fast, reliable deliveries.',
    image: '/assets/App-Screen-011.webp'
  },
  {
    title: 'Refer Friends & Earn Rewards',
    description: 'Share your unique referral code and get instant bonuses when your friends sign up and place their first order. More invites = more rewards.',
    image: '/assets/App-Screen-02.webp'
  },
  {
    title: 'Track Your Orders in Real Time',
    description: 'Know exactly where your rider is at every moment. From pickup to drop-off, SuddenGo gives you live delivery updates so you stay informed.',
    image: '/assets/App-Screen-03.webp'
  },
  {
    title: 'Access Quick Micro-Loans Instantly',
    description: 'Unlock flexible micro-loans based on your app activity and referrals. Build your score as you order, earn badges, and climb the leaderboard.',
    image: '/assets/Loan.webp'
  },
  {
    title: 'Order Tracking & Live Updates',
    description: 'Track your deliveries in real-time with our advanced GPS tracking system. Know exactly when your food or grocery will arrive at your doorstep.',
    image: '/assets/sudden-hero-1-1-scaled.webp'
  }
];

export const Features = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-[#8b0000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight text-center"
        >
          Powerful Features for <br /> Your Daily Lifestyle
        </h2>
        <div 
          data-aos="fade-up"
          className="flex flex-col md:flex-row justify-between items-start gap-12"
        >
          <p className="text-xl text-white/80 max-w-xl font-medium leading-relaxed">
            SuddenGo is more than delivery — it's a complete lifestyle and financial super-app. Enjoy real-time tracking, secure payments, referral rewards, and access to in-app micro-loans designed for everyday convenience.
          </p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-features',
            nextEl: '.swiper-button-next-features',
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
          className="pb-12 max-w-7xl mx-auto"
        >
          {features.map((feature, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#ff6b00] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 flex flex-col relative overflow-hidden group h-[500px] sm:h-[600px] shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 leading-tight relative z-10">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8 relative z-10">
                  {feature.description}
                </p>
                
                <div className="mt-auto relative z-10">
                    <div className="w-full flex justify-center">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-auto h-[300px] sm:h-[450px] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
                
                {/* Background design */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <button 
          className="swiper-button-prev-features absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg className="w-6 h-6 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="swiper-button-next-features absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg className="w-6 h-6 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};
