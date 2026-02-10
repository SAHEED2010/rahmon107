import React from 'react';

const benefits = [
  {
    number: '01',
    title: 'Fast Delivery You Can Rely On',
    description: 'Get your food and essentials delivered in minutes — no delays, no stress.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400', // Placeholder for woman with burger
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
    description: 'Unlock quick, flexible micro-loans through SuddenGo’s in-app loan system.',
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-[#fff5ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black text-[#3a130d] mb-16 leading-tight">
          Why People Love <br /> Using SuddenGo
        </h2>
        
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {benefits.map((benefit, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[450px] aspect-[4/5] bg-[#ff4d1c] rounded-[2.5rem] p-8 flex flex-col justify-between snap-start relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  {benefit.number}
                </div>
              </div>
              
              {benefit.image && (
                <div className="absolute top-0 right-0 w-1/2 h-full z-0">
                    <img src={benefit.image} alt="" className="w-full h-full object-cover grayscale brightness-110" />
                    <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-r from-[#ff4d1c] via-[#ff4d1c]/80 to-transparent" />
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-white/90 text-lg font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
