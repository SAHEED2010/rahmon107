import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#ff9a44] via-[#ff7a2d] to-[#ffb347]">
      {/* Cityscape background silhouettes */}
      <div className="absolute inset-x-0 bottom-0 z-0 opacity-20 h-full bg-[url('https://www.transparenttextures.com/patterns/city-silhouettes.png')] bg-repeat-x pointer-events-none" />
      
      {/* Subtle bird silhouettes */}
      <div className="absolute top-32 left-1/4 z-0 opacity-40 pointer-events-none text-2xl select-none">🦅</div>
      <div className="absolute top-56 left-1/3 z-0 opacity-30 pointer-events-none text-xl select-none">🦅</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] mb-8 drop-shadow-xl tracking-tighter">
              Your Delivery & <br />
              Financial Lifestyle <br />
              App — All in One <br />
              Place
            </h1>
            
            <p className="text-lg md:text-2xl text-white/95 mb-12 max-w-2xl leading-relaxed font-bold drop-shadow-sm">
              Get fast deliveries, send packages, pay with your wallet, earn referral rewards, and unlock micro-loans when you need them.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Google Play Button */}
              <div className="bg-[#fff5ee] rounded-2xl px-8 py-4 flex items-center gap-4 cursor-pointer hover:bg-white transition-all shadow-2xl group w-full sm:w-auto">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">▶️</div>
                  <div className="text-left">
                      <p className="text-[10px] uppercase font-extrabold text-[#3a130d]/50 leading-none mb-1">Download on</p>
                      <p className="text-lg font-black text-[#3a130d] leading-none">Google Play</p>
                  </div>
              </div>
              
              {/* App Store Button */}
              <div className="bg-[#fff5ee] rounded-2xl px-8 py-4 flex items-center gap-4 cursor-pointer hover:bg-white transition-all shadow-2xl group w-full sm:w-auto">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🍎</div>
                  <div className="text-left">
                      <p className="text-[10px] uppercase font-extrabold text-[#3a130d]/50 leading-none mb-1">Download on</p>
                      <p className="text-lg font-black text-[#3a130d] leading-none">App Store</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:translate-x-12 animate-in fade-in slide-in-from-right duration-1000">
               {/* Phone Mockup Matching Screenshot */}
               <div className="relative mx-auto w-[320px] h-[640px] bg-black rounded-[4rem] border-[10px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Phone Header (Orange Area) */}
                  <div className="absolute top-0 inset-x-0 h-48 bg-[#ff7a2d] p-7 flex flex-col justify-end">
                      <div className="flex justify-between items-center mb-6">
                          <div className="flex flex-col">
                              <span className="text-[9px] text-white/70 font-bold uppercase tracking-widest">Deliver to</span>
                              <span className="text-xs font-black text-white flex items-center gap-1">
                                  suite 212, 7 Aminu Kano Cres, Wus...
                                  <span className="text-[8px] opacity-70">▼</span>
                              </span>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-[#fff5ee] flex items-center justify-center text-lg shadow-inner">
                              👤
                          </div>
                      </div>
                      
                      {/* Delicious Menu Banner */}
                      <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-4 flex items-center justify-between shadow-xl h-24 overflow-hidden border border-white/20">
                          <div className="flex flex-col">
                              <span className="text-white font-black italic text-lg leading-none">DELICIOUS</span>
                              <span className="text-white font-black text-2xl leading-none">MENU</span>
                          </div>
                          <div className="text-4xl opacity-90 drop-shadow-md">🥘</div>
                      </div>
                  </div>
                  
                  {/* White Content Area */}
                  <div className="pt-52 p-6 bg-white h-full">
                      <p className="text-[13px] font-black text-black mb-4 uppercase tracking-tighter">Categories</p>
                      <div className="grid grid-cols-3 gap-3">
                          {[
                            { name: 'Restaurant', icon: '🍔', color: 'bg-orange-50' },
                            { name: 'Shops', icon: '🛍️', color: 'bg-purple-50' },
                            { name: 'Pharmacy', icon: '💊', color: 'bg-red-50' },
                            { name: 'Markets', icon: '🧺', color: 'bg-green-50' },
                            { name: 'Bakery', icon: '🍞', color: 'bg-amber-50' },
                            { name: 'Café', icon: '☕', color: 'bg-blue-50' }
                          ].map((cat, i) => (
                              <div key={i} className={`aspect-square ${cat.color} rounded-2xl flex flex-col items-center justify-center p-3 text-[9px] font-black text-center border border-gray-100 shadow-sm transition-transform hover:scale-105`}>
                                  <div className="text-2xl mb-2">{cat.icon}</div>
                                  {cat.name}
                              </div>
                          ))}
                      </div>
                      
                      {/* Nearby Restaurants */}
                      <div className="mt-8">
                          <p className="text-[13px] font-black text-black mb-4 uppercase tracking-tighter">Nearby Restaurants</p>
                          <div className="h-32 bg-gray-50 rounded-3xl border border-gray-100 flex items-center p-4 gap-4 mb-4 shadow-sm">
                              <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden relative">
                                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                              </div>
                              <div className="flex-1 space-y-3">
                                  <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
                                  <div className="h-3 w-1/2 bg-gray-100 rounded-full" />
                                  <div className="h-2 w-1/3 bg-gray-50 rounded-full" />
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500/20 blur-[2px]" />
                    </div>
                  </div>
               </div>
          </div>
        </div>
      </div>
    </section>
  );
};
