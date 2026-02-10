import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#fe5722] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Side: Social Media */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold">𝕏</span>
              <span className="text-xl font-bold">X/ twitter</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.92-.35-2.81.01-.76.28-1.39.87-1.69 1.61-.43.95-.31 2.08.3 2.92.51.74 1.34 1.25 2.25 1.4 1.02.2 2.13-.1 2.92-.81.65-.56 1.02-1.38 1.02-2.26V.02z"/>
              </svg>
              <span className="text-xl font-bold">Tiktok</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <div className="text-[#fe5722] font-bold text-sm">in</div>
              </div>
              <span className="text-xl font-bold">Linkedin</span>
            </a>
          </div>

          {/* Right Side: Downloads & Contact */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Google Play Button */}
              <div className="bg-white rounded-2xl px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all shadow-lg group">
                <svg className="w-6 h-6 text-[#fe5722]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-[#440906] text-sm font-bold">
                  Download on Google Play
                </div>
              </div>
              
              {/* App Store Button */}
              <div className="bg-white rounded-2xl px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all shadow-lg group">
                <svg className="w-6 h-6 text-[#fe5722]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-[#440906] text-sm font-bold">
                  Download on App Store
                </div>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xl md:text-2xl font-black mb-2">
                Email:Info@suddengo.com | Contact: +234 708 796 000 6
              </p>
              <p className="text-lg opacity-80 font-medium">
                © All Rights Reserved. 2025, SuddenGo
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
