
import React from 'react';
import { PHONE_NUMBER, SOCIAL_LINKS } from '../constants';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[70] flex flex-col items-center space-y-3 md:space-y-4">
      {/* WhatsApp Button - Positioned above bottom nav on mobile */}
      <div className="relative group">
        {/* Subtle pulsing glow effect */}
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-20 blur-sm animate-pulse"></div>
        
        {/* Main button */}
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white rounded-full p-3 md:p-4 shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-45"></div>
          
          {/* Icon with subtle shadow */}
          <WhatsappIcon className="relative h-6 w-6 md:h-8 md:w-8 drop-shadow-lg z-10" />
        </a>
      </div>
      
      {/* Call Button - Hidden on mobile as it is in the header */}
      <div className="hidden md:block relative group">
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 rounded-full bg-secondary opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300"></div>
        
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground rounded-full p-4 shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-16 h-16 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm overflow-hidden"
          aria-label="Call us"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-45"></div>
          
          {/* Icon with subtle shadow */}
          <PhoneIcon className="relative h-8 w-8 drop-shadow-md z-10" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
