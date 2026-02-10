import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 py-3 md:py-4">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex flex-col gap-0.5 md:gap-1">
              <div className="flex items-center gap-2 md:gap-2.5">
                {/* SuddenGo Logo - Responsive sizing */}
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
  );
};
