import React from 'react';

export const AllInOne = () => {
  return (
    <section className="relative z-10 -mt-32 md:-mt-48 lg:-mt-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 border border-[#440906]/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
          <div className="lg:w-1/2" data-aos="fade-right">
             <h2 className="text-4xl md:text-5xl font-black text-[#440906] leading-[1.1] mb-6">
                Deliveries, Groceries, Wallet & Loans — All in One App
             </h2>
             <p className="text-xl text-[#440906] opacity-90 leading-relaxed mb-10 max-w-xl">
                SuddenGo connects you to meals, essentials, courier services, digital payments, referral rewards, and micro-loans — all in one powerful super-app.
             </p>
            
            <div className="flex flex-wrap gap-6 mb-16" data-aos="fade-up" data-aos-delay="200">
                 <div className="border-2 border-[#fe5722] bg-white rounded-2xl px-6 py-3 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-all shadow-lg group">
                    <svg className="w-6 h-6 text-[#fe5722]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-[#fe5722] text-base font-bold">Download on Google Play</div>
                 </div>
                  <div className="bg-[#fe5722] rounded-2xl px-6 py-3 flex items-center gap-4 cursor-pointer hover:bg-[#e64a19] transition-all shadow-2xl shadow-[#fe5722]/30 group">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-white text-base font-bold">Download on App Store</div>
                 </div>
            </div>
            
            <div className="mt-auto">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-10 bg-[#fe5722] rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-[#fe5722]/20">S</div>
                    <span className="text-3xl font-black text-[#fe5722] tracking-tighter">SuddenGo</span>
                </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative" data-aos="zoom-in" data-aos-delay="400">
             <div className="relative z-10 transform lg:scale-110 lg:translate-y-8 translate-y-6 max-w-[450px]">
                <img 
                  src="/woman-phone-food.png" 
                  alt="Woman using SuddenGo app" 
                  className="w-full h-auto object-contain"
                />
             </div>
             <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#fe5722]/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
