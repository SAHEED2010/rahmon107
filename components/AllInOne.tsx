import React from 'react';

export const AllInOne = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fff5ee] rounded-[4rem] p-10 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 border border-[#3a130d]/5">
          <div className="lg:w-3/5 relative z-10 text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#3a130d] mb-10 leading-[1.1] tracking-tighter">
              Deliveries, Groceries, <br />
              Wallet & Loans — <br />
              All in One App
            </h2>
            <p className="text-xl md:text-2xl text-[#3a130d]/80 mb-12 leading-relaxed font-bold max-w-2xl">
              SuddenGo connects you to meals, essentials, courier services, digital payments, referral rewards, and micro-loans — all in one powerful super-app.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-16">
                 {/* Google Play Button */}
                 <div className="border-2 border-[#ff7a2d]/20 bg-white rounded-2xl px-6 py-3 flex items-center gap-4 cursor-pointer hover:bg-[#ff7a2d]/5 transition-all shadow-lg group">
                    <div className="text-3xl group-hover:scale-110 transition-transform">▶️</div>
                    <div className="text-[#ff7a2d] text-lg font-black">Download on Google Play</div>
                 </div>
                 {/* App Store Button */}
                 <div className="bg-[#ff7a2d] rounded-2xl px-6 py-3 flex items-center gap-4 cursor-pointer hover:bg-[#e66a25] transition-all shadow-2xl shadow-[#ff7a2d]/30 group">
                    <div className="text-3xl group-hover:scale-110 transition-transform text-white">🍎</div>
                    <div className="text-white text-lg font-black">Download on App Store</div>
                 </div>
            </div>
            
            <div className="mt-auto">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-10 bg-[#ff7a2d] rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-[#ff7a2d]/20">S</div>
                    <span className="text-3xl font-black text-[#ff7a2d] tracking-tighter">SuddenGo</span>
                </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
             <div className="relative z-10 transform lg:scale-150 lg:translate-y-12 translate-y-6">
                {/* Image matching the woman with burger/phone */}
                <div className="w-full aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden border-[8px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800" 
                      alt="Lifestyle" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a130d]/20 to-transparent" />
                </div>
             </div>
             
             {/* Large background decorative blob */}
             <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#ff7a2d]/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
