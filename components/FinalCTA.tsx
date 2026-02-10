import React from 'react';
import { Button } from './Button';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#3a130d] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Content */}
          <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
              Food, Groceries & <br /> Essentials Delivered the <br /> Easy Way
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
               {/* Google Play Button */}
               <div className="bg-[#fff5ee] rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-white transition-colors group">
                  <div className="text-2xl group-hover:scale-110 transition-transform">▶️</div>
                  <div className="text-left">
                     <p className="text-[10px] uppercase font-bold text-[#3a130d]/60 leading-none">Download on</p>
                     <p className="text-sm font-black text-[#3a130d] leading-none">Google Play</p>
                  </div>
               </div>
               
               {/* App Store Button */}
               <div className="bg-[#fff5ee] rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-white transition-colors group">
                  <div className="text-2xl group-hover:scale-110 transition-transform">🍎</div>
                  <div className="text-left">
                     <p className="text-[10px] uppercase font-bold text-[#3a130d]/60 leading-none">Download on</p>
                     <p className="text-sm font-black text-[#3a130d] leading-none">App Store</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="lg:w-1/2 relative min-h-[400px]">
             <div className="absolute inset-0 bg-[#4a1a12]">
                {/* Illustration placeholder - representing the woman with phone from screenshot */}
                <div className="absolute inset-x-0 bottom-0 top-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-80" />
                
                {/* Graphics Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white/20 text-9xl font-black italic">SuddenGo</div>
                </div>
                
                {/* Gradient fade to match mahogany box */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#3a130d] to-transparent" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
