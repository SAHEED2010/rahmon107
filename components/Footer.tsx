import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#ff7a2d] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-12">
            <Link href="#" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-black group-hover:bg-white/20 transition-all">𝕏</span>
              <span className="text-xl font-bold uppercase tracking-widest">X/ twitter</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-black group-hover:bg-white/20 transition-all">📸</span>
              <span className="text-xl font-bold uppercase tracking-widest">instagram</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-black group-hover:bg-white/20 transition-all">🎵</span>
              <span className="text-xl font-bold uppercase tracking-widest">Tiktok</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-black group-hover:bg-white/20 transition-all">in</span>
              <span className="text-xl font-bold uppercase tracking-widest">Linkedin</span>
            </Link>
          </div>

          {/* App Links & Contact */}
          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#fff5ee] rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer group shadow-lg">
                <div className="text-2xl group-hover:scale-110 transition-transform">▶️</div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#3a130d]/60 leading-none">Download on</p>
                  <p className="text-sm font-black text-[#3a130d] leading-none">Google Play</p>
                </div>
              </div>
              <div className="bg-[#fff5ee] rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer group shadow-lg">
                <div className="text-2xl group-hover:scale-110 transition-transform">🍎</div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#3a130d]/60 leading-none">Download on</p>
                  <p className="text-sm font-black text-[#3a130d] leading-none">App Store</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:items-end text-sm md:text-base font-black tracking-tight">
              <div className="flex flex-wrap gap-x-4 gap-y-2 opacity-90 mb-2">
                <span>Email: Info@suddengo.com</span>
                <span className="hidden md:inline">|</span>
                <span>Contact: +234 708 796 000 6</span>
              </div>
              <div className="opacity-80 uppercase tracking-widest text-[10px] md:text-sm">
                 © All Rights Reserved. 2025, SuddenGo
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
