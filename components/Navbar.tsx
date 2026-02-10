import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex flex-col group">
              <div className="flex items-center gap-2">
                {/* SuddenGo White Cloche Logo */}
                <div className="relative w-10 h-8 flex items-center justify-center">
                    <div className="absolute top-1 w-7 h-4 bg-white rounded-t-full" />
                    <div className="absolute bottom-1 w-9 h-1 bg-white rounded-full" />
                    <div className="absolute bottom-1 -left-1.5 w-2 h-0.5 bg-white/60 rounded-full" />
                    <div className="absolute top-0 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-3xl font-black text-white tracking-tighter">SuddenGo</span>
              </div>
              <span className="text-[9px] font-bold text-white/90 uppercase tracking-[0.05em] leading-none mt-1">
                Eat, Earn, Borrow — Your Daily Side Hustle in One App
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-[#ff7a2d] font-black rounded-xl px-10 h-14 shadow-xl transition-all active:scale-95 text-lg">
              Get App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
