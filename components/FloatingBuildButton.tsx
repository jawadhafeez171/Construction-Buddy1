
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BuildHouseIcon from './icons/BuildHouseIcon';

const FloatingBuildButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-[65] transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Subtle pulsing glow effect */}
        <div className="absolute -inset-1 rounded-full bg-secondary opacity-20 blur-md animate-pulse"></div>
        
        {/* Main button */}
        <Link
          to="/contact"
          className="relative bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground rounded-full px-6 md:px-8 py-3 md:py-4 shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap border-2 border-white/20 hover:border-white/40 backdrop-blur-sm overflow-hidden font-bold text-base md:text-lg"
          aria-label="Build with us - Get a free quote"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:translate-x-full"></div>
          
          {/* Icon with subtle shadow */}
          <BuildHouseIcon className="relative h-6 w-6 md:h-7 md:w-7 drop-shadow-md z-10 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Text */}
          <span className="relative z-10 drop-shadow-sm">Build With Us</span>
          
          {/* Arrow indicator */}
          <svg 
            className="relative h-5 w-5 md:h-6 md:w-6 drop-shadow-sm z-10 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FloatingBuildButton;
